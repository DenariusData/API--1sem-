import * as readlineSync from 'readline-sync';

function getNumber(prompt: string): number {
    return readlineSync.questionFloat(prompt);
}

function aplicarOperacao(resultado: number, operacao: string, numero: number): number {
    switch (operacao) {
        case '*':
            return resultado * numero;
        case '/':
            while (numero === 0) {
                console.log("Impossível fazer divisao por 0");
                numero = getNumber("Informe um número diferente de 0: ");
            }
            return resultado / numero;
        case '+':
            return resultado + numero;
        case '-':
            return resultado - numero;
        default:
            console.log("Operacao inválida");
            return resultado;
    }
}

export function operacoesBasicas(): number {
    console.log("OPERACOES BASICAS");
    console.log();
    
    let resultado: number = getNumber("Informe numero: ");
    let operacao: string;

    do {
        operacao = readlineSync.question("Informe operacao (*, /, +, -, =): ");

        if (operacao === '=') break;

        if (!['*', '/', '+', '-'].includes(operacao)) {
            console.log("Operacao inválida. Tente novamente.");
            continue;
        }

        const numero = getNumber("Informe numero: ");
        resultado = aplicarOperacao(resultado, operacao, numero);

    } while (operacao !== '=');

    return resultado;
}
