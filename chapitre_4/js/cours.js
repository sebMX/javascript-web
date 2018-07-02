// Donnez du style à vos éléments

// La page web d'exemple
var pElt = document.querySelector("p");	// Selection du 1er p
pElt.style.color = "red";	// Affiche le texte en rouge
pElt.style.margin = "50px";	// Marge de 50px autour


// Les propriétés CSS composées

/*
 Certaines propriétés CSS s'écrivent sous la forme d'un nom composé. 
 Pour utiliser ces propriétés en JavaScript, il faut supprimer le tiret et écrire 
 la première lettre du mot suivant en majuscule.
*/

pElt.style.fontFamily = 'Arial';
pElt.style.backgroundColor = 'black';


// Accéder au style d'un élément

/*
 Essayons d'utiliser la propriété style pour récupérer les propriétés CSS d'un élément. 
 L'exemple suivant affiche la couleur du texte de chacun des trois paragraphes de notre page web.﻿﻿
*/

var paragraphesElt = document.getElementsByTagName("p");
console.log(paragraphesElt[0].style.color);	// Affiche "red"
console.log(paragraphesElt[1].style.color);	// Affiche "green"
console.log(paragraphesElt[2].style.color);	// N'affiche rien


// La fonction getComputedStyle

/*
 La bonne solution pour accéder au style d'un élément consiste à utiliser une fonction nommée getComputedStyle. 
 Elle prend en paramètre un noeud du DOM et renvoie un objet représentant son style. 
 On peut ensuite consulter les différentes propriétés CSS de cet objet.
*/

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);	// Affice "italic"
console.log(stylePara.color);	// Affiche bleu en rgb


// En résumé

/*
 Voici ce qu'il faut retenir de ce chapitre consacré à la gestion des styles.﻿﻿

    La propriété JavaScript style représente l'attribut style d'un élément du DOM. 
    Elle permet de modifier le style de cet élément en définissant la valeur de ses propriétés CSS.

    Les propriétés CSS composées s'écrivent avec la norme camelCase en JavaScript. 
    Par exemple, font-family devient fontFamily .

    La propriété JavaScript style est insuffisante pour accéder au style d'un élément. 
    Pour cela, on utilise la fonction getComputedStyle.
*/