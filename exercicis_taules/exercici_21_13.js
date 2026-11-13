let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let valor = Number(prompt("Introdueix un valor"));
let vegades = 0;
for (let i = 0; i < taula.length; i++) {
    if (taula[i] === valor) {
        vegades++;
    }
}
console.log("Apareix " + vegades + " cops");
