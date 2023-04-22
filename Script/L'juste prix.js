//! Obtenir un chiffre aléatoire pour le prix 

function entierAleatoire (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var x = entierAleatoire(15,199) //? création d'une variable "x" dont la valeur sera comprise entre 15 et 199 ==> pour le prix
console.log(x)

//! Création de la fonction de vérification de la réponse de l'utilisateur

let submit = document.querySelector('#btt')
const valeur = parseInt(document.querySelector("#prix").value);

submit.addEventListener("click", function(e){
    e.preventDefault
    const valeur = parseInt(document.querySelector("#prix").value);

    if(valeur < x) {

        newp.textContent = "Votre réponse est en dessous du résultat attendu"
        
    } else if (valeur > x) {

        newp.textContent = "votre réponse est au dessus du résultat attendu"

    } else if ( valeur === x) {

       newp.textContent = "WOW gg bro, tu as trouver la réponse"

    }
})

//! création automatique de balise "p" pour ne pas limiter le nombre de réponse disponible

let newp = document.createElement('p')
let r = document.querySelector(".reponse")

r.prepend(newp)




