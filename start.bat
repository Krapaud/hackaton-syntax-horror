@echo off
REM Script de démarrage rapide pour Syntax Horror - Windows
REM Escape Game Halloween

echo.
echo ================================== 
echo    SYNTAX HORROR - Escape Game
echo    Theme Halloween
echo ==================================
echo.

REM Vérifier si Docker est installé
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Docker n'est pas installe. Veuillez l'installer d'abord.
    echo https://docs.docker.com/get-docker/
    pause
    exit /b 1
)

REM Vérifier si Docker Compose est installé
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Docker Compose n'est pas installe. Veuillez l'installer d'abord.
    echo https://docs.docker.com/compose/install/
    pause
    exit /b 1
)

echo Docker et Docker Compose sont installes
echo.

REM Créer le dossier data s'il n'existe pas
if not exist "data" (
    echo Creation du dossier data...
    mkdir data
)

echo Lancement de l'application avec Docker...
echo.

REM Lancer Docker Compose
docker-compose up --build

pause
