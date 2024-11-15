// Récupération des éléments DOM
const playerIcon = document.querySelector('.PlayerIcon');
const computerIcon = document.querySelector('.ComputerIcon');
const choices = document.querySelectorAll('.choice section img'); // Les images cliquables

// Tableau des choix possibles
const choicesData = [
    { name: 'Pierre', src: 'assets/img/Pierre.svg' },
    { name: 'Feuille', src: 'assets/img/Feuille.svg' },
    { name: 'Ciseaux', src: 'assets/img/Ciseau.svg' }
];

// Fonction pour obtenir un choix aléatoire
function getRandomChoice() {
    return choicesData[Math.floor(Math.random() * choicesData.length)];
}

// Ajout des événements de clic sur chaque image
choices.forEach((img, index) => {
    img.addEventListener('click', () => {
        // Mise à jour de l'icône du joueur
        const playerChoice = choicesData[index];
        playerIcon.src = playerChoice.src;
        playerIcon.alt = playerChoice.name;
        playerIcon.style.visibility = 'visible';

        // Générer un choix aléatoire pour l'ordinateur
        const computerChoice = getRandomChoice();
        computerIcon.src = computerChoice.src;
        computerIcon.alt = computerChoice.name;
        computerIcon.style.visibility = 'visible';
    });
});

// fonction refresh
document.querySelector('.replay a').addEventListener('click', function() {
    const refreshIcon = this.querySelector('img');
    const playerImage = document.querySelector('.Player img');
    const computerImage = document.querySelector('.Computer img');

    // Ajouter l'animation de rotation à l'icône de refresh
    refreshIcon.classList.add('rotate');

    // Rendre les images du joueur et de l'ordinateur invisibles
    playerImage.style.visibility = 'hidden';
    computerImage.style.visibility = 'hidden';

    // Supprimer la classe de rotation après 1 seconde pour pouvoir relancer l'animation au prochain clic
    setTimeout(() => {
        refreshIcon.classList.remove('rotate');
    }, 1000);
});


