//! Obtenir un chiffre aléatoire pour le prix 

function entierAleatoire (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var x = entierAleatoire(15,199) //? création d'une variable "x" dont la valeur sera comprise entre 15 et 199 ==> pour le prix
console.log(x)

//! Création de la fonction de vérification de la réponse de l'utilisateur

let submit = document.querySelector('#btt')
const valeur = parseInt(document.querySelector("#prix").value);
let y = 0




submit.addEventListener("click", function(e){
    e.preventDefault
    const valeur = parseInt(document.querySelector("#prix").value); 
    let newp = document.createElement('p')          //! création automatique de balise "p" pour ne pas limiter le nombre de réponse disponible
    let r = document.querySelector(".reponse")      //! création automatique de balise "p" pour ne pas limiter le nombre de réponse disponible
    console.log(valeur)

    

    

    if(valeur < x) {
        
        newp.textContent = "Votre réponse est en dessous du résultat attendu ==>" + valeur 
        y = x - valeur;
        console.log(y)
        barrechofroi (y)
        

    } else if (valeur > x) {
        
        newp.textContent = "votre réponse est au dessus du résultat attendu ==>" + valeur
        y = Math.abs( x - valeur );
        barrechofroi (y)

    } else if ( valeur === x) {
       
       newp.textContent = "WOW gg bro, tu as trouver la réponse ==>" + valeur
       y = x - valeur;
       barrechofroi (y)
       
    }
    r.prepend(newp) //! création automatique de balise "p" pour ne pas limiter le nombre de réponse disponible
    
})

let a = document.querySelector('#tou')


 //! fonction pour la barre chaud froid pour indice utilisateurs

function barrechofroi(y) {
console.log("fonction",y)
if(1 <= y && y < 5) {
        a.style.height = "180px";
        a.style.width = "40px";
        a.style.backgroundColor = "red";

} else if ( 5 <= y && y < 10) {
        a.style.height = "140px";
        a.style.width = "40px";
        a.style.backgroundColor = "orange";

} else if ( 10 <= y && y < 15) {
        a.style.height = "100px";
        a.style.width = "40px";
        a.style.backgroundColor = "yellow"
} else if ( 15 <= y && y < 20) {
        a.style.height = "50px"
        a.style.witdh = "40px"
        a.style.backgroundColor = "blue"
} else if ( y === 0 ) {
        a.style.height = "200px"
        a.style.width = "40px"
        a.style.backgroundColor = "red"

} }

    // if( 1 <= y < 5 ){
    //     a.style.height = "180px";
    //     a.style.width = "40px";
    //     a.style.backgroundColor = "red";
    // } else if ( 5 <= y < 10) {
    //     a.style.height = "140px";
    //     a.style.width = "40px";
    //     a.style.backgroundColor = "orange";

    // } else if ( 10 <= y && y < 15 ) {
    //     console.log("entre 10 et 15")
    //     a.style.height = "100px";
    //     a.style.width = "40px";
    //     a.style.backgroundColor = "yellow"
    // } else if ( 15 <= y < 20) {
    //     a.style.height = "50px"
    //     a.style.witdh = "40px"
    //     a.style.backgroundColor = "blue"
    // } else if ( y == 0) {
    //     a.style.height = "200px"
    //     a.style.width = "40px"
    //     a.style.backgroundColor = "red"
    // }


