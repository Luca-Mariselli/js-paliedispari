// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.
// Sono accettate solo soluzioni che fanno uso del ciclo.
// Eventuali soluzioni più "comode" potete aggiungere come extra in un commit separato solo DOPO.

// Chiedo all’utente di inserire una parola.
let parola = prompt(`Inserisci una parola`)
console.log(parola)
let nuovaParola
// creo variabile parola invertita
let reversed = parola.split('').reverse().join('');
console.log(reversed);

// Creare una funzione per capire se la parola inserita è palindroma.
if(parola == reversed){
    alert(`Bravo, hai inserito un palindomo`)
} else{
   nuovaParola = alert(`non hai inserito un palindomo, ricarica la pagina e inserisci una nuova parola`)
}