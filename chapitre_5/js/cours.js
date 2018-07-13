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


// La grande famille des événements

// Ajout d'un gestionnaire qui affiche le type et la cible de l'évènement
document.getElementById("bouton").addEventListener("click", function (e) {
	console.log("Evènement : " + e.type + ", texte de la cible : " + e.target.textContent);
});


// Gestion des événements les plus courants

// Comprendre la propagation des événements

// Gestion du click sur le document
document.addEventListener("click", function() {
	console.log("Gestionnaire document");
});

// Gestion du click sur le paragraphe
document.getElementById("para").addEventListener("click", function() {
	console.log("Gestionnaire paragraphe");
});

// Gestion du click sur le bouton
document.getElementById("propa").addEventListener("click", function(e) {
	console.log("Gestionnaire bouton");
	e.stopPropagation();	// Arrêt de la propagation de l'événement
});


// Modifier le comportement par défaut en cas d'événement

document.getElementById("interdit").addEventListener("click", function(e) {
	console.log("Continuez plutot à lire le cours !");
	e.preventDefault();	// Annule la navigation vers la cible du lien
});


/*
En résumé

Voici les principales informations à retenir de ce chapitre.

    On peut rendre une page web interactive en écrivant du code JavaScript qui réagit aux événements 
    déclenchés sur la page.

    De nombreux types d'événements peuvent être gérés. 
    Chaque type d'événement est associé à un objetEvent spécifique qui apporte des informations sur 
    l'événement via ses propriétés.

    Les événements keypress, keydown et keyup permettent de réagir à l'utilisation du clavier.

    Les événements click, mousedown et mouseup permettent de gérer les interactions avec la souris.

    Le chargement et la fermeture de la page web sont associés aux événements load et beforeunload.

    Un événement se propage dans l'arborescence du DOM depuis son noeud d'origine jusqu'à la racine du document. 
    Cette propagation peut être interrompue à l'aide de la méthode stopPropagation.

    Il est possible d'annuler le comportement par défaut lié à un événement en appelant la méthode preventDefault. 
*/