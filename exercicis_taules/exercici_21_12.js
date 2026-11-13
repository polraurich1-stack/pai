let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let parells = [];
for (let i = 0; i < taula.length; i++) {
    if (taula[i] % 2 === 0) {
        parells.push(taula[i]);
    }
}
console.log(parells);
