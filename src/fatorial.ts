const readlineSync = require('readline-sync');

let n = readlineSync.question('Digite um número: ');
let f = 1;

for (let i = n; i > 1; i--) {
    f *= i;
}

console.log(`${n}! = ${f}`);
