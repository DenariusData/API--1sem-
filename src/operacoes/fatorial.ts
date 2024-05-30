import * as readlineSync from 'readline-sync';

export function fatorial() {
    console.log("FATORIAL");
    console.log();

    let n: number = readlineSync.questionInt('Digite um numero nao-negativo: ');

    if (n < 0) {
        console.log('Número inválido. O fatorial é definido apenas para números não-negativos.');
        return null;
    }

    function calcularFatorial(num: number): number {
        if (num <= 1) {
            return 1;
        }
        return num * calcularFatorial(num - 1);
    }
    return calcularFatorial(n);
}