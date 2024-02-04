document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');       // Défini la variable "cell" comme étant les cellules (const car ne change pas)
    let currentPlayer = 'X';                                // Défini la variable "currentPlayer" étant "X"
    let gameBoard = ['', '', '', '', '', '', '', '', ''];   // Défini la variable "gameBoard" étant une array avec 9 champs libres

    cells.forEach(cell => {                                 // A chaque click sur une cellule, lance la fonction "cellClick"
        cell.addEventListener('click', cellClick);
    });

    function cellClick() {  
        const index = this.dataset.index;                   // Récupère la valeur de "data-index" dans le HTML  (const car ne change pas)

        if (gameBoard[index] === '' && !checkWinner()) {    // Si l'index === à aucune valeur ET qu'il n'y a pas de gagnant (fonction checkWinner)
            gameBoard[index] = currentPlayer;               // Alors, index = currentPlayer
            this.textContent = currentPlayer;               // Changement du texte en "currentPlayer" sur la cellule en question

            if (checkWinner()) {                                            // Si il y a un gagnant
                alert(`Le joueur avec les "${currentPlayer}" gagne!`);      // Alerte avec le joueur qui gagne (X ou O)
            } else if (gameBoard.every(cell => cell !== '')) {              // Sinon, si pas de gagnant, on vérifie que toutes les cases sont bien remplies
                alert('C\'est une égalité!');                               // Si c'est le cas, c'est une égalité
            } else {                                                        // Sinon, si pas de gagnant ni d'égalité
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';          // Inverse le joueur actuel (ex: X en O ou inversement)
            }
        }
    }

    function checkWinner() {                            
        const winPatterns = [                       // Défini la variable winPatterns comme un array contenant les différents patterns gagnants
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winPatterns.some(pattern => {        // Vérifie si au moins un élément de l'array winPatterns satisfait une condition spécifiée
            const [a, b, c] = pattern;              // Déstructure en 3 variables a, b et c l'array
            return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];   // Si les cellules correspondantes aux indices a, b et c 
        });                                                                                                 // de l'array, sont occupées par le même joueur (X ou O)
    }                                                                                                       // cela signifie qu'il y a un gagnant selon le pattern
});

/*  "gameBoard[a] !== ''" vérifie que la cellule à l'indice "a" n'est pas vide
gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c] vérifie que les cellules associées aux indices a, b et c sont toutes occupées par le même joueur,
ce qui confirme qu'il a complété une ligne, colonne ou diagonale selon le pattern */