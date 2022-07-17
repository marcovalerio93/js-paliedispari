/*
1 - inserisci parola
2 - scorri parola verso sinistra 
3 - scorri parola verso destra
4 - controlla che le lettere siano e stesse
 */

let word = prompt('inserisci parola');

word = word.replaceAll(' ', '')

let drow = palindrome(word);

console.log (word, drow);

if (word == drow) {
    alert('palindroma');  
} else{
    alert('non palindroma');
}


function palindrome(reverse) { 
    let drow = '';
    for ( let i = reverse.length - 1; i >= 0 ; i-- ) {
        drow += reverse[i];

    }

    return drow;
}
