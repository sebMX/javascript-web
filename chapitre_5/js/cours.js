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

// Appui sur une touche du clavier
// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function(e) {
	console.log("Vous avez appuyé sur la touche : " + String.fromCharCode(e.charCode));
});


// Affiche des informations sur un évènement
function infosClavier(e) {
	console.log("Evènement clavier : " + e.type + ", touche : " + e.keycode);
}
// Gestion de l'appui et du relachement d'une touche du clavier
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
	var bouton = "inconnu";
	switch (code) {
		case 0: // 0 est le code du bouton gauche
			bouton = "gauche";
			break;
		case 1: // 1 est le code du bouton milieu
			bouton = "milieu";
			break;
		case 2: // 2 est le code du bouton droit
			bouton = "droit";
			break;
	}
	return bouton;
}

// Affiche des informations sur un évènement souris
function infosSouris(e) {
	console.log("Evènement souris : " + e.type + ", bouton " + 
		getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);

// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);


// Fin du chargement de la page web

// Gestion de la fin de chargement de la page web
window.addEventListener("load", function() {
	console.log("Page entièrement chargée");
});

// Fermeture de la page web

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function(e) {
	var message = "On est bien ici !";
	e.returnValue = message;	// Provoque une demande de confirmation (standard)
	return message;		// Provoque une demande de confirmation (certains navigateurs)
});


// Aller plus loin avec les événements

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