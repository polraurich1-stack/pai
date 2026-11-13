let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let numero = Number(prompt("Introdueix un numero"));
let i = 0;
while (i < taula.length && taula[i] !== numero) {
    i++;
}
if (i < taula.length) {
    console.log("El numero si es a la taula");
} else {
    console.log("El numero no es a la taula");
}
