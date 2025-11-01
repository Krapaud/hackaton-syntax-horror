# Nouvelles Salles - Syntax Horror 🎃

## 📋 Résumé des modifications

J'ai créé **2 nouvelles salles** pour votre escape game Syntax Horror :

### 🔒 SALLE 5 : Enveloppe Maudite
- **Type** : Énigme interactive avec téléchargement de fichier
- **Objectif** : Résoudre une énigme sur un tueur légendaire pour déverrouiller le téléchargement du fichier `lettre_enigme.txt`
- **Énigme** : Indices sur Jason Voorhees (Crystal Lake, Vendredi 13, masque de hockey, etc.)
- **Réponse** : JASON
- **Récompense** : Téléchargement du fichier qui contient le mot de passe **FRI13TH** (pour l'énigme principale)

### 🗄️ SALLE 6 : Archives Cryptées
- **Type** : Chasse au trésor dans du texte avec techniques multiples
- **Objectif** : Trouver 4 fragments de mot de passe cachés dans une archive corrompue
- **Techniques utilisées** :
  - Texte invisible (à sélectionner avec la souris)
  - Éléments cachés en CSS (display: none)
  - Texte microscopique
  - Texte camouflé (même couleur que le fond)
  - Éléments leurres pour augmenter la difficulté
- **Fragments** : DARK, CODE, 2025, HORROR
- **Réponse** : DARK-CODE-2025-HORROR

## 📁 Fichiers créés/modifiés

### Nouveaux fichiers :
1. **`/templates/puzzle5_envelope.html`** - Page de la salle 5 (enveloppe interactive)
2. **`/templates/puzzle6_archives.html`** - Page de la salle 6 (archives cryptées)

### Fichiers modifiés :
1. **`/data/rooms.json`** - Ajout des définitions des salles 5 et 6
2. **`/app.py`** - Ajout des routes `/puzzle5` et `/puzzle6` + réponses correctes
3. **`/templates/game.html`** - Mise à jour des messages (6 salles au lieu de 4)
4. **`/static/js/room-manager.js`** - Gestion des types spéciaux "envelope" et "archives"
5. **`/static/css/style.css`** - Ajout des styles pour les boutons de salles spéciales

## 🎮 Comment jouer

### Salle 5 - Enveloppe Maudite :
1. Depuis le menu principal, la salle 5 apparaîtra après avoir résolu la salle 4
2. Cliquer sur le bouton "Ouvrir la salle de l'enveloppe"
3. Cliquer sur l'enveloppe pour la révéler
4. Lire les indices sur le tueur légendaire
5. Entrer le nom : **JASON**
6. Télécharger le fichier `lettre_enigme.txt`
7. Ouvrir le fichier pour découvrir le mot de passe : **FRI13TH**

### Salle 6 - Archives Cryptées :
1. Depuis le menu principal, la salle 6 apparaîtra après avoir résolu la salle 5
2. Cliquer sur le bouton "Ouvrir la salle des archives"
3. Explorer le texte avec différentes techniques :
   - **Fragment 1 (DARK)** : Sélectionner le texte invisible avec la souris
   - **Fragment 2 (CODE)** : Utiliser les boutons indices ou sélectionner le texte camouflé
   - **Fragment 3 (2025)** : Utiliser F12 pour modifier le CSS (display: none → display: block)
   - **Fragment 4 (HORROR)** : Zoomer sur le texte minuscule
4. Attention aux leurres (decoy-fragment) !
5. Entrer le mot de passe complet : **DARK-CODE-2025-HORROR**

## 🔑 Solutions rapides

| Salle | Réponse |
|-------|---------|
| Salle 1 | 5 |
| Salle 2 | HALLOWEEN2025 |
| Salle 3 | sp00ky_p4ssw0rd |
| Salle 4 | 42 |
| **Salle 5** | **JASON** |
| **Salle 6** | **DARK-CODE-2025-HORROR** |

## 🎨 Caractéristiques des nouvelles salles

### Salle 5 :
- ✅ Animation d'ouverture d'enveloppe interactive
- ✅ Design élégant avec cachet "CONFIDENTIEL"
- ✅ Énigme narrative sur Jason Voorhees
- ✅ Téléchargement réel du fichier `lettre_enigme.txt`
- ✅ Intégration avec le système de progression

### Salle 6 :
- ✅ Multiples techniques de dissimulation
- ✅ Système d'indices progressifs
- ✅ Leurres pour augmenter la difficulté
- ✅ Interface de type "labyrinthe textuel"
- ✅ Feedback visuels pour chaque action
- ✅ Boutons interactifs pour révéler des indices

## 🚀 Déploiement

Les modifications sont déjà en place. Le serveur Flask doit être redémarré pour prendre en compte les changements :

```bash
cd /home/krapaud/hackaton-syntax-horror
pkill -f "python app.py"
source venv/bin/activate
python app.py
```

## 🐛 Tests recommandés

1. ✅ Vérifier que les 6 salles s'affichent correctement dans le menu principal
2. ✅ Tester la progression : chaque salle se déverrouille après la précédente
3. ✅ Vérifier que le téléchargement du fichier fonctionne dans la salle 5
4. ✅ Tester toutes les techniques de recherche dans la salle 6
5. ✅ Vérifier que la victoire s'affiche après avoir résolu les 6 salles

## 📝 Notes importantes

- Le fichier `lettre_enigme.txt` existe déjà dans `/static/images/` et contient le mot de passe FRI13TH
- Les deux nouvelles salles ont des pages HTML dédiées (pas intégrées dans la carte principale)
- Les salles sont verrouillées par défaut et se déverrouillent progressivement
- Le système de progression enregistre automatiquement les salles résolues

## 🎯 Intégration avec l'énigme principale

La **Salle 5** fournit le mot de passe **FRI13TH** qui est mentionné comme un "mot de passe crucial pour l'énigme principale". Vous pouvez utiliser ce mot de passe où vous le souhaitez dans votre jeu (porte finale, bonus secret, etc.).

---

Créé le : 1er novembre 2025
Auteur : GitHub Copilot
Version : 1.0
