// Exercice : compter les clics

var compteurClics = 0;

function clic() {
	compteurClics++;
 	document.getElementById("compteurClics").textContent = compteurClics;
 }
document.getElementById("clic").addEventListener("click", clic);

document.getElementById("desactiver").addEventListener("click", function() {
	document.getElementById("clic").removeEventListener("click", clic);
});