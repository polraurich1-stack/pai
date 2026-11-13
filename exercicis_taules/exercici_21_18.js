let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let repetit = false;
for (let i = 1; i < taula.length; i++) {
    if (taula[i] === taula[0]) {
        repetit = true;
    }
}
if (repetit) {
    console.log("Si");
} else {
    console.log("No");
}
