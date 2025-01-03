// Variables globales pour stocker les scores
let playerScore = 0;
let computerScore = 0;

// Fonction pour actualiser l'affichage des scores
function updateScore() {
    document.querySelector(".ScorePlayer p span").textContent = playerScore;
    document.querySelector(".ScoreComputer p span").textContent = computerScore;
    console.log(`Scores mis à jour - Joueur: ${playerScore}, Ordinateur: ${computerScore}`);
}

// Fonction pour afficher le choix du joueur
function displayPlayerChoice(playerChoice) {
    const playerImage = document.querySelector(".Player img");
    playerImage.src = `assets/img/${playerChoice}.svg`; 
    playerImage.style.visibility = "visible";
    console.log(`Affichage du choix du joueur: ${playerChoice}`);
}

// Fonction pour afficher le choix de l'ordinateur
function displayComputerChoice(computerChoice) {
    const computerImage = document.querySelector(".Computer img");
    computerImage.src = `assets/img/${computerChoice}.svg`; 
    computerImage.style.visibility = "visible";
    console.log(`Affichage du choix de l'ordinateur: ${computerChoice}`);
}

// Fonction pour afficher le résultat du jeu
function displayResult(result) {
    const resultSection = document.querySelector(".result");

    // Supprimer toutes les classes de style dynamique
    resultSection.classList.remove("victory", "defeat", "draw");

    // Ajouter une classe basée sur le résultat
    if (result === "Vous gagnez !") {
        resultSection.classList.add("victory");
    } else if (result === "L'ordinateur gagne !") {
        resultSection.classList.add("defeat");
    } else {
        resultSection.classList.add("draw");
    }

    // Mettre à jour le texte du résultat et rendre la section visible
    resultSection.textContent = result;
    resultSection.style.visibility = "visible"; 
    resultSection.style.display = "block"; 
    console.log(`Résultat affiché: ${result}`);
}


// Fonction pour vérifier le résultat du jeu et actualiser le score
function checkResult(playerChoice, computerChoice) {
    console.log(`Choix du joueur: ${playerChoice}, Choix de l'ordinateur: ${computerChoice}`);
    
    if (playerChoice === computerChoice) {
        return "Égalité";
    } else if (
        (playerChoice === "Pierre" && computerChoice === "Ciseaux") ||
        (playerChoice === "Ciseaux" && computerChoice === "Feuille") ||
        (playerChoice === "Feuille" && computerChoice === "Pierre")
    ) {
        playerScore++;
        updateScore(); // Actualise le score du joueur
        return "Vous gagnez !";
    } else {
        computerScore++;
        updateScore(); // Actualise le score de l'ordinateur
        return "L'ordinateur gagne !";
    }
}

// Fonction principale
function playGame(playerChoice) {
    console.log(`Le joueur a choisi: ${playerChoice}`);
    displayPlayerChoice(playerChoice);
    
    const computerChoice = getComputerChoice();
    displayComputerChoice(computerChoice);
    
    const result = checkResult(playerChoice, computerChoice);
    displayResult(result);
}

// Fonction pour obtenir un choix aléatoire pour l'ordinateur
function getComputerChoice() {
    const choices = ["Pierre", "Feuille", "Ciseaux"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Ajout des écouteurs d'événement pour les images de choix
document.querySelectorAll(".choice section img").forEach((img) => {
    img.addEventListener("click", (event) => {
        const playerChoice = event.target.alt;
        console.log(`Image cliquée, choix du joueur: ${playerChoice}`);
        playGame(playerChoice);
    });
});

// Fonction de réinitialisation des scores et des choix
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore(); // Remet les scores à zéro
    hideChoices();
    console.log("Le jeu a été réinitialisé.");
}

// Fonction pour masquer les choix et le texte des résultats
function hideChoices() {
    document.querySelector(".Player img").style.visibility = "hidden";
    document.querySelector(".Computer img").style.visibility = "hidden";
    const resultSection = document.querySelector(".result");
    resultSection.style.visibility = "hidden";
    resultSection.textContent = ""; // Supprime le texte du résultat
}

// Ajout d'un écouteur d'événement pour le bouton de réinitialisation
document.querySelector(".replay a").addEventListener("click", () => {
    resetGame();
});
