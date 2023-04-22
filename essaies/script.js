// ! l'instruction IF
// // je créer une variable a et lui assigne la valeur 15
// let a = 15;

// // si a et supérieur a 0 alors
// if (a > 0) {
// // je range "+" dans signe
// 	signe = "+";
// } else {
// // sinon je lui assigne la valeur "-"
// 	signe = "-";
// }

// // version plus simple
// signe = "+";
// if (a < 0) {
// 	signe = "-";
// }

// // version ternaire
// let signe = a > 0 ? "+" : "-";

// function double(nombre){
//     return nombre*2
// }

// // je créer une variable nb et
// // je lui assigne la valeur 5
// let nb = 5;

// console.log(nb*2);

// ! ==========
// egalité ==  => 0 == "0" => true
// egalité strict === => 0 === "0" => false
// différence !=
// différence strict !==

// !---------------------- var, let, const ? -------------------------

// les constantes ne sont pas modifiable
// const TOTO = "toto";
// console.log(TOTO);

// TOTO = "tomate";
// console.log(TOTO);

//les variables var

// var prenom = "jean";
// console.log(prenom);

// prenom = "marie";
// console.log(prenom);

// ? commentaire en bleu

// TODO commentaire orange

/*
 * la différence entre const et let se trouve dans la portée des variables
 * let a une portée bloc
 * var a une portée fichier
 */

// if(prenom != "albert"){
//     var couleur = "rouge"
//     let age = 43
//     console.log(age);
// }

// console.log(couleur);
// console.log(age);

// ! ---------------------------- querySelector --------------------------------
// en js, on peut récuperer une ou plusieurs balise HTML
// on a plusieurs méthode getElementsByTagName, getElementsByClassName,
// getElementsById, mais pour faire plus simple je prefere utiliser querySelector
// querySelector permet de selectionné une balise HTML de la même maniere qu'en CSS
// const mainHTML = document.querySelector("#main");
// console.log(mainHTML);
// const footer = document.querySelector(".bouteille");
// console.log(footer);
// const p = document.querySelector("p");
// console.log(p);
// const p3 = document.querySelector("#p3");
// console.log(p3);

// const span = document.querySelector("p>span");
// console.log(span);

// // si on doit récuperer plusieurs éléements avec querySelector, on va utiliser
// // querySelectorAll()

// const allP = document.querySelectorAll("p");
// console.log(allP[2]);

// ! exemple d'event + manip dom
// je récupere mon bouton
const btn = document.querySelector("button");

//je lui associe une action sur le click
btn.addEventListener("click", function (e) {
	//empeche la validation du formulaire
	e.preventDefault();
	//parseInt transforme la valeur de mon input en nombre entier
	const valeur = parseInt(document.querySelector("#prix").value);
	// je vais poser ma condition => si valeur > 50 alors je rempli p1, sinon je rempli p3
	if (valeur > 50) {
		document.querySelector("#p1").textContent = "valeur supérieur à 50";
	} else {
		document.querySelector("#p2").textContent =
			"valeur inférieur ou égale à 50";
	}
});

const btnConcact = document.querySelector("#concat");

btnConcact.addEventListener("click", function () {
	const prenom = "laurent";
	const nom = "outan";
	document.querySelector(
		"#p3"
	).textContent = `je m'appelle ${prenom} ${nom}, j'ai 45 ans`;
});
