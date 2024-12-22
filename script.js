let currentPlayer = "X"; // Le joueur commence par "X"

// Gestion du clic sur une case
function play(button) {
    // Marque la case avec le joueur actuel
    button.textContent = currentPlayer;
    button.disabled = true; // Désactive le bouton après utilisation

    // Vérifie si un joueur a gagné
    if (checkWinner()) {
        alert(`Le joueur ${currentPlayer} a gagné !`);
        disableAllButtons();
        return;
    }

    // Passe au joueur suivant
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Vérifie les conditions de victoire
function checkWinner() {
    const matrix = [
        [document.getElementById('x00').textContent, document.getElementById('x01').textContent, document.getElementById('x02').textContent],
        [document.getElementById('x10').textContent, document.getElementById('x11').textContent, document.getElementById('x12').textContent],
        [document.getElementById('x20').textContent, document.getElementById('x21').textContent, document.getElementById('x22').textContent]
    ];

    for (let i = 0; i < 3; i++) {
        // Vérifie les lignes et les colonnes
        if (
            (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] && matrix[i][0] !== "") ||
            (matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i] && matrix[0][i] !== "")
        ) {
            return true;
        }
    }

    // Vérifie les diagonales
    if (
        (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][0] !== "") ||
        (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[0][2] !== "")
    ) {
        return true;
    }

    return false;
}

// Désactive tous les boutons après victoire
function disableAllButtons() {
    const buttons = document.querySelectorAll("button[id^='x']");
    buttons.forEach(button => button.disabled = true);
}

// Réinitialise le jeu
function resetGame() {
    currentPlayer = "X"; // Réinitialise au joueur X
    const buttons = document.querySelectorAll("button[id^='x']");
    buttons.forEach(button => {
        button.textContent = ""; // Vide le contenu
        button.disabled = false; // Réactive tous les boutons
    });
}
