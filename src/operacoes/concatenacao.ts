import * as readlineSync from 'readline-sync';

let string1: string;
let string2: string;

export function concatenacao(){
  string1 = readlineSync.question("Digite a primeira string: ");
  string2 = readlineSync.question("Digite a segunda string: ");

  return string1 + string2;
}