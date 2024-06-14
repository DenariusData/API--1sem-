import { clear } from 'console';
import * as readlineSync from 'readline-sync';

export function multiplicacao() {
    header()
    let num1: number = readlineSync.questionFloat();

    header()
    let num2: number = readlineSync.questionFloat(`${num1} x `);

    header()
    let resultado: number = num1 * num2;
    console.log(`${num1} x ${num2} = ${resultado}`);
}

function header() {
    clear();
    console.log("MULTIPLICACAO");
    console.log();
}