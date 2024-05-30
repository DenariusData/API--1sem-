import { clear } from 'console';
import * as readlineSync from 'readline-sync';
import { operacoesBasicas } from './operacoes/operacoes-basicas';
import { fatorial } from './operacoes/fatorial';
import { bhaskara } from './operacoes/bhaskara';
import { menuConversoes } from './operacoes/conversao-bases/menu-conversao-bases';
import { concatenacao } from './operacoes/concatenacao';
import { menuJuros } from './operacoes/juros/menu-juros';
import { keypress } from './keypress';
import { exit } from 'process';

function exibirMenu(): number {
    clear();
    console.log("Escolha uma opcao: ");
    console.log("1. Operacoes básicas");
    console.log("2. Fatorial");
    console.log("3. Equacao de segundo grau");
    console.log("4. Conversao de bases");
    console.log("5. Concatenacao de strings");
    console.log("6. Juros");
    console.log("7. Sair");

    return readlineSync.questionInt("Digite a opcao desejada: ");
}

function executarOperacao(opcao: number): void {
    switch (opcao) {
        case 1:
            console.log(`Resultado: ${operacoesBasicas()}`);
            break;
        case 2:
            console.log(`Resultado: ${fatorial()}`);
            break;
        case 3:
            bhaskara();
            break;
        case 4:
            menuConversoes();
            break;
        case 5:
            console.log(`Resultado: ${concatenacao()}`);
            break;
        case 6:
            menuJuros();
            break;
        default:
            console.log("Opcao inválida. Tente novamente.");
            break;
    }
}

function menuGeral() {
    let escolhaMenu: number;

    do {
        clear();
        escolhaMenu = exibirMenu();

        if (escolhaMenu === 7) {
            console.log("Saindo do programa...");
            exit();
        }

        if (escolhaMenu < 1 || escolhaMenu > 7) {
            console.log("Opcao inválida. Tente novamente.");
            continue;
        }

        clear();
        executarOperacao(escolhaMenu);
        keypress();

    } while (escolhaMenu !== 7);
}

menuGeral();
