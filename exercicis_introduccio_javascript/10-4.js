let a = 5;
let b = 4;
let e1 = a > b || a < b;
let e2 = a > b && a < b;
let e3 = e1 || e2;
let e4 = a <= b + 1 && b - 1 * 5 < 0;

console.log(e1, e2, e3, e4);
