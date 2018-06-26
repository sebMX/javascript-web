// Parcourez le DOM

// Sélectionner des éléments

console.log(document.body.childNodes[5].childNodes[1]);	// Vite limité


// Sélection d'éléments selon leur balise

var titresElts = document.getElementsByTagName("h2");	// Cible tous les h2
console.log(titresElts[0]);		// Affiche le 1er titre h2
console.log(titresElts.length);	// Affiche 3
/*
* Le titre sélectionné correspond au premier élément de la liste renvoyée par l'appel 
* de getElementsByTagName. 
* On vérifie au passage que cette liste contient bien trois éléments.﻿﻿﻿﻿
*/


// Sélection d'éléments selon leur classe

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
	console.log(merveillesElts[i]);
}


// Sélection d'un élément selon son identifiant

// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));


// Sélection d'éléments à partir d'un sélecteur CSS

// Tous les paragraphes
console.log(document.querySelectorAll("p").length);	// Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length);	// Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length);	// Affiche 8

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe"));	// Affiche 1


// Le premier paragraphe
console.log(document.querySelector("p"));


// Obtenir des informations sur les éléments

// Le contenu HTML

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);


// Le contenu textuel

// Le contenu textuel de l'élément identifié par "contenu" (sans balise)
console.log(document.getElementById("contenu").textContent);


// Les attributs

// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));

// Certains attributs sont directement accessibles sous la forme de propriétés. 
// C'est notamment le cas pour les attributs id, href et value.

// L'identifiant de lma première liste
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);


// On peut vérifier la présence d'un attribut sur un élément grâce à la méthode hasAttribute, 
// comme dans l'exemple ci-après.

if (document.querySelector("a").hasAttribute("target")) {
	console.log("Le premier lien possède l'attribut target");
} else {
	console.log("Le premier lien ne possède pas l'attribut target");
}


// Les classes

// Dans une page web, une balise peut posséder plusieurs classes. 
// La propriéte classList permet de récupérer la liste des classes d'un élément du DOM. 
// Elle s'utilise comme un tableau.

// Liste des classes de l'élément identifié par "antiques"

var classes = document.getElementById("antiques").classList;
console.log(classes.length);	// Affiche 1 : l'élément possède une seule classe
console.log(classes[0]);	// Affiche "merveilles"

// Vous avez aussi la possibilité de tester la présence d'une classe dans un élément 
// en appelant la méthode contains sur la liste des classes.

if (document.getElementById("antiques").classList.contains("merveille")) {
	console.log("L'élément identifié par antiques possède la classe merveille");
} else {
	console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}