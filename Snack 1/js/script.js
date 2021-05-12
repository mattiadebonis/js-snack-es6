// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.




var biciclette = [
    {
        nome:"Bicicletta 1",
        peso: 21
    },
    {
        nome:"Bicicletta 2",
        peso: 32
    },
    {
        nome:"Bicicletta 3",
        peso: 41
    },
    {
        nome:"Bicicletta 4",
        peso: 10
    },
    {
        nome:"Bicicletta 5",
        peso: 9
    },
];

//ordina array
var bicicletteOrdinato= biciclette.sort(function(a,b){
    return a.peso-b.peso;
})

let [biciclettaLeggera]= bicicletteOrdinato;
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


console.log(`La bicicletta che pesa di meno è ${biciclettaLeggera.nome}`)


