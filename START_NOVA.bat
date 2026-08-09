@echo off
cd /d "%~dp0"
title NOVA School
cls
echo.
echo ========================================
echo        NOVA SCHOOL - PREMIUM V6 FOCUS
echo ========================================
echo.
echo Demarrage de NOVA...
where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8765
  py -m http.server 8765
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8765
  python -m http.server 8765
  goto :eof
)
echo Python absent : utilisation de PowerShell.
start "" http://localhost:8765
PowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0NOVA_SERVER.ps1"
