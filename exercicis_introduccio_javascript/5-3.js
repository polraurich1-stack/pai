let a = 5;
let b = a++;
let c = a--;
console.log(a, b, c);

a = 5;
b = ++a;
c = --a;
console.log(a, b, c);

a = 5;
let d = 25 + a++;
a = 5;
let e = 25 + ++a;
console.log(d, e);
