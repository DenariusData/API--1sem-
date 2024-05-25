import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a primeira string: ", (string1) => {
  rl.question("Digite a segunda string: ", (string2) => {
    const resultado = string1 + string2;
    console.log("O resultado da concatenação é: ", resultado);
    rl.close();
  });
});
