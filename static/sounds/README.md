# Sons et Musiques pour Syntax Horror

## Fichiers audio recommandés

Placez vos fichiers audio dans ce dossier :

### Sons pour le screamer
- `scream.mp3` : Cri effrayant (1-2 secondes)
- `monster.mp3` : Grognement de monstre
- `whisper.mp3` : Chuchotements inquiétants

### Musique d'ambiance
- `ambient.mp3` : Musique de fond effrayante (loop)
- `tension.mp3` : Musique de tension pour les énigmes

### Effets sonores
- `hover.mp3` : Son subtil au survol des boutons
- `success.mp3` : Son de victoire pour les bonnes réponses
- `error.mp3` : Son d'erreur (moins fort que le screamer)
- `heartbeat.mp3` : Battement de cœur
- `thunder.mp3` : Tonnerre
- `wind.mp3` : Vent sinistre

## Sources recommandées

### Gratuites et libres de droits :
- **Freesound** : https://freesound.org/
- **OpenGameArt** : https://opengameart.org/
- **Zapsplat** : https://www.zapsplat.com/
- **SoundBible** : http://soundbible.com/

### Générateurs de sons :
- **Bfxr** : https://www.bfxr.net/ (sons 8-bit)
- **ChipTone** : https://sfbgames.itch.io/chiptone

## Format recommandé

- **Format** : MP3 (meilleure compatibilité navigateurs)
- **Bitrate** : 128-192 kbps
- **Durée** : 
  - Screamers : 1-3 secondes
  - Ambiance : 30-60 secondes (loop)
  - Effets : 0.5-2 secondes

## Utilisation dans le code

Les sons sont déjà intégrés dans le code, décommentez simplement dans `templates/base.html` :

```html
<audio id="screamer-sound" preload="auto">
    <source src="{{ url_for('static', filename='sounds/scream.mp3') }}" type="audio/mpeg">
</audio>
```

## Note importante

Pour des raisons de copyright, nous ne fournissons pas les fichiers audio.
Vous devez les télécharger ou les créer vous-même.
