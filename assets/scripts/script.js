// Sélection des éléments nécessaires
const choices = ["Pierre", "Feuille", "Ciseaux"];
const playerImage = document.querySelector('.Player img');
const computerImage = document.querySelector('.Computer img');
const resultText = document.querySelector('.result'); // Conteneur pour afficher le résultat

// Fonction pour obtenir un choix aléatoire de l'ordinateur
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Fonction pour déterminer le résultat
function determineResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Égalité !";
    } else if (
        (playerChoice === "Pierre" && computerChoice === "Ciseaux") ||
        (playerChoice === "Ciseaux" && computerChoice === "Feuille") ||
        (playerChoice === "Feuille" && computerChoice === "Pierre")
    ) {
        return "Victoire !";
    } else {
        return "Défaite !";
    }
}

// Fonction pour afficher le choix et le résultat
function displayChoicesAndResult(playerChoice, computerChoice, result) {
    // Mettre à jour les images du joueur et de l'ordinateur
    playerImage.src = `assets/img/${playerChoice}.svg`;
    playerImage.style.visibility = 'visible';

    computerImage.src = `assets/img/${computerChoice}.svg`;
    computerImage.style.visibility = 'visible';

    // Afficher le résultat
    resultText.textContent = result;
}

// Fonction principale qui lance le jeu
function mainGame(playerChoice) {
    // Étape 1 : Obtenir le choix de l'ordinateur
    const computerChoice = getComputerChoice();

    // Étape 2 : Déterminer le résultat
    const result = determineResult(playerChoice, computerChoice);

    // Étape 3 : Afficher les choix et le résultat
    displayChoicesAndResult(playerChoice, computerChoice, result);
}

// Ajouter un écouteur d'événements sur chaque choix du joueur
document.querySelectorAll('.choice section a').forEach((choiceElement, index) => {
    choiceElement.addEventListener('click', function(event) {
        event.preventDefault();
        const playerChoice = choices[index];
        mainGame(playerChoice); // Lancer le jeu avec le choix du joueur
    });
});

// Bouton de refresh pour réinitialiser les images et le texte du résultat
document.querySelector('.replay a').addEventListener('click', function() {
    const refreshIcon = this.querySelector('img');

    // Ajouter l'animation de rotation à l'icône de refresh
    refreshIcon.classList.add('rotate');

    // Rendre les images du joueur et de l'ordinateur invisibles
    playerImage.style.visibility = 'hidden';
    computerImage.style.visibility = 'hidden';

    // Effacer le texte du résultat
    resultText.textContent = "";

    // Supprimer la classe de rotation après 1 seconde pour pouvoir relancer l'animation au prochain clic
    setTimeout(() => {
        refreshIcon.classList.remove('rotate');
    }, 1000);
});
