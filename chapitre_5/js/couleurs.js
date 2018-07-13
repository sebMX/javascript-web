// Exercice : couleurs paragraphe div

document.addEventListener("keypress", function(e) {
	var lettre = e.key.toLowerCase();
	var color = null;
	var divs = document.getElementsByTagName("div");

	switch(lettre) {
		case "r":
			color = "red";
			break;
		case "v":
			color = "green";
			break;
		case "j":
			color = "yellow";
			break;
		case "b":
			color = "white";
			break;
	}

	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = color;
	}
});