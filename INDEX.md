# 📁 INDEX DES FICHIERS DU PROJET

## 🎃 SYNTAX HORROR - Escape Game Halloween

Projet créé le : **31 Octobre 2025** 🎃

---

## 📂 Structure Complète (28 fichiers)

### 🗂️ Racine du projet

```
hackaton-syntax-horror/
│
├── 📋 Configuration
│   ├── .dockerignore              # Fichiers ignorés par Docker
│   ├── .gitignore                 # Fichiers ignorés par Git
│   ├── .env.example               # Exemple de configuration environnement
│   ├── Dockerfile                 # Configuration container Docker
│   ├── docker-compose.yml         # Orchestration Docker Compose
│   └── requirements.txt           # Dépendances Python/pip
│
├── 🚀 Scripts d'exécution
│   ├── start.sh                   # Script démarrage Linux/Mac
│   └── start.bat                  # Script démarrage Windows
│
├── 💻 Code Source Backend
│   ├── app.py                     # Application Flask principale (~300 lignes)
│   └── test.py                    # Tests automatisés (~150 lignes)
│
├── 🎨 Templates HTML (5 fichiers)
│   ├── templates/
│   │   ├── base.html              # Template de base avec navbar et screamer
│   │   ├── index.html             # Page d'accueil avec présentation
│   │   ├── login.html             # Page de connexion
│   │   ├── register.html          # Page d'inscription
│   │   └── game.html              # Page du jeu avec 4 énigmes (~250 lignes)
│
├── 🌐 Assets Statiques
│   ├── static/css/
│   │   └── style.css              # Styles Halloween (~800 lignes)
│   ├── static/js/
│   │   └── main.js                # JavaScript interactif (~300 lignes)
│   ├── static/images/
│   │   └── README.md              # Guide pour ajouter des images
│   └── static/sounds/
│       └── README.md              # Guide pour ajouter des sons
│
└── 📚 Documentation (8 fichiers)
    ├── BANNER.txt                 # Banner ASCII du projet
    ├── README.md                  # Documentation principale (~200 lignes)
    ├── QUICK_START.md             # Démarrage rapide (~50 lignes)
    ├── CONTRIBUTING.md            # Guide de contribution (~150 lignes)
    ├── TODO.md                    # Liste des améliorations (~120 lignes)
    ├── PRESENTATION.md            # Présentation détaillée (~250 lignes)
    ├── RECAP.md                   # Récapitulatif complet (~300 lignes)
    ├── CHANGELOG.md               # Historique des versions (~150 lignes)
    ├── LICENSE                    # Licence MIT
    └── INDEX.md                   # Ce fichier
```

---

## 📊 Statistiques Détaillées

### Code Source
| Type | Fichiers | Lignes (approx) | Taille |
|------|----------|-----------------|--------|
| Python | 2 | ~450 | ~25 KB |
| HTML | 5 | ~500 | ~30 KB |
| CSS | 1 | ~800 | ~50 KB |
| JavaScript | 1 | ~300 | ~15 KB |
| **Total Code** | **9** | **~2050** | **~120 KB** |

### Documentation
| Type | Fichiers | Lignes (approx) | Taille |
|------|----------|-----------------|--------|
| Markdown | 8 | ~1500 | ~70 KB |
| Configuration | 6 | ~150 | ~5 KB |
| Scripts | 2 | ~50 | ~2 KB |
| **Total Docs** | **16** | **~1700** | **~77 KB** |

### Autres
| Type | Fichiers | Description |
|------|----------|-------------|
| Assets README | 2 | Guides pour images/sons |
| Banner | 1 | ASCII art du projet |

### Résumé Global
- **Total fichiers** : 28
- **Lignes de code** : ~2050
- **Lignes documentation** : ~1700
- **Lignes totales** : ~3750
- **Taille du projet** : ~400 KB (sans .git)
- **Langages** : 4 (Python, HTML, CSS, JavaScript)

---

## 🎯 Fichiers Clés par Fonctionnalité

### Pour Démarrer le Projet
1. `start.sh` ou `start.bat` - Scripts de démarrage
2. `docker-compose.yml` - Configuration Docker
3. `README.md` - Documentation complète
4. `QUICK_START.md` - Guide rapide

### Backend / API
1. `app.py` - Application Flask principale
2. `requirements.txt` - Dépendances Python

### Frontend / Interface
1. `templates/game.html` - Page de jeu avec énigmes
2. `static/css/style.css` - Styles Halloween
3. `static/js/main.js` - JavaScript interactif

### Configuration
1. `.env.example` - Variables d'environnement
2. `Dockerfile` - Container Docker
3. `docker-compose.yml` - Orchestration

### Documentation
1. `README.md` - Documentation principale
2. `PRESENTATION.md` - Présentation détaillée
3. `CONTRIBUTING.md` - Guide de contribution

---

## 🔍 Description des Fichiers Principaux

### Backend

**app.py** (300 lignes)
- Application Flask complète
- 8 routes API
- 3 modèles de base de données
- Système d'authentification
- Vérification des réponses
- Gestion des scores

**test.py** (150 lignes)
- Tests automatisés
- Vérification de la structure
- Tests des imports
- Tests de la base de données

### Frontend

**templates/base.html** (100 lignes)
- Template de base Jinja2
- Navbar avec authentification
- Modal de screamer
- Imports CSS/JS

**templates/game.html** (250 lignes)
- 4 cartes d'énigmes
- Panneau de score
- Console SQL interactive
- JavaScript pour soumission

