let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let maxim = taula[0];
let minim = taula[0];
for (let i = 1; i < taula.length; i++) {
    if (taula[i] > maxim) {
        maxim = taula[i];
    }
    if (taula[i] < minim) {
        minim = taula[i];
    }
}
console.log("El mes gran es " + maxim);
console.log("El mes petit es " + minim);
