// L’utente sceglie su cosa puntare: pari o dispari.
// L'utente inserisce un numero da 1 a 5.
// Il computer estrae un numero casuale sempre tra 1 e 5 (usando una funzione).
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

// L’utente sceglie su cosa puntare: pari o dispari.
let scelta = prompt(`Scegli pari o dispari`)

// L'utente inserisce un numero da 1 a 5.
let numeroUtente = prompt(`scegli un numero da 1 a 5`);
console.log(numeroUtente)

// Il computer estrae un numero casuale sempre tra 1 e 5 (usando una funzione).
// creo funzione per numero casuale cpu
function numeroCpu(min, max){
    return Math.floor(Math.random() * (max - min + 1)+ min); 
}

// creo variabile numero casuale
let rndNum = numeroCpu(1, 5);
console.log(rndNum)

// creo funzione per sommare i 2 numeri
function somma(numero1, numero2){
    return +numero1 + +numero2
}

// creo variabile somma 2 numeri
let sommaNum = somma(rndNum, numeroUtente)
console.log(sommaNum);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function pariDispari(n){
    if (n & 1 == 1) {
        return "dispari";
    }
    return "pari";
}

let pd = pariDispari(sommaNum)
console.log(pd)


// Dichiariamo chi ha vinto.
if(pd == scelta){
    console.log(`Hai vinto`)
} else{
    console.log(`Hai perso`)
}
