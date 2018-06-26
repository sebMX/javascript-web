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

