console.log("benvenuto");

//Tra un'ora, esegui welcome
// setTimeout(welcome, 1 * 60 * 60 * 1000);

//Tra 3 secondi, esegui welcome
// setTimeout(welcome, 3 * 1000);

// function welcome() {
//     console.log('Hello');
// }

// const clock = setInterval(scandisciTempo, 2 * 1000);
// console.log("timer", clock); //restituisce l'id del timer, utile per stoppare

// function scandisciTempo() {
//     console.log('Sono trascorsi 2 secondi');
// }

// clearInterval(clock);

//Avviso tempi cottura
// const secondiMancanti = parseInt( prompt("Quanti secondi mancano alla cottura della pasta?") );

// setTimeout(function() {
//     alert("Scola la pasta!");
// }, secondiMancanti * 1000);

//Countdown fine anno
// let secondi = 3;

// let timer = setInterval(function() {

//     if(secondi == 0) {
//         console.log("Buon anno");
//         clearInterval(timer);
//     } else {
//         console.log(secondi);
//         secondi--;
//     }

// }, 1 * 1000);


//CRONOMETRO
let cronometro;
let tempo = 0;

document.getElementById("start").addEventListener("click", function() {
    cronometro = setInterval(function() {
        tempo++;
        document.getElementById("tempo").innerText = tempo;
    }, 1* 100);
});

document.getElementById("stop").addEventListener("click", function() {
    clearInterval(cronometro);
    tempo = 0;
});

document.getElementById("pause").addEventListener("click", function() {
    clearInterval(cronometro);
});

//ASYNC
// setTimeout(function() {
//     console.log('Ciao Asincrono');
// }, 3000); //stampa dopo 3 secondi

// console.log('Ciao');//viene stampato per primo
// console.log('Due');//viene stampato per secondo


//ASYNC
// setTimeout(esciDalParcheggio, 4000); 

// passaAuto('Macchina nera');
// passaAuto('Macchina rossa');
 
// function esciDalParcheggio() {
//    console.log('Esco dal parcheggio!');
// }
 
// function passaAuto(nomeAuto){
//   console.log("Sta passando la " + nomeAuto);
//   // codice che fa passare l'automobile nomeAuto
//   console.log("È passata la " + nomeAuto);
// }