**static/css/style.css** (800 lignes)
- Variables CSS
- Thème Halloween
- Animations (glitch, pulse, shake)
- Responsive design
- Screamer styles

**static/js/main.js** (300 lignes)
- Effets visuels (araignées, curseur)
- Gestion du screamer
- Easter eggs (Konami Code)
- Animations de particules

### Documentation

**README.md** (200 lignes)
- Installation Docker
- Installation manuelle
- Structure du projet
- Solutions des énigmes
- API endpoints
- Dépannage

**PRESENTATION.md** (250 lignes)
- Concept du projet
- Architecture technique
- Technologies utilisées
- Métriques et statistiques
- Objectifs pédagogiques

**CONTRIBUTING.md** (150 lignes)
- Guide de contribution
- Standards de code
- Convention de commit
- Checklist PR

**TODO.md** (120 lignes)
- Fonctionnalités implémentées
- Améliorations futures
- Bugs connus
- Idées créatives

---

## 🎮 Énigmes Implémentées

### Énigme 1 : Python Corrompu
- **Fichier** : `templates/game.html` (lignes 20-50)
- **Type** : Correction de code
- **Difficulté** : Débutant
- **Solution** : "Hello, World!"

### Énigme 2 : Le Secret Caché
- **Fichiers** : 
  - `templates/game.html` (lignes 52-75)
  - Console JavaScript
- **Type** : Flag caché (F12)
- **Difficulté** : Débutant
- **Solution** : "HALLOWEEN2025"

### Énigme 3 : Base de Données Hantée
- **Fichiers** :
  - `templates/game.html` (lignes 77-115)
  - `app.py` (endpoint `/api/search_secrets`)
- **Type** : SQL Injection
- **Difficulté** : Intermédiaire
- **Solution** : "sp00ky_p4ssw0rd"

### Énigme 4 : C Maudit
- **Fichier** : `templates/game.html` (lignes 117-145)
- **Type** : Erreurs de syntaxe
- **Difficulté** : Débutant
- **Solution** : "42"

---

## 🔧 Configuration et Déploiement

### Fichiers Docker
- `Dockerfile` : Image Python 3.11 avec Flask
- `docker-compose.yml` : Service web + volumes + réseau
- `.dockerignore` : Exclusions pour build

### Scripts de Démarrage
- `start.sh` : Vérifie Docker et lance docker-compose (Linux/Mac)
- `start.bat` : Équivalent Windows

### Configuration
- `.env.example` : Template des variables d'environnement
- `requirements.txt` : Flask, SQLAlchemy, Flask-Login

---

## 📝 Documentation par Audience

### Pour Débutants
1. `QUICK_START.md` - Démarrage en 3 étapes
2. `BANNER.txt` - Vue d'ensemble visuelle
3. `README.md` - Guide complet

### Pour Développeurs
1. `CONTRIBUTING.md` - Standards de code
2. `app.py` - Code source commenté
3. `TODO.md` - Roadmap

### Pour Présentation
1. `PRESENTATION.md` - Slides du projet
2. `RECAP.md` - Récapitulatif complet
3. `CHANGELOG.md` - Historique

---

## 🎨 Assets à Ajouter

Les dossiers suivants sont prêts pour vos assets :

### Images (`static/images/`)
Suggérés :
- `ghost.png` - Fantôme pour screamer
- `halloween-bg.jpg` - Fond d'écran
- `logo.png` - Logo du jeu

### Sons (`static/sounds/`)
Suggérés :
- `scream.mp3` - Cri de screamer
- `ambient.mp3` - Musique d'ambiance
- `success.mp3` - Son de victoire

Voir les README dans chaque dossier pour plus d'infos.

---

## 🚀 Prochaines Étapes

1. **Tester l'application**
   ```bash
   ./start.sh
   # ou
   docker-compose up --build
   ```

2. **Ajouter vos assets**
   - Images dans `static/images/`
   - Sons dans `static/sounds/`

3. **Personnaliser**
   - Modifier les énigmes dans `app.py`
   - Ajuster les styles dans `style.css`
   - Ajouter de nouvelles routes

4. **Déployer**
   - Modifier `SECRET_KEY` en production
   - Configurer un domaine
   - Utiliser PostgreSQL pour production

---

## 📞 Références Rapides

| Besoin | Fichier |
|--------|---------|
| Démarrer le projet | `start.sh` ou `QUICK_START.md` |
| Comprendre le code | `app.py` avec commentaires |
| Modifier les styles | `static/css/style.css` |
| Ajouter une énigme | `CONTRIBUTING.md` |
| Voir les solutions | `BANNER.txt` ou `README.md` |
| Problème technique | `README.md` section Dépannage |
| Contribuer | `CONTRIBUTING.md` |
| Roadmap | `TODO.md` |

---

## ✅ Checklist de Vérification

- [x] Backend Flask fonctionnel
- [x] Base de données SQLite configurée
- [x] Authentification complète
- [x] 4 énigmes implémentées
- [x] Interface Halloween
- [x] Screamer système
- [x] Docker configuré
- [x] Documentation complète
- [x] Scripts de démarrage
- [x] Tests automatisés
- [ ] Images ajoutées (optionnel)
- [ ] Sons ajoutés (optionnel)

---

**Projet créé avec 💀 pour Halloween 2025**

🎃 **Happy Halloween !** 👻

---

*Dernière mise à jour : 31 octobre 2025*  
*Version : 1.0.0*  
*Licence : MIT*
