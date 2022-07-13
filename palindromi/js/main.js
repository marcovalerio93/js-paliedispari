// Snack3:

// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
// Usa il ciclo while!

// let i = 0;
// let numero;
// let somma = 0;

// while (i<= 10) {
//     numero = parseInt(prompt('inserisci numero'));
//     if (isNaN(numero)){
//         numero = 0;
//     }
//     console.log(numero);
//     somma += numero;
//     i++;
// }

// alert( 'La somma è: ' + somma);

// Snack4:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// Dove necessario usa il ciclo while

// const lista = ["Luca", "Paola", "Arianna", "Marco", "Lucia"];

// let nome = prompt('inserisci il tuo nome');
// let invitato = false;
// let x = 0;

// while (x < lista.length) {
//     if (nome.toUpperCase() == lista[x].toUpperCase()){
//         invitato = true;
//     }
//     x++;
// }

// if (invitato == false){
//     alert('non sei invitato');
// } else{
//     alert('benvenuto');
// }

// calcola la somma e la media dei primi 10 numeri

let x = 1;
const limite_numeri = 10;
let somma = 0;

while ( x <= limite_numeri) {
    somma += x;
    console.log(somma);
    x++;
}

console.log(x);
const media = somma / limite_numeri;
alert(media);
