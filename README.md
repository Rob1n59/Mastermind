Mastermind en JavaScript
Description

Ce projet est une réinterprétation du jeu Mastermind, développé en HTML, CSS et JavaScript. Le but est de deviner une combinaison secrète en un nombre limité d’essais. Deux modes de jeu sont disponibles :

    Mode chiffres : deviner une suite de chiffres.

    Mode couleurs : deviner une suite de pastilles colorées, comme dans le jeu original.

Fonctionnalités principales

    Deux modes de jeu :

        Mode chiffres : saisie d’une combinaison numérique.

        Mode couleurs : sélection de pastilles colorées.

    Personnalisation de la difficulté :

        Longueur de la combinaison (4 à 6).

        Nombre de chiffres ou de couleurs possibles (jusqu’à 9).

    Historique des tentatives affiché dynamiquement :

        La combinaison proposée.

        Le résultat en dessous (bien placés / mal placés).

    Limite d’essais (10 par défaut).

    Navigation entre trois écrans :

        Menu principal (choix du mode).

        Choix de la difficulté.

        Jeu.

    Boutons de retour pour recommencer une partie ou revenir au menu.

Comment utiliser le jeu

    Ouvrir index.html dans un navigateur.

    Écran 1 : choisir le mode de jeu (Chiffres ou Couleurs).

    Écran 2 : définir la difficulté (longueur de la combinaison et nombre de chiffres/couleurs possibles).

    Écran 3 : jouer.

        En mode chiffres, saisir la proposition dans le champ prévu.

        En mode couleurs, cliquer sur les pastilles pour composer la combinaison.

    Cliquer sur "Valider" pour soumettre la tentative.

    L’historique affiche la proposition et le résultat.

    Continuer jusqu’à trouver la combinaison ou atteindre la limite d’essais.

Étapes de développement

    Mise en place du mode chiffres :

        Génération d’une combinaison aléatoire.

        Vérification des propositions (bien placés / mal placés).

        Affichage d’un message de victoire ou de défaite.

    Ajout de la limite d’essais :

        Maximum de 10 tentatives.

        Révélation de la combinaison si le joueur perd.

    Historique des tentatives :

        Affichage dynamique de chaque proposition.

        Résultat affiché sous la combinaison.

    Amélioration de l’interface utilisateur :

        Centrage de la fenêtre.

        Espacement et lisibilité.

        Boutons de navigation.

    Ajout du mode couleurs :

        Palette de pastilles cliquables.

        Génération d’une combinaison secrète en couleurs.

        Historique visuel avec pastilles colorées.

    Navigation multi-écrans :

        Menu principal pour choisir le mode.

        Écran de configuration pour définir la difficulté.

        Écran de jeu avec boutons de retour.

Technologies utilisées

    HTML5 pour la structure.

    CSS3 pour le style et la mise en page.

    JavaScript (ES6) pour la logique du jeu et la gestion des événements.
