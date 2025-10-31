# 🎃 SYNTAX HORROR - Escape Game Halloween 🎃

Un Escape Game effrayant sur le thème d'Halloween avec des énigmes de programmation (Python, C, SQL) et de cybersécurité.

## 🎮 Fonctionnalités

- **Système d'authentification** : Inscription et connexion des utilisateurs
- **Énigmes variées** :
  - 🐍 Python : Correction de code buggé
  - ⚙️ Langage C : Détection d'erreurs de syntaxe
  - 🗃️ SQL : Exploration de bases de données et injection SQL
  - 🔐 Cybersécurité : Recherche de flags cachés (F12)
- **Screamer** : Pop-ups effrayants en cas de mauvaise réponse
- **Système de score** : Progression et classement des joueurs
- **Interface effrayante** : Design Halloween avec animations

## 🐳 Installation avec Docker

### Prérequis

- Docker
- Docker Compose

### Lancement rapide

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd hackaton-syntax-horror
```

2. **Lancer avec Docker Compose**
```bash
docker-compose up --build
```

3. **Accéder à l'application**
```
http://localhost:5000
```

### Commandes Docker utiles

**Arrêter le conteneur :**
```bash
docker-compose down
```

**Voir les logs :**
```bash
docker-compose logs -f
```

**Rebuild après modifications :**
```bash
docker-compose up --build
```

**Accéder au conteneur :**
```bash
docker exec -it escape-game-halloween bash
```

## 🛠️ Installation manuelle (sans Docker)

### Prérequis

- Python 3.11+
- pip

### Installation

1. **Créer un environnement virtuel**
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate  # Windows
```

2. **Installer les dépendances**
```bash
pip install -r requirements.txt
```

3. **Lancer l'application**
```bash
python app.py
```

4. **Accéder à l'application**
```
http://localhost:5000
```

## 📁 Structure du projet

```
hackaton-syntax-horror/
├── app.py                      # Application Flask principale
├── Dockerfile                  # Configuration Docker
├── docker-compose.yml          # Orchestration Docker
├── requirements.txt            # Dépendances Python
├── .dockerignore              # Fichiers ignorés par Docker
├── data/                       # Base de données SQLite
│   └── escape_game.db
├── static/                     # Fichiers statiques
│   ├── css/
│   │   └── style.css          # Styles Halloween
│   ├── js/
│   │   └── main.js            # JavaScript principal
│   ├── images/                # Images (à ajouter)
│   └── sounds/                # Sons effrayants (à ajouter)
└── templates/                  # Templates HTML
    ├── base.html              # Template de base
    ├── index.html             # Page d'accueil
    ├── login.html             # Page de connexion
    ├── register.html          # Page d'inscription
    └── game.html              # Page de jeu
```

## 🎯 Énigmes et Solutions

### Énigme 1 : Python Corrompu 🐍
**Objectif** : Trouver la sortie correcte du code Python après correction
**Solution** : `Hello, World!`

### Énigme 2 : Le Secret Caché 🔍
**Objectif** : Trouver le flag dans la console F12
**Solution** : `HALLOWEEN2025`

### Énigme 3 : Base de Données Hantée 🗃️
**Objectif** : Utiliser SQL injection pour trouver le mot de passe
**Indice** : Essayer `' OR '1'='1` dans la recherche
**Solution** : `sp00ky_p4ssw0rd`

### Énigme 4 : C Maudit ⚙️
**Objectif** : Corriger mentalement le code C et trouver le résultat
**Solution** : `42`

## 🎨 Personnalisation

### Ajouter des images

Placez vos images dans `static/images/` et référencez-les dans les templates :
```html
<img src="{{ url_for('static', filename='images/votre-image.png') }}" alt="Description">
```

### Ajouter des sons

Placez vos fichiers audio dans `static/sounds/` :
- `scream.mp3` : Son du screamer
- `ambient.mp3` : Musique d'ambiance
- `hover.mp3` : Son au survol

Puis décommentez les balises audio dans `templates/base.html`.

### Modifier les énigmes

Éditez le dictionnaire `correct_answers` dans `app.py` :
```python
correct_answers = {
    'puzzle1': 'Votre réponse',
    'puzzle2': 'Votre réponse',
    # ...
}
```

## 🔐 Configuration de production

### Variables d'environnement

Créez un fichier `.env` :
```env
FLASK_ENV=production
SECRET_KEY=votre-clé-secrète-très-longue-et-complexe
```

### Modifier docker-compose.yml

Remplacez `SECRET_KEY` par une valeur sécurisée dans `docker-compose.yml`.

## 🐛 Dépannage

### Le port 5000 est déjà utilisé

Modifiez le port dans `docker-compose.yml` :
```yaml
ports:
  - "8080:5000"  # Utiliser le port 8080 au lieu de 5000
```

### Erreur de base de données

Supprimez la base de données et relancez :
```bash
rm -rf data/
docker-compose up --build
```

### Permission denied sur Linux

```bash
sudo chown -R $USER:$USER data/
```

## 📝 API Endpoints

- `GET /` : Page d'accueil
- `POST /register` : Inscription
- `POST /login` : Connexion
- `GET /game` : Page de jeu (authentifié)
- `POST /api/check_answer` : Vérifier une réponse
- `GET /api/progress` : Obtenir la progression
- `POST /api/search_secrets` : Recherche dans la BDD (SQL)
- `GET /api/leaderboard` : Classement des joueurs

## 🚀 Améliorations possibles

- [ ] Ajouter plus d'énigmes
- [ ] Système de hints payants
- [ ] Mode multijoueur
- [ ] Timer pour chaque énigme
- [ ] Achievements/Badges
- [ ] Sons et musiques d'ambiance
- [ ] Animations plus poussées
- [ ] Mode histoire avec narration
- [ ] Sauvegarde cloud

## 👥 Contributeurs

- Votre équipe de développeurs

## 📄 Licence

MIT License - Libre d'utilisation

## 🎃 Happy Halloween ! 🎃

Amusez-vous bien et n'ayez pas trop peur ! 👻