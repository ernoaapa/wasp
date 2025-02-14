package client

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"strings"

	"golang.org/x/xerrors"

	"github.com/iotaledger/wasp/packages/webapi/model"
)

// WaspClient allows to make requests to the Wasp web API.
type WaspClient struct {
	httpClient http.Client
	baseURL    string
}

// NewWaspClient returns a new *WaspClient with the given baseURL and httpClient.
func NewWaspClient(baseURL string, httpClient ...http.Client) *WaspClient {
	if !strings.HasPrefix(baseURL, "http") {
		baseURL = "http://" + baseURL
	}
	if len(httpClient) > 0 {
		return &WaspClient{baseURL: baseURL, httpClient: httpClient[0]}
	}
	return &WaspClient{baseURL: baseURL}
}

func processResponse(res *http.Response, decodeTo interface{}) error {
	resBody, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return xerrors.Errorf("unable to read response body: %w", err)
	}
	defer res.Body.Close()

	if res.StatusCode >= 200 && res.StatusCode < 300 {
		if decodeTo != nil {
			return json.Unmarshal(resBody, decodeTo)
		}
		return nil
	}

	errRes := &model.HTTPError{}
	if err := json.Unmarshal(resBody, errRes); err != nil {
		errRes.Message = http.StatusText(res.StatusCode)
	}
	errRes.StatusCode = res.StatusCode
	return errRes
}

func (c *WaspClient) do(method, route string, reqObj, resObj interface{}) error {
	// marshal request object
	var data []byte
	if reqObj != nil {
		var err error
		data, err = json.Marshal(reqObj)
		if err != nil {
			return xerrors.Errorf("json.Marshal: %w", err)
		}
	}

	// construct request
	url := fmt.Sprintf("%s/%s", strings.TrimRight(c.baseURL, "/"), strings.TrimLeft(route, "/"))
	req, err := http.NewRequest(method, url, func() io.Reader { //nolint:noctx
		if data == nil {
			return nil
		}
		return bytes.NewReader(data)
	}())
	if err != nil {
		return xerrors.Errorf("http.NewRequest [%s %s]: %w", method, url, err)
	}

	if data != nil {
		req.Header.Set("Content-Type", "application/json")
	}

	// make the request
	res, err := c.httpClient.Do(req)
	if err != nil {
		return xerrors.Errorf("%s %s: %w", method, url, err)
	}

	// write response into response object
	err = processResponse(res, resObj)
	if err != nil {
		return xerrors.Errorf("%s %s: %w", method, url, err)
	}
	return nil
}

// BaseURL returns the baseURL of the client.
func (c *WaspClient) BaseURL() string {
	return c.baseURL
}
