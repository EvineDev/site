@echo off
if exist "../api" rmdir /S /Q "../api"
mkdir "../api"
copy "eple.txt" "../api" > nul
copy "style.css" "../api" > nul
tsc