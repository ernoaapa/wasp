@echo off
cd %1
if not exist schema.yaml if not exist schema.json goto :xit
echo Building %1
schema -core -go %2
:xit
cd ..
