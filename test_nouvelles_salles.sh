#!/bin/bash

echo "🎃 Test des nouvelles salles - Syntax Horror 🎃"
echo "================================================"
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Vérification des fichiers créés
echo "📁 Vérification des fichiers..."
echo ""

files=(
    "templates/puzzle5_envelope.html"
    "templates/puzzle6_archives.html"
    "NOUVELLES_SALLES.md"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file existe"
    else
        echo -e "${RED}✗${NC} $file manquant"
    fi
done

echo ""
echo "📋 Vérification de rooms.json..."

if grep -q '"id": "puzzle5"' data/rooms.json; then
    echo -e "${GREEN}✓${NC} Salle 5 présente dans rooms.json"
else
    echo -e "${RED}✗${NC} Salle 5 manquante dans rooms.json"
fi

if grep -q '"id": "puzzle6"' data/rooms.json; then
    echo -e "${GREEN}✓${NC} Salle 6 présente dans rooms.json"
else
    echo -e "${RED}✗${NC} Salle 6 manquante dans rooms.json"
fi

echo ""
echo "🔧 Vérification de app.py..."

if grep -q "puzzle5" app.py; then
    echo -e "${GREEN}✓${NC} Route puzzle5 présente dans app.py"
else
    echo -e "${RED}✗${NC} Route puzzle5 manquante dans app.py"
fi

if grep -q "puzzle6" app.py; then
    echo -e "${GREEN}✓${NC} Route puzzle6 présente dans app.py"
else
    echo -e "${RED}✗${NC} Route puzzle6 manquante dans app.py"
fi

if grep -q "JASON" app.py; then
    echo -e "${GREEN}✓${NC} Réponse JASON présente dans app.py"
else
    echo -e "${RED}✗${NC} Réponse JASON manquante dans app.py"
fi

if grep -q "DARK-CODE-2025-HORROR" app.py; then
    echo -e "${GREEN}✓${NC} Réponse DARK-CODE-2025-HORROR présente dans app.py"
else
    echo -e "${RED}✗${NC} Réponse DARK-CODE-2025-HORROR manquante dans app.py"
fi

echo ""
echo "🎨 Vérification du CSS..."

if grep -q "btn-special-room" static/css/style.css; then
    echo -e "${GREEN}✓${NC} Styles des salles spéciales présents dans style.css"
else
    echo -e "${RED}✗${NC} Styles des salles spéciales manquants dans style.css"
fi

echo ""
echo "📜 Vérification du fichier lettre_enigme.txt..."

if [ -f "static/images/lettre_enigme.txt" ]; then
    echo -e "${GREEN}✓${NC} lettre_enigme.txt existe"
    if grep -q "FRI13TH" static/images/lettre_enigme.txt; then
        echo -e "${GREEN}✓${NC} Le mot de passe FRI13TH est présent"
    else
        echo -e "${YELLOW}⚠${NC} Le mot de passe FRI13TH n'est pas trouvé dans le fichier"
    fi
else
    echo -e "${RED}✗${NC} lettre_enigme.txt manquant"
fi

echo ""
echo "🌐 Test du serveur..."

# Vérifier si le serveur répond
if curl -s http://localhost:5000/ > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Le serveur Flask répond sur le port 5000"
    
    # Test des routes
    if curl -s http://localhost:5000/puzzle5 | grep -q "SALLE 5"; then
        echo -e "${GREEN}✓${NC} Route /puzzle5 accessible"
    else
        echo -e "${RED}✗${NC} Route /puzzle5 non accessible ou contenu incorrect"
    fi
    
    if curl -s http://localhost:5000/puzzle6 | grep -q "SALLE 6"; then
        echo -e "${GREEN}✓${NC} Route /puzzle6 accessible"
    else
        echo -e "${RED}✗${NC} Route /puzzle6 non accessible ou contenu incorrect"
    fi
else
    echo -e "${RED}✗${NC} Le serveur Flask ne répond pas sur le port 5000"
    echo -e "${YELLOW}ℹ${NC} Démarrez le serveur avec: python app.py"
fi

echo ""
echo "================================================"
echo "🎉 Tests terminés !"
echo ""
echo "📖 Consultez NOUVELLES_SALLES.md pour plus d'informations"
echo ""
