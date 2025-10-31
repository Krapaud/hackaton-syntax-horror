# 🎃 SYNTAX HORROR - Présentation du Projet

## 📋 Informations Générales

**Nom du projet** : Syntax Horror  
**Type** : Escape Game Web  
**Thème** : Halloween  
**Technologies** : Python, Flask, HTML, CSS, JavaScript, SQL, Docker  
**Niveau** : Débutant (Développement & Cybersécurité)  
**Date** : Halloween 2025

---

## 🎯 Concept

Un Escape Game effrayant où les joueurs doivent résoudre des énigmes de programmation pour s'échapper. Chaque mauvaise réponse déclenche un **screamer** terrifiant !

---

## 🛠️ Technologies Utilisées

### Backend
- **Python 3.11** : Langage principal
- **Flask** : Framework web
- **SQLAlchemy** : ORM pour la base de données
- **Flask-Login** : Gestion d'authentification
- **SQLite** : Base de données

### Frontend
- **HTML5** : Structure
- **CSS3** : Styles avec thème Halloween
- **JavaScript ES6+** : Interactivité
- **Animations CSS** : Effets effrayants

### DevOps
- **Docker** : Containerisation
- **Docker Compose** : Orchestration

---

## 🎮 Fonctionnalités Principales

### ✅ Implémentées

1. **Système d'authentification**
   - Inscription utilisateur
   - Connexion sécurisée
   - Gestion de session

