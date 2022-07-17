/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

const EvenOdd = prompt('pari o dispari');
const numbScelto = parseInt(prompt('inserisci numero compreso tra 1 e 5'));

const numbPc = getRandomNumer(1,5);

const sumNumb = numbPc + numbScelto;

const resultEvenOdd = checkEvenOdd(sumNumb);

console.log(numbPc);

if (EvenOdd == resultEvenOdd) {
    alert('hai vinto');
} else {
    alert('hai perso');
} 

function checkEvenOdd (numb) {
    if ( numb % 2 == 0)  {
        return 'pari';
    } else {
        return 'dispari';
    }
}

function getRandomNumer(min, max) {
    return (Math.floor(Math.random() * ( max - min + 1)) + min);
}