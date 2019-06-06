@echo off
rmdir /S /Q "../api"
mkdir "../api"
copy "eple.txt" "../api" > nul
tsc