2. **4 Énigmes variées**
   - 🐍 Python : Correction de code buggé
   - 🔍 F12 : Flag caché dans la console
   - 🗃️ SQL : SQL Injection (intentionnelle pour l'énigme)
   - ⚙️ C : Erreurs de syntaxe

3. **Système de progression**
   - Score par énigme (100 points)
   - Suivi des tentatives
   - Énigmes complétées

4. **Leaderboard**
   - Classement des meilleurs joueurs
   - Top 10 visible sur la page d'accueil

5. **Screamer**
   - Animation effrayante sur mauvaise réponse
   - Effet de flash et tremblement d'écran
   - Modal avec émoji terrifiant

6. **Interface Halloween**
   - Design sombre et effrayant
   - Animations de brouillard
   - Araignées qui tombent
   - Effets de glitch sur les titres
   - Curseur personnalisé

---

## 📊 Architecture

```
┌─────────────────────────────────────────┐
│          FRONTEND (Client)              │
│  HTML5 + CSS3 + JavaScript              │
│  - Interface Halloween                  │
│  - Animations et effets                 │
│  - Screamer system                      │
└──────────────┬──────────────────────────┘
               │ HTTP/AJAX
               │
┌──────────────▼──────────────────────────┐
│          BACKEND (Flask)                │
│  - Routes et API                        │
│  - Authentification                     │
│  - Vérification des réponses            │
│  - Gestion des scores                   │
└──────────────┬──────────────────────────┘
               │ SQLAlchemy
               │
┌──────────────▼──────────────────────────┐
│      BASE DE DONNÉES (SQLite)           │
│  - Users (utilisateurs)                 │
│  - Progress (progression)               │
│  - SecretData (données pour énigmes)    │
└─────────────────────────────────────────┘
```

---

## 🎨 Design

### Palette de couleurs
- **Orange primaire** : `#ff6b00` (citrouilles, accents)
- **Rouge sang** : `#8b0000` (danger, erreurs)
- **Noir profond** : `#0a0a0a` (fond)
- **Vert matrix** : `#00ff41` (code, succès)
- **Violet mystique** : `#8b00ff` (indices, mystère)

### Typographie
- **Titres** : Creepster, Nosifer (Google Fonts)
- **Texte** : Roboto
- **Code** : Courier New (monospace)

### Effets visuels
- Animations de glitch
- Brouillard animé
- Araignées qui tombent
- Flash d'écran sur erreur
- Tremblement (shake)
- Particules de sang

---

## 📈 Métriques et Statistiques

### Base de données
- **3 tables** : Users, Progress, SecretData
- **Relations** : One-to-Many (User → Progress)

### Énigmes
- **4 énigmes** disponibles
- **4 langages** : Python, JavaScript, C, SQL
- **Difficulté** : Débutant à Intermédiaire
- **100 points** par énigme résolue

---

## 🚀 Déploiement

### Méthode 1 : Docker (Recommandée)
```bash
docker-compose up --build
```
✅ Isolation complète
✅ Pas de dépendances système
✅ Portable

### Méthode 2 : Installation locale
```bash
pip install -r requirements.txt
python app.py
```
✅ Plus rapide pour le développement
✅ Accès direct aux fichiers

---

## 📝 Endpoints API

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/` | Page d'accueil |
| GET/POST | `/register` | Inscription |
| GET/POST | `/login` | Connexion |
| GET | `/game` | Page de jeu (auth) |
| GET | `/api/progress` | Progression du joueur |
| POST | `/api/check_answer` | Vérifier une réponse |
| GET | `/api/leaderboard` | Classement |
| POST | `/api/search_secrets` | Recherche SQL |

---

## 🎓 Objectifs Pédagogiques

### Pour les Développeurs Débutants
1. ✅ Comprendre la structure d'une application web
2. ✅ Apprendre Flask et Python
3. ✅ Pratiquer HTML/CSS/JavaScript
4. ✅ Découvrir les bases de données
5. ✅ Utiliser Docker

### Pour la Cybersécurité
1. ✅ SQL Injection (intentionnelle)
2. ✅ Inspection du code source (F12)
3. ✅ Recherche de flags
4. ✅ Exploitation de vulnérabilités simples

---

## 🎯 Cas d'Usage

### Hackathon
- Projet complet en quelques heures
- Base solide pour extensions
- Thème attractif (Halloween)

### Formation
- Exemple d'application web complète
- Support de cours pour débutants
- Exercices pratiques de code

### Événements
- Animation pour soirée Halloween
- Compétition entre équipes
- Ice-breaker technique

---

## 📊 Statistiques du Projet

```
Lignes de code (environ) :
- Python (app.py)       : ~300 lignes
- HTML (templates)      : ~500 lignes
- CSS (style.css)       : ~800 lignes
- JavaScript (main.js)  : ~300 lignes
─────────────────────────────────────
TOTAL                   : ~1900 lignes

Fichiers créés : 20+
Temps de développement estimé : 8-12 heures
Taille du projet : ~2 MB (sans images/sons)
```

---

## 🏆 Points Forts

✅ **Projet complet** prêt à l'emploi  
✅ **Docker** pour déploiement facile  
✅ **Design soigné** avec thème Halloween  
✅ **Code commenté** et documenté  
✅ **Extensible** facilement  
✅ **Pédagogique** pour débutants  

---

## 🎃 Démonstration

### Page d'accueil
- Titre avec effet de glitch
- Présentation des énigmes
- Leaderboard
- Boutons d'inscription/connexion

### Page de jeu
- 4 cartes d'énigmes
- Score et statistiques en haut
- Interface interactive
- Screamer sur mauvaise réponse

### Screamer
- Écran rouge clignotant
- Énorme émoji effrayant (💀)
- Texte "MAUVAISE RÉPONSE !"
- Effet de tremblement

---

## 📚 Documentation Complète

Le projet inclut :
- ✅ README détaillé
- ✅ Guide de démarrage rapide (QUICK_START.md)
- ✅ Guide de contribution (CONTRIBUTING.md)
- ✅ TODO avec améliora tions (TODO.md)
- ✅ Script de test (test.py)
- ✅ Exemple de configuration (.env.example)

---

## 🎊 Conclusion

**Syntax Horror** est un projet d'Escape Game complet, fonctionnel et prêt à être déployé. Il combine apprentissage de la programmation, cybersécurité et divertissement dans une expérience effrayante sur le thème d'Halloween !

Parfait pour :
- 🎓 Apprendre le développement web
- 🏆 Hackathons
- 🎃 Événements Halloween
- 👥 Team building technique

---

**Créé avec 💀 pour Halloween 2025**

🎃 **Happy Halloween !** 👻
