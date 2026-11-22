@echo off
cd /d "%~dp0"
echo ========================================================
echo   KOKO ACCESSORIES - STARTING AUTO-SAVE STOREFRONT
echo ========================================================
netstat -ano | findstr /R /C:":5500 " >nul
if errorlevel 1 (
    start "KOKO Auto-Saver" /min python server.py
    timeout /t 1 /nobreak >nul
)
start "" "http://localhost:5500/index.html"
