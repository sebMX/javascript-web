// Modifiez la structure de la page


// Modifier un élément existant

// Le contenu HTML
// La propriété innerHTML peut être utilisée pour modifier 
// le contenu HTML d'un élément du DOM. 

// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Suppression du contenu HTML de la liste
//document.getElementById("langages").innerHTML = "";


// Le contenu textuel

// Modification du contenu (ajout)
document.querySelector("h1").textContent += " de programmation";


// Les attributs

// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");
// OU
document.querySelector("h1").id = "titre";	// Code équivalent au précédent

// Les classes

var titreElt = document.querySelector("h1");	// Accès au premier titre h1
titreElt.classList.remove("debut");	// Suppression de la classe "debut"
titreElt.classList.add("titre");	// Ajout de la classe "titre"
console.log(titreElt);


// Ajouter un nouvel élément

// Création d'un noeud textuel

var rubyElt = document.createElement("li");	// Création d'un élément li
rubyElt.id = "ruby";	// Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby"));	// Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt);	// Insertion de l'élément li dans l'ul id langages


// Ajout d'un noeud avant un autre noeud

var perlElt = document.createElement("li");	// Création de l'élément li
perlElt.id = "perl";	// Définition de son identifiant
perlElt.textContent = "Perl";	// Définition de contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));


// Choix de la position exacte du nouveau noeud

/*
 Il existe également une méthode plus récente qui permet de définir encore plus précisément 
 la position des éléments insérés : insertAdjacentHTML. 
 On l'appelle sur un élément existant et elle prend en paramètres une position et une chaîne de caractères
 HTML qui représente le nouveau contenu à ajouter. La position du nouveau contenu doit être une valeur parmi :

    beforebegin: avant l'élément existant lui-même.

    afterbegin: juste à l'intérieur de l'élément existant, avant son premier enfant.

    beforeend: juste à l'intérieur de l'élément existant, après son dernier enfant.

    afterend: après l'élément existant lui-même.
*/

// Ajout d'un élément au tout début de la liste
document.getElementById("langages").insertAdjacentHTML("afterbegin", '<li id="javascript">JavaScript</li>');


// Remplacer ou supprimer un noeud

/*
 Le remplacement d'un élément du DOM par un autre s'effectue au moyen de la méthode replaceChild. 
 Celle-ci remplace un nœud enfant de l'élément courant par un autre nœud.Elle prend en paramètres 
 (dans cet ordre) le nouveau noeud et celui qui est remplacé.
*/

var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));


// Supprimer un noeud existant

/*
Enfin, il est possible de supprimer un noeud à l'aide de la méthode removeChild. 
Elle prend en paramètre le noeud à supprimer du DOM.
*/

// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));


// En résumé

/*
 Ce chapitre nous a permis de découvrir comment modifier la structure d'une page web. 
 Voici ce que vous devez en retenir.

    Les propriétés innerHTML,textContent et classList ainsi que la méthode setAttribute permettent de modifier 
    les informations d'un élément du DOM.

    La création d'un nouveau noeud s'effectue avec les méthodes createTextNode pour un noeud textuel et createElement 
    pour un élément.

    La méthode appendChild permet d'insérer un nouveau noeud comme dernier enfant d'un élément du DOM.

    Les méthodesinsertBeforeetinsertAdjacentHTMLoffrent des possibilités alternatives pour ajouter  du contenu.

    On peut remplacer un noeud existant avec la méthode replaceChild ou le supprimer avec removeChild.

    La manipulation du DOM en JavaScript doit se faire de manière raisonnée afin de ne pas dégrader les performances.
*/

// A vous de jouer !

//Ajout d'un paragraphe (résultat à obtenir)

// Modifiez le fichier cours.js afin d'ajouter sous la liste des langages un paragraphe contenant un lien vers 
// l'URL suivante : https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation. 

document.getElementById("contenu").insertAdjacentHTML("afterend", '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation"> liste</a> plus complète.</p>')