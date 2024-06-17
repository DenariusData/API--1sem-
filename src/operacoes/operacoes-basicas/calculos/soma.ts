import { clear } from 'console';
import * as readlineSync from 'readline-sync';

export function soma() {
    header()
    let num1: number = readlineSync.questionFloat();

    header()
    let num2: number = readlineSync.questionFloat(`${num1} + `);

    header()
    let resultado: number = num1 + num2;
    console.log(`${num1} + ${num2} = ${resultado}`);
}

function header() {
    clear();
    console.log("SOMA");
    console.log();
}