import { clear } from 'console';
import * as readlineSync from 'readline-sync';

export function divisao() {
    header()
    let num1: number = readlineSync.questionFloat();
    let num2: number = inputNum2(num1);

    header()

    let resultado: number = num1 / num2;
    console.log(`${num1} / ${num2} = ${resultado}`);
}

function header() {
    clear();
    console.log("DIVISAO");
    console.log();
}

function inputNum2(num1: number){
    header()
    let num2: number = readlineSync.questionFloat(`${num1} / `);
    if (num2 == 0){
        console.log("Impossivel dividir por 0.");
        num2 = inputNum2(num1)
    }
    return num2;
}