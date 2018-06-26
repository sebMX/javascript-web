// Comptage des éléments

// TODO : écrire la fonction compterElements

function compterElements(selecteur) {
	return document.querySelectorAll(selecteur).length;
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2