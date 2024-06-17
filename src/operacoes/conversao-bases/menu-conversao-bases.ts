import * as readlineSync from 'readline-sync';
import { clear } from 'console';
import { keypress } from '../../utils/keypress';
import { decimalParaBinario } from './conversoes/decimalParaBinario';
import { binarioParaDecimal } from './conversoes/binarioParaDecimal';
import { octalParaBinario } from './conversoes/octalParaBinario';
import { binarioParaOctal } from './conversoes/binarioParaOctal';
import { hexadecimalParaBinario } from './conversoes/hexadecimalParaBinario';
import { binarioParaHexadecimal } from './conversoes/binarioParaHexadecimal';

function exibirMenu(): number {
    clear();
    console.log("Escolha a operacao desejada:");
    console.log("1. Decimal para Binario");
    console.log("2. Binario para Decimal");
    console.log("3. Octal para Binario");
    console.log("4. Binario para Octal");
    console.log("5. Hexadecimal para Binario");
    console.log("6. Binario para Hexadecimal");
    console.log("7. Voltar ao menu principal");

    return readlineSync.questionInt("Digite a opcao desejada: ");
}

function executarOperacao(opcao: number): void {
    switch (opcao) {
        case 1:
            const numeroDecimal = readlineSync.questionInt("Digite o numero decimal: ");
            const numeroBinario1 = decimalParaBinario(numeroDecimal);
            console.log("Numero binario: " + numeroBinario1);
            keypress();
            break;
        case 2:
            const numeroBinario2 = readlineSync.question("Digite o numero binario: ");
            const numeroDecimal2 = binarioParaDecimal(numeroBinario2);
            console.log("Numero decimal: " + numeroDecimal2);
            keypress();
            break;
        case 3:
            const numeroOctal = readlineSync.question("Digite o numero octal: ");
            const numeroBinario3 = octalParaBinario(numeroOctal);
            console.log("Numero binario: " + numeroBinario3);
            keypress();
            break;
        case 4:
            const numeroBinario4 = readlineSync.question("Digite o numero binario: ");
            const numeroOctal4 = binarioParaOctal(numeroBinario4);
            console.log("Numero octal: " + numeroOctal4);
            keypress();
            break;
        case 5:
            const numeroHexadecimal5 = readlineSync.question("Digite o numero hexadecimal: ");
            const numeroBinario5 = hexadecimalParaBinario(numeroHexadecimal5);
            console.log("Numero binário: " + numeroBinario5);
            keypress();
            break;
        case 6:
            const numeroBinario6 = readlineSync.question("Digite o numero binario: ");
            const numeroHexadecimal6 = binarioParaHexadecimal(numeroBinario6);
            console.log("Numero hexadecimal: " + numeroHexadecimal6);
            keypress();
            break;
        default:
            console.log("Opcao invalida. Tente novamente.");
            break;
    }
}

export function menuConversoes() {
    let escolhaMenu: number;

    do {
        clear();
        escolhaMenu = exibirMenu();

        if (escolhaMenu === 7) {
            console.log("Voltando...");
            return;
        }

        if (escolhaMenu < 1 || escolhaMenu > 7) {
            console.log("Opcao invalida. Tente novamente.");
            continue;
        }

        clear();
        executarOperacao(escolhaMenu);

    } while (escolhaMenu !== 7);
}

