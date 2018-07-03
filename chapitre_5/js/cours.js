// Réagissez à des événements

// La page web initiale

function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);

// OU : code concis = fonction anonyme

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function () {
    console.log("Clic");
});


// Suppression d'un gestionnaire d'événement

// Suppression du gestionnaire pour l'événement click
boutonElt.removeEventListener("click", clic);