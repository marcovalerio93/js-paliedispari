/*
1 - inserisci parola
2 - scorri parola verso sinistra 
3 - scorri parola verso destra
4 - controlla che le lettere siano e stesse
 */

let word = prompt('inserisci parola');

let drow = palindrome (word);

console.log (word,drow);

if (word == drow) {
    alert('palindroma');
} else{
    alert('non palindroma');
}

function palindrome (word){
    let my_word;
    for ( let i = word -1 ; i >= 0 ; i --) {
        my_word += word[i];
    }
    return my_word
}
