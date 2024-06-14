import * as readlineSync from 'readline-sync';
import { fatorial } from './operacoes/fatorial';
import { bhaskara } from './operacoes/bhaskara';
import { menuOperacoesGerais } from "./operacoes/operacoes-basicas/menu-operacoes-basicas"
import { menuConversoes } from './operacoes/conversao-bases/menu-conversao-bases';
import { concatenacao } from './operacoes/concatenacao';
import { menuJuros } from './operacoes/juros/menu-juros';
import { keypress } from './utils/keypress';
import { clear } from 'console';
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
            menuOperacoesGerais();
            break;
        case 2:
            fatorial()
            keypress()
            break;
        case 3:
            bhaskara();
            keypress();
            break;
        case 4:
            menuConversoes();
            break;
        case 5:
            console.log(`Resultado: ${concatenacao()}`);
            keypress();
            break;
        case 6:
            menuJuros();
            break;
        default:
            console.log("Opcao invalida. Tente novamente.");
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
            console.log("Opcao invalida. Tente novamente.");
            continue;
        }

        clear();
        executarOperacao(escolhaMenu);

    } while (escolhaMenu !== 7);
}

menuGeral();
