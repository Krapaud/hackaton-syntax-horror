# 🤝 Guide de Contribution

Merci de votre intérêt pour contribuer à **Syntax Horror** ! 🎃

## Comment contribuer

### 1. Fork et Clone

```bash
# Fork le projet sur GitHub, puis :
git clone https://github.com/votre-username/hackaton-syntax-horror.git
cd hackaton-syntax-horror
```

### 2. Créer une branche

```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
# ou
git checkout -b fix/correction-de-bug
```

### 3. Développer

- Suivez les conventions de code Python (PEP 8)
- Commentez votre code
- Testez vos modifications
- Ajoutez des tests si possible

### 4. Tester

```bash
# Installer les dépendances
pip install -r requirements.txt

# Lancer les tests
python test.py

# Tester avec Docker
docker-compose up --build
```

### 5. Commit

Utilisez des messages de commit clairs et descriptifs :

```bash
git add .
git commit -m "feat: Ajoute nouvelle énigme de regex"
# ou
git commit -m "fix: Corrige le bug du screamer"
# ou
git commit -m "docs: Met à jour le README"
```

### Convention de commit

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage, style
- `refactor:` Refactorisation de code
- `test:` Ajout de tests
- `chore:` Maintenance, dépendances

### 6. Push et Pull Request

```bash
git push origin feature/ma-nouvelle-fonctionnalite
```

Puis créez une Pull Request sur GitHub avec :
- Un titre clair
- Une description détaillée des changements
- Des captures d'écran si applicable
- Référence aux issues liées

## Types de contributions

### 🐛 Corrections de bugs
- Identifier et corriger les bugs
- Ajouter des tests pour éviter les régressions

### ✨ Nouvelles fonctionnalités
- Nouvelles énigmes
- Améliorations d'interface
- Nouveaux effets visuels/sonores

### 📚 Documentation
- Améliorer le README
- Ajouter des commentaires
- Créer des tutoriels

### 🎨 Design
- Améliorer le CSS
- Créer des animations
- Optimiser l'UX/UI

### 🔒 Sécurité
- Identifier les vulnérabilités
- Proposer des corrections

## Standards de code

### Python
```python
# Bonnes pratiques
- PEP 8 pour le style
- Docstrings pour les fonctions
- Type hints quand possible
- Gestion des exceptions

# Exemple
def calculate_score(points: int, multiplier: float = 1.0) -> int:
    """
    Calcule le score final avec multiplicateur.
    
    Args:
        points: Points de base
        multiplier: Multiplicateur de score
        
    Returns:
        Score final calculé
    """
    return int(points * multiplier)
```

### HTML/CSS
```html
<!-- Utiliser des classes sémantiques -->
<div class="puzzle-card puzzle-card--solved">
    <h3 class="puzzle-card__title">Titre</h3>
</div>
```

```css
/* Utiliser des variables CSS */
.puzzle-card {
    background: var(--card-bg);
    border: 2px solid var(--primary-color);
}
```

### JavaScript
```javascript
// Utiliser ES6+
// Async/await pour les promesses
// Commentaires clairs

async function submitAnswer(puzzleId) {
    try {
        const response = await fetch('/api/check_answer', {
            method: 'POST',
            body: JSON.stringify({ puzzle_id: puzzleId })
        });
        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
    }
}
```

## Ajouter une nouvelle énigme

### 1. Backend (app.py)

```python
# Ajouter dans correct_answers
correct_answers = {
    'puzzle5': 'votre_reponse',
}
```

### 2. Frontend (game.html)

```html
<div class="puzzle-card" data-puzzle="puzzle5">
    <div class="puzzle-header">
        <h3>🎯 ÉNIGME 5: Votre Titre</h3>
        <span class="difficulty medium">Intermédiaire</span>
    </div>
    <div class="puzzle-content">
        <p class="puzzle-description">
            Description de votre énigme...
        </p>
        <!-- Votre contenu -->
    </div>
</div>
```

## Checklist avant PR

- [ ] Le code fonctionne localement
- [ ] Les tests passent
- [ ] Le code suit les conventions
- [ ] La documentation est à jour
- [ ] Pas de console.log() oubliés
- [ ] Pas de fichiers sensibles (.env, etc.)
- [ ] Les images/sons sont optimisés

## Besoin d'aide ?

- Ouvrez une issue sur GitHub
- Contactez les mainteneurs
- Consultez la documentation

## Code de conduite

- Soyez respectueux
- Acceptez les critiques constructives
- Collaborez de manière positive
- Respectez les opinions des autres

## Licence

En contribuant, vous acceptez que vos contributions soient sous licence MIT.

---

Merci de contribuer à rendre Syntax Horror encore plus effrayant ! 👻🎃
