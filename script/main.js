// Descrizione
// 1 -- Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
// 2 -- In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.         L’utente non può inserire più volte lo stesso numero.
// 3 -- Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// 4 -- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// 5 -- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Creiamo una funzione che generi numeri randomici da 1 a 100

var numeroBombe = [];

var selected = [];


while (numeroBombe.length < 16 ) {
  var bomb = getRandomNumber(1,100);

  if (!numeroBombe.includes(bomb)) {
      numeroBombe.push(bomb)
  }
}
console.log(numeroBombe);


var numeroUtente = parseInt(prompt('Inserisci un numero per volta, compreso tra 1 e 100'));

if (!numeroBombe.includes(numeroUtente) && !selected.includes(numeroUtente)) {
  selected.push(numeroUtente);
  console.log('Inserisci altro numero')
} else {
  console.log('stai attento')
}
console.log(selected);




// while ((numeroUtente != numeroBombe)){
//   numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
// }}

function getRandomNumber (min, max) { 
  var random = Math.floor(Math.random() * (max - min +1) ) + min;
  return random;
}