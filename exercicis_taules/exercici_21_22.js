let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let trobat = false;
for (let i = 0; i < taula.length && !trobat; i++) {
    for (let j = i + 1; j < taula.length && !trobat; j++) {
        if (taula[i] === taula[j]) {
            console.log("El primer numero repetit es " + taula[i]);
            trobat = true;
        }
    }
}
