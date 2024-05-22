// Seção de Declarações das variáveis
let numero: number;
let resultado: number;
let operacao: string;

const readlineSync = require('prompt-sync')();

// Função para ler entrada do usuário
function leia(promptText: string): string {
    let input = readlineSync(promptText);
    while (input === null || input.trim() === "") {
        input = readlineSync(promptText);
    }
    return input;
}

// Função para exibir mensagens no console
function escreval(mensagem: any): void {
    console.log(mensagem);
}

// Seção de Comandos, procedimento, funções, operadores, etc...
escreval("Informe numero");
numero = parseFloat(leia(""));

resultado = numero;

do {
    operacao = leia("Informe operação (*, /, +, -, =): ");
    
    if (operacao === "*") {
        numero = parseFloat(leia("Informe numero: "));
        resultado = resultado * numero;
    }

    if (operacao === "/") {
        numero = parseFloat(leia("Informe numero: "));
        while (numero === 0) {
            escreval("Impossível fazer divisão por 0");
            numero = parseFloat(leia("Informe numero: "));
        }
        resultado = resultado / numero;
    }

    if (operacao === "+") {
        numero = parseFloat(leia("Informe numero: "));
        resultado = resultado + numero;
    }

    if (operacao === "-") {
        numero = parseFloat(leia("Informe numero: "));
        resultado = resultado - numero;
    }
} while (operacao !== "=");

escreval(resultado);


