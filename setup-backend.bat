@echo off
echo ========================================
echo    SETUP BACKEND PENTRU CONTACT FORM
echo ========================================
echo.

echo 1. Creez directorul server...
if not exist "server" mkdir server

echo 2. Navighez in directorul server...
cd server

echo 3. Instalez dependentele...
call npm install

echo.
echo ========================================
echo    CONFIGURARE NECESARA:
echo ========================================
echo.
echo 1. Copiaza env.example la .env:
echo    copy env.example .env
echo.
echo 2. Editeaza .env cu datele SMTP din cPanel:
echo    - SMTP_HOST=mail.popaiulia.com
echo    - SMTP_PORT=587
echo    - SMTP_USER=contact@popaiulia.com
echo    - SMTP_PASS=parola_pentru_contact@popaiulia.com
echo.
echo 3. Porneste serverul:
echo    npm start
echo.
echo ========================================
echo    BACKEND READY!
echo ========================================
pause
