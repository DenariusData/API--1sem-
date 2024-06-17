import * as readlineSync from 'readline-sync';

export function fatorial() {
    console.log("FATORIAL");
    console.log();

    let n: number = readlineSync.questionInt('Digite um numero nao-negativo: ');

    if (n < 0 || n > 600) {
        console.log('Número inválido. O fatorial é definido apenas para números não-negativos até 600.');
        return;
    }

    function calcularFatorial(num: number): string | null {
        if (num < 0 || num > 600) {
            return 'Número inválido. O fatorial é definido apenas para números não-negativos até 600.';
        }

        try {
            let resultado = BigInt(1);

            for (let i = 2; i <= num; i++) {
                resultado *= BigInt(i);
            }

            return resultado.toString();
        } catch (error) {
            console.error('Ocorreu um erro ao calcular o fatorial:', error);
            return null;
        }
    }

    const resultado = calcularFatorial(n);
    if (resultado !== null) {
        console.log(`O fatorial de ${n} é: ${resultado}`);
    } else {
        console.log('Ocorreu um erro ao calcular o fatorial.');
    }
}
