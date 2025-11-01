# Images pour Syntax Horror

## Images recommandées

Placez vos images dans ce dossier :

### Images pour le screamer
- `ghost.png` : Image de fantôme effrayant
- `skull.png` : Crâne
- `demon.png` : Démon
- `monster.png` : Monstre

### Fond d'écran et ambiance
- `halloween-bg.jpg` : Fond d'écran Halloween
- `cobweb.png` : Toile d'araignée (transparente)
- `blood.png` : Éclaboussures de sang
- `fog.png` : Effet de brouillard

### Icônes
- `logo.png` : Logo du jeu
- `pumpkin.png` : Citrouille
- `bat.png` : Chauve-souris

### Énigmes
- `code-error.png` : Capture d'écran de code avec erreur
- `terminal.png` : Capture de terminal
- `database.png` : Icône de base de données

## Sources recommandées

### Gratuites et libres de droits :
- **Unsplash** : https://unsplash.com/
- **Pexels** : https://www.pexels.com/
- **Pixabay** : https://pixabay.com/
- **OpenGameArt** : https://opengameart.org/

### Générateurs d'images :
- **DALL-E** : https://openai.com/dall-e-2
- **Midjourney** : https://www.midjourney.com/
- **Stable Diffusion** : https://stablediffusionweb.com/

## Format recommandé

- **PNG** : Pour les images avec transparence (icônes, effets)
- **JPG** : Pour les photos et fonds d'écran
- **WebP** : Pour une meilleure optimisation (optionnel)

## Optimisation

Avant d'utiliser vos images :
1. Redimensionnez-les à la taille nécessaire
2. Compressez-les avec TinyPNG : https://tinypng.com/
3. Utilisez le format approprié

## Utilisation dans le code

Référencez vos images dans les templates HTML :

```html
<img src="{{ url_for('static', filename='images/votre-image.png') }}" alt="Description">
```

Ou dans le CSS :

```css
background-image: url('/static/images/votre-image.jpg');
```

## Note importante

Pour des raisons de copyright, nous ne fournissons pas les images.
Vous devez les télécharger, les créer vous-même, ou utiliser des générateurs d'IA.
