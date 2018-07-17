// Exercice : quiz intéractif

// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

// Numéro de la question
var numeroQuestion = 1;

// Creation fonction
function elementListe(question) {
	// Creation titre question
	var titreElt = document.createElement("strong");
	titreElt.textContent = "Question " + numeroQuestion + " : ";

	// Texte énoncé question dans balise i
	var textEnonceElt = document.createElement("i");
	textEnonceElt.textContent = question.enonce;

	// Enoncé dans question
	var enonceElt = document.createElement("div");
	enonceElt.appendChild(titreElt);
	enonceElt.appendChild(textEnonceElt);

	// Zone de réponse + bouton
	var zoneReponseElt = document.createElement("div");
	zoneReponseElt.style.paddingTop = "5px";
	var boutonElt = document.createElement("button");
	boutonElt.textContent = "Afficher la réponse";
	zoneReponseElt.appendChild(boutonElt);

	// Creation évènement au clic du bouton
	boutonElt.addEventListener("click", function() {
		// Remplace le bouton par réponse
		var reponseElt = document.createElement("div");
		reponseElt.textContent = question.reponse;
		zoneReponseElt.innerHTML = "";
		zoneReponseElt.appendChild(reponseElt);
	});
	// Creation div regroupe question + zone réponse
	var questionElt = document.createElement("p");
	questionElt.appendChild(enonceElt);
	questionElt.appendChild(zoneReponseElt);

	return questionElt;
}
// Cible élément id contenu
var contenu = document.getElementById("contenu");

// Création boucle : affiche tout le contenu
questions.forEach(function(question) {
	var listeElt = elementListe(question);
	contenu.appendChild(listeElt);
	numeroQuestion++;
});