// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.

var squadre = [
    {
        "nome": "Bologna",
        "punti": 0,
        "falli":0
    },
    {
        "nome": "Milan",
        "punti": 0,
        "falli":0
    },
    {
        "nome": "Inter",
        "punti": 0,
        "falli":0
    },
    {
        "nome": "Juventus",
        "punti": 0,
        "falli":0
    },
    {
        "nome": "Roma",
        "punti": 0,
        "falli":0
    },  
];

//funzione che genera numeri casuali
function generaNumeroCasuale (){
    return numero = Math.floor(Math.random()*100);
}

//variabili
var squadreFalli =[]

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti 
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
for(indice in squadre){
    squadre[indice].punti = generaNumeroCasuale()
    squadre[indice].falli = generaNumeroCasuale()
    squadreFalli.push(squadre[indice].nome, squadre[indice].falli)
}
console.log(squadreFalli);