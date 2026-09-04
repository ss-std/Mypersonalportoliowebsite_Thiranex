@echo off
setlocal

echo Installing frontend dependencies if needed...
call npm.cmd --prefix client install
if errorlevel 1 goto :error

echo Installing backend dependencies if needed...
call npm.cmd --prefix server install
if errorlevel 1 goto :error

echo Starting backend at http://localhost:5000
start "Portfolio Backend" cmd /k "cd /d %~dp0server && npm.cmd run dev"

echo Starting frontend at http://localhost:5173
start "Portfolio Frontend" cmd /k "cd /d %~dp0client && npm.cmd run dev -- --host localhost"

timeout /t 3 /nobreak >nul
start "" "http://localhost:5173"
echo.
echo Portfolio started. Keep both terminal windows open while using it.
exit /b 0

:error
echo.
echo Startup failed. Check the message above and try again.
pause
exit /b 1
