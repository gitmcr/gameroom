document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne toutes les cellules du jeu dans la variable "cells"
    const cells = document.querySelectorAll('.cell');
    // Initialise le joueur actuel à 'X' dans la variable "currentPlayer"
    let currentPlayer = 'X';
    // Initialise le tableau de jeu avec des cellules vides dans la variable "gameBoard"
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    // A chaque click sur une cellule
    cells.forEach(cell => {
        cell.addEventListener('click', cellClick);
    });

    // Appelle la fonction "cellClick"
    function cellClick() {
        // Récupère l'index de la cellule cliquée depuis l'attribut data-index dans le html
        const index = this.dataset.index;

        // Vérifie si la cellule est vide et s'il n'y a pas de gagnant
        if (gameBoard[index] === '' && !checkWinner()) {
            // Rempli la cellule avec le symbole du joueur actuel (X ou O)
            gameBoard[index] = currentPlayer;
            this.textContent = currentPlayer;

            // Vérifie s'il y a un gagnant
            if (checkWinner()) {
                // Colorie les cellules gagnantes et attend 100ms avant d'afficher l'alerte pour éviter un overlap
                highlightWinningCells();
                setTimeout(() => {
                    alert(`Le joueur avec les "${currentPlayer}" gagne!`);
                    askForNewGame();
                }, 100);  
            } else if (gameBoard.every(cell => cell !== '')) {
                // Attend 100ms avant d'afficher l'alerte pour permettre la colorisation des cellules gagnantes
                setTimeout(() => {
                    alert('C\'est une égalité!');
                    askForNewGame();
                }, 100);  
            } else {
                // Change le joueur actuel de X à O ou vice versa
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    // Vérifier s'il y a un gagnant
    function checkWinner() {                            
        // Patterns de victoire possibles sur le tableau
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        // Vérifie si au moins un pattern de victoire est présent
        return winPatterns.some(pattern => {
            // Déstructure le pattern en trois variables a, b, et c
            const [a, b, c] = pattern;
            // Vérifie si les cellules correspondantes aux indices a, b et c sont toutes occupées par le même joueur (X ou O)
            return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
        });
    }

    // Colorier les cellules gagnantes
    function highlightWinningCells() {
        // Patterns de victoire possibles sur le tableau
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        // Parcouriir chaque pattern de victoire
        winPatterns.forEach(pattern => {
            // Déstructure le pattern en trois variables a, b, et c
            const [a, b, c] = pattern;
            // Vérifie si les cellules correspondantes aux indices a, b et c sont toutes occupées par le même joueur (X ou O)
            if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
                // Ajoute la classe 'winning-cell' aux cellules gagnantes (background green)
                cells[a].classList.add('winning-cell');
                cells[b].classList.add('winning-cell');
                cells[c].classList.add('winning-cell');
            }
        });
    }

    // Demander si les users veulent jouer une nouvelle partie
    function askForNewGame() {
        // Affiche une boîte de dialogue avec les boutons OUI et NON, stocke le résultat clicked dans la variable playAgain
        const playAgain = confirm('Voulez-vous jouer une nouvelle partie?');

        // Si les users ont clické OUI
        if (playAgain) {
            // Réinitialise le tableau
            resetGame();
        }
    }

    // Réinitialiser le jeu
    function resetGame() {
        // Réinitialise le tableau de jeu avec des cases vides
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        // Réinitialise le texte de chaque cellule
        cells.forEach(cell => {
            cell.textContent = '';
            // Retire la classe 'winning-cell' des cellules
            cell.classList.remove('winning-cell');
        });
        // Réinitialise le joueur actuel à "X"
        currentPlayer = 'X';
    }
});