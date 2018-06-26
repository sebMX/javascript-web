var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // La variable b contient l'objet body du DOM
console.log(b);

// Découvrir le type d'un nœud
if (document.body.nodeType === document.ELEMENT_NODE) {
	console.log("Body est un noeud élément");
} else {
	console.log("Body est un noeud textuel");
}

// Accès au premier enfant du noeud body
console.log(document.body.childNodes[0]);	// Correspond à un espace
// Accès au deuxième enfant du noeud body
console.log(document.body.childNodes[1]);	// Correspond au h1


// Parcourir la liste des nœuds enfants

// Affiche les noeuds enfant du noeud body
for (var i = 0; i < document.body.childNodes.length; i++) {
	console.log(document.body.childNodes[i]);
}


// Accéder au parent d'un nœud

var h1 = document.body.childNodes[1];
console.log(h1.parentNode);		// Affiche le noeud body

console.log(document.parentNode);	// Affiche null : document n'a pas de noeud parent

