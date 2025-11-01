# ✅ Modification terminée - Salles 5 et 6 intégrées dans game.html

## 🎯 Changements effectués

### 1. **data/rooms.json**
- ✅ Salle 5 : Retiré `specialContent: "envelope"`, ajouté champ `enigma` avec les indices
- ✅ Salle 6 : Gardé `specialContent: "archives"` mais simplifié pour affichage dans la carte

### 2. **static/js/room-manager.js**
- ✅ Ajout de la gestion du champ `enigma` pour afficher l'énigme de la salle 5
- ✅ Ajout d'une section `archive-text-container` pour la salle 6 avec texte caché
- ✅ Suppression des liens vers les pages séparées

### 3. **static/css/style.css**
- ✅ Ajout des styles `.enigma-box`, `.enigma-title`, `.enigma-clue` pour la salle 5
- ✅ Ajout des styles `.archive-text-container`, `.invisible-text`, `.same-color-text`, `.tiny-text` pour la salle 6
- ✅ Styles de sélection de texte pour révéler les fragments cachés

### 4. **templates/game.html**
- ✅ Ajout d'une fonction `downloadLetterFile()` pour télécharger `lettre_enigme.txt`
- ✅ Modification de `submitAnswer()` pour déclencher le téléchargement après résolution de la salle 5
- ✅ Message narratif après téléchargement avec le mot de passe FRI13TH

## 🎮 Comment ça marche maintenant

### Salle 5 - Enveloppe Maudite
1. La salle s'affiche dans le jeu principal (comme les salles 1-4)
2. L'énigme sur Jason Voorhees est affichée directement dans la carte
3. L'utilisateur entre la réponse : **JASON**
4. Une confirmation apparaît pour télécharger le fichier `lettre_enigme.txt`
5. Un message narratif révèle le mot de passe : **FRI13TH**

### Salle 6 - Archives Cryptées
1. La salle s'affiche dans le jeu principal après la salle 5
2. Les indices sont affichés dans des boîtes d'information
3. Un conteneur avec du texte caché contient les 4 fragments :
   - **DARK** : texte invisible (à sélectionner)
   - **CODE** : texte de la même couleur que le fond (à sélectionner)
   - **2025** : caché dans un commentaire HTML (F12)
   - **HORROR** : texte minuscule (zoom navigateur)
4. L'utilisateur entre : **DARK-CODE-2025-HORROR**
5. La victoire finale se déclenche après cette 6ème salle

## 🔑 Solutions

| Salle | Réponse |
|-------|---------|
| Salle 5 | JASON |
| Salle 6 | DARK-CODE-2025-HORROR |

## 📝 Notes importantes

- ✅ Les messages narratifs de fin (victoire + proposition de recommencer) apparaissent après la salle 6
- ✅ Le fichier `lettre_enigme.txt` existe déjà dans `/static/images/`
- ✅ Les pages séparées `puzzle5_envelope.html` et `puzzle6_archives.html` ne sont plus utilisées
- ✅ Tout est maintenant intégré dans le flux principal du jeu

## 🚀 Pour tester

Redémarrez le serveur Flask si nécessaire et testez le jeu !

```bash
cd /home/krapaud/hackaton-syntax-horror
pkill -f "python app.py"
source venv/bin/activate
python app.py
```

---
Créé le : 1er novembre 2025
Mise à jour : Salles intégrées dans game.html
