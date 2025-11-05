#  Mastermind en JavaScript

##  Description
Ce projet est une implémentation du jeu **Mastermind** en **JavaScript**, **HTML** et **CSS**.  
Le joueur doit deviner une **combinaison secrète** en un nombre limité d’essais.

Deux modes de jeu sont disponibles :
- **Mode Chiffres** : deviner une suite de chiffres.  
- **Mode Couleurs** : deviner une suite de pastilles colorées, comme dans le jeu original.

---

##  Fonctionnalités
- Choix du **mode de jeu** (chiffres ou couleurs).  
- Choix de la **longueur de la combinaison** (4 à 6).  
- Choix du **nombre de chiffres ou couleurs possibles** (jusqu’à 9).  
- Affichage de l’**historique des tentatives** avec feedback :
  - `bien placé(s)` : bonne valeur à la bonne position.  
  - `mal placé(s)` : bonne valeur mais mauvaise position.  
- Historique des tentatives affiché dynamiquement.  
- Limite d’essais (**10 par défaut**).  
- Navigation fluide entre :
  1. Menu principal  
  2. Choix de la difficulté  
  3. Jeu  
- Boutons de retour pour :
  - Revenir au choix de difficulté.  
  - Revenir au menu principal.  

---

##  Utilisation
1. **Ouvrir** `index.html` dans un navigateur.  
2. **Écran 1** : choisir le **mode de jeu** (Chiffres ou Couleurs).  
3. **Écran 2** : définir la **difficulté** (longueur de la combinaison et nombre de chiffres/couleurs possibles).  
4. **Écran 3** : **jouer**.  
   - En **mode chiffres** : saisir la combinaison dans le champ prévu.  
   - En **mode couleurs** : cliquer sur les pastilles pour composer la combinaison.  
5. **Cliquer sur “Valider”** pour soumettre la tentative.  
6. L’**historique** affiche la proposition et le résultat.  
7. Continuer jusqu’à **trouver la combinaison** ou **atteindre la limite d’essais**.  

---

##  Étapes de développement
1. **Mise en place du mode chiffres**  
   → Génération d’une combinaison aléatoire, vérification des propositions, affichage du résultat.  
2. **Ajout de la limite d’essais**  
   → Maximum de 10 tentatives, révélation de la combinaison si échec.  
3. **Historique des tentatives**  
   → Affichage dynamique des propositions et résultats.  
4. **Amélioration de l’interface**  
   → Centrage, espacement, lisibilité, boutons de navigation.  
5. **Ajout du mode couleurs**  
   → Palette de pastilles cliquables, génération d’une combinaison secrète en couleurs, historique visuel.  
6. **Navigation multi-écrans**  
   → Menu principal, configuration, jeu, boutons de retour.  

---

##  Technologies utilisées
| Technologie | Utilisation |
|--------------|-------------|
| **HTML** | Structure du projet |
| **CSS** | Mise en page et style |
| **JavaScript** | Logique du jeu et gestion des événements |



