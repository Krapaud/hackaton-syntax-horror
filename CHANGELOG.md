# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.0.0] - 2025-10-31

### 🎃 Version Initiale - Halloween 2025

#### ✨ Ajouté

**Backend**
- Application Flask complète avec SQLAlchemy
- Système d'authentification (inscription, connexion, session)
- Base de données SQLite avec 3 tables (User, Progress, SecretData)
- API REST avec 8 endpoints
- Système de scoring et progression
- Leaderboard des meilleurs joueurs
- Gestion des erreurs et validation

**Frontend**
- 5 templates HTML (base, index, login, register, game)
- Interface complète avec thème Halloween
- Design responsive
- 4 énigmes interactives (Python, F12, SQL, C)
- Système de screamer avec animations
- Effets visuels (glitch, brouillard, araignées)
- JavaScript interactif avec easter eggs

**Styles et Animations**
- CSS complet (800+ lignes) avec thème Halloween
- Palette de couleurs Halloween
- Animations CSS (glitch, pulse, shake, etc.)
- Effets de particules et transitions
- Typographies personnalisées (Creepster, Nosifer)

**DevOps**
- Configuration Docker complète
- Docker Compose pour orchestration
- Scripts de démarrage (Linux/Mac/Windows)
- Fichiers de configuration (.env.example, .dockerignore, .gitignore)

**Documentation**
- README.md complet avec instructions
- QUICK_START.md pour démarrage rapide
- CONTRIBUTING.md pour les contributeurs
- TODO.md avec améliorations futures
- PRESENTATION.md du projet
- RECAP.md récapitulatif complet
- LICENSE MIT

**Tests**
- Script de test automatisé (test.py)
- Tests de structure, imports, routes, BDD

#### 🎮 Énigmes Incluses

1. **Python Corrompu** (Débutant)
   - Correction de code Python buggé
   - Solution : `Hello, World!`

2. **Le Secret Caché** (Débutant)
   - Flag caché dans la console F12
   - Solution : `HALLOWEEN2025`

3. **Base de Données Hantée** (Intermédiaire)
   - SQL Injection pour trouver un mot de passe
   - Solution : `sp00ky_p4ssw0rd`

4. **C Maudit** (Débutant)
   - Correction mentale de code C
   - Solution : `42`

#### 🎨 Fonctionnalités UI/UX

- Screamer sur mauvaise réponse
- Flash d'écran rouge
- Effet de tremblement
- Curseur personnalisé
- Araignées animées tombantes
- Brouillard atmosphérique
- Effet de glitch sur titres
- Animations de transition
- Particules de sang (optionnel)
- Easter egg : Konami Code

#### 🔧 Configuration

- Variables d'environnement configurables
- Port 5000 par défaut (modifiable)
- Base de données persistante avec volumes Docker
- SECRET_KEY configurable
- Mode développement/production

#### 📊 Statistiques

- ~25 fichiers créés
- ~1900 lignes de code
- 4 langages utilisés (Python, HTML, CSS, JavaScript)
- 3 tables de base de données
- 8 routes API
- Support multi-plateforme (Linux, Mac, Windows)

---

## [Non publié]

### 🚀 Améliorations Prévues

#### Sécurité
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] Bcrypt pour mots de passe
- [ ] Validation côté serveur renforcée
- [ ] Sessions sécurisées

#### Gameplay
- [ ] Timer par énigme
- [ ] Système de hints payants
- [ ] Mode difficulté
- [ ] Achievements
- [ ] Mode histoire

#### Énigmes
- [ ] 5-10 nouvelles énigmes
- [ ] Énigmes de regex
- [ ] Énigmes de cryptographie
- [ ] Énigmes de reverse engineering
- [ ] Énigmes de stéganographie

#### Technique
- [ ] Tests unitaires (pytest)
- [ ] CI/CD GitHub Actions
- [ ] Cache Redis
- [ ] PostgreSQL pour production
- [ ] API documentation (Swagger)
- [ ] WebSocket pour temps réel

#### Interface
- [ ] Images effrayantes réelles
- [ ] Sons et musiques d'ambiance
- [ ] Animations avancées
- [ ] PWA (Progressive Web App)
- [ ] Application mobile

#### Social
- [ ] Partage sur réseaux sociaux
- [ ] Profils utilisateurs enrichis
- [ ] Teams/guildes
- [ ] Chat intégré

---

## Format du Changelog

Types de changements :
- **Ajouté** : nouvelles fonctionnalités
- **Modifié** : modifications de fonctionnalités existantes
- **Déprécié** : fonctionnalités bientôt supprimées
- **Supprimé** : fonctionnalités supprimées
- **Corrigé** : corrections de bugs
- **Sécurité** : changements liés à la sécurité

---

**Note** : Pour voir tous les commits, utilisez `git log` ou consultez l'historique GitHub.

[1.0.0]: https://github.com/votre-username/hackaton-syntax-horror/releases/tag/v1.0.0
