// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

var dlElt = document.createElement("dl");   // Create list

// Pour chaque mot, on construit une balise <dt> avec terme et une balise <dd> avec definition
mots.forEach(function(mot) {
    var dtElt = document.createElement("dt");
    var strongElt = document.createElement("strong");
    strongElt.textContent = mot.terme;
    var ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;

    dtElt.appendChild(strongElt);   // Ajout balise strong dans dt
    dlElt.appendChild(dtElt);       // Ajout balise dt dans dl
    dlElt.appendChild(ddElt);       // Ajout balise dd dans dl
});
document.getElementById("contenu").appendChild(dlElt);    // Ajout de la balise dl dans la balise id contenu