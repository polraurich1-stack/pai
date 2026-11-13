let taula = [1,2,3,4,5];
let invertida = [];
for (let i = 0; i < taula.length; i++) {
    invertida[i] = taula[taula.length - 1 - i];
}
console.log(invertida);
