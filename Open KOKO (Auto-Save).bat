@echo off
title KOKO ACCESSORIES - Auto-Saver
cd /d "%~dp0"
echo ========================================================
echo   KOKO ACCESSORIES - AUTO-SAVE SERVER ACTIVE
echo   Saving changes automatically into D:\projects\koko accessories\
echo ========================================================
netstat -ano | findstr /R /C:":5500 " >nul
if errorlevel 1 (
    python server.py
) else (
    echo Auto-save server is already running on port 5500!
    start "" "http://localhost:5500/admin.html"
    pause
)
