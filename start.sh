#!/bin/bash

# Script de démarrage rapide pour Syntax Horror
# Escape Game Halloween

echo "🎃 ================================== 🎃"
echo "   SYNTAX HORROR - Escape Game"
echo "   Thème Halloween"
echo "🎃 ================================== 🎃"
echo ""

# Vérifier si Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez l'installer d'abord."
    echo "   https://docs.docker.com/get-docker/"
    exit 1
fi

# Vérifier si Docker Compose est installé
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez l'installer d'abord."
    echo "   https://docs.docker.com/compose/install/"
    exit 1
fi

echo "✅ Docker et Docker Compose sont installés"
echo ""

# Créer le dossier data s'il n'existe pas
if [ ! -d "data" ]; then
    echo "📁 Création du dossier data..."
    mkdir -p data
fi

echo "🐳 Lancement de l'application avec Docker..."
echo ""

# Lancer Docker Compose
docker-compose up --build

# Note: Le script s'arrête ici car docker-compose up est bloquant
# Pour lancer en arrière-plan, utilisez: docker-compose up -d --build
