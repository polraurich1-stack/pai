let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let valor = Number(prompt("Introdueix el valor que vols treure"));
let nova = [];
for (let i = 0; i < taula.length; i++) {
    if (taula[i] !== valor) {
        nova.push(taula[i]);
    }
}
console.log(nova);
