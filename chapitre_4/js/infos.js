// Exercice : Informations sur un élément

var styleElt = getComputedStyle(document.getElementById("contenu"));	// Récupère le style css de id contenu
var listeElt = document.createElement("ul");	// Creation de l'élément ul
var hauteurElt = document.createElement("li");	// Creation d'un élément li
hauteurElt.textContent = "Hauteur : " + styleElt.height;	// Affiche la hauteur de l'élément id contenu
var longueurElt = document.createElement("li");   // Creation d'un élément li
longueurElt.textContent = "Longueur : " + styleElt.width;	// Affiche la longueur de l'élément id contenu


listeElt.appendChild(hauteurElt);	// hauteurElt devient enfant de listeElt
listeElt.appendChild(longueurElt);	// longueurElt devient enfant de listeElt
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));	// Création de texte
document.getElementById("infos").appendChild(listeElt);	// listeElt devient enfant de id infos