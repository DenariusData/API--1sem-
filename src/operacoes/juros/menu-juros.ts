import * as readlineSync from 'readline-sync';
import { clear } from 'console';
import { keypress } from '../../utils/keypress';
import { jurosSimples } from './juros-simples';
import { jurosCompostos } from './juros-compostos';

function exibirMenu(): number {
    clear();
    console.log("Escolha uma opcao: ");
    console.log("1. Juros simples");
    console.log("2. Juros compostos");
    console.log("3. Voltar");

    return readlineSync.questionInt("Digite a opcao desejada: ");
}

function executarOperacao(opcao: number): void {
    switch (opcao) {
        case 1:
            jurosSimples()
            keypress();
            break;
        case 2:
            jurosCompostos();
            keypress();
            break;
        default:
            console.log("Opcao inválida. Tente novamente.");
            break;
    }
}

export function menuJuros() {
    let escolhaMenu: number;

    do {
        clear();
        escolhaMenu = exibirMenu();

        if (escolhaMenu === 3) {
            console.log("Voltando...");
            return;
        }

        if (escolhaMenu < 1 || escolhaMenu > 3) {
            console.log("Opcao inválida. Tente novamente.");
            continue;
        }

        clear();
        executarOperacao(escolhaMenu);

    } while (escolhaMenu !== 3);
}