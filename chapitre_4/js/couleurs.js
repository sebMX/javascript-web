// Exercice : couleur

var couleurTexte = prompt("Entrez une couleur de texte");
var couleurFond = prompt("Entres une couleur de fond");

var divElts = document.getElementsByTagName("div");
for (var i = 0; i < divElts.length; i++) {
	divElts[i].style.color = couleurTexte;
	divElts[i].style.backgroundColor = couleurFond;
}