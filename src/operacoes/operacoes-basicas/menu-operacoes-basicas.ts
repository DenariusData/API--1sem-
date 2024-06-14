import * as readlineSync from 'readline-sync';
import { soma } from "./calculos/soma";
import { subtracao } from "./calculos/subtracao";
import { multiplicacao } from "./calculos/multiplicacao";
import { divisao } from "./calculos/divisao";
import { keypress } from '../../utils/keypress';
import { clear } from 'console';
import { exit } from 'process';

function exibirMenu(): number {
    clear();
    console.log("Escolha uma opcao: ");
    console.log("1. Soma");
    console.log("2. Subtracao");
    console.log("3. Multiplicacao");
    console.log("4. Divisao");
    console.log("5. Sair");

    return readlineSync.questionInt("Digite a opcao desejada: ");
}

function executarOperacao(opcao: number): void {
    switch (opcao) {
        case 1:
            soma();
            keypress();
            break;
        case 2:
            subtracao();
            keypress();
            break;
        case 3:
            multiplicacao();
            keypress();
            break;
        case 4:
            divisao();
            keypress();
            break;
        default:
            console.log("Opcao invalida. Tente novamente.");
            break;
    }
}

export function menuOperacoesBasicas() {
    let escolhaMenu: number;

    do {
        clear();
        escolhaMenu = exibirMenu();

        if (escolhaMenu === 5) {
            console.log("Voltando...");
            return;
        }

        if (escolhaMenu < 1 || escolhaMenu > 5) {
            console.log("Opcao invalida. Tente novamente.");
            continue;
        }

        clear();
        executarOperacao(escolhaMenu);

    } while (escolhaMenu !== 5);
}

