function playerChoice() {
    const pierre = document.querySelector('.Pierre a');
    const feuille = document.querySelector('.Feuille a');
    const ciseaux = document.querySelector('.Ciseaux a');
    const playerIcon = document.querySelector('.Game .Player i');
    const PlayerVisibility = document.querySelector('.Game .Player');
    const ComputerVisibility = document.querySelector('.Game .Computer');

    // Fonction pour mettre l'icône visible et changer la classe
    function updatePlayerIcon(iconClass) {
        console.log(`Changement d'icône en: ${iconClass}`); 
        playerIcon.className = '';
        playerIcon.className = iconClass; 
        PlayerVisibility.style.visibility = 'visible'; 
        ComputerVisibility.style.visibility = 'visible'; 
    }

    pierre.addEventListener('click', (event) => {
        event.preventDefault();
        updatePlayerIcon('fa-light fa-hand-back-fist');
    });

    feuille.addEventListener('click', (event) => {
        event.preventDefault();
        updatePlayerIcon('fa-light fa-hand');
    });

    ciseaux.addEventListener('click', (event) => {
        event.preventDefault();
        updatePlayerIcon('fa-light fa-hand-scissors');
    });
}

// Fonction principale pour démarrer le jeu
function startGame() {
    playerChoice(); 
}

// Exécute startGame une fois la page complètement chargée
window.onload = startGame;
