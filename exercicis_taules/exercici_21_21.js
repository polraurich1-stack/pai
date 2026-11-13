let taula = [1,2,3,5,6,7,8,9,0];
let posicio = Number(prompt("Introdueix una posicio"));
let nova = [];
for (let i = posicio; i < taula.length; i++) {
    nova.push(taula[i]);
}
console.log(nova);
