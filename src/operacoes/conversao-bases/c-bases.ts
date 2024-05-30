import promptSync from 'prompt-sync';

function main() {
    const prompt = promptSync({ sigint: true });

    console.log("Escolha a operação desejada:");
    console.log("1 - Decimal para Binário");
    console.log("2 - Binário para Decimal");
    console.log("3 - Octal para Binário");
    console.log("4 - Binário para Octal");
    console.log("5 - Hexadecimal para Binário");
    console.log("6 - Binário para Hexadecimal");
    const opcao = prompt("Opção: ");

    switch (opcao) {
        case "1":
            const numeroDecimal = parseInt(prompt("Digite o número decimal: "), 10);
            const numeroBinario1 = decimalParaBinario(numeroDecimal);
            console.log("Número binário: " + numeroBinario1);
            break;
        case "2":
            const numeroBinario2 = prompt("Digite o número binário: ");
            const numeroDecimal2 = binarioParaDecimal(numeroBinario2);
            console.log("Número decimal: " + numeroDecimal2);
            break;
        case "3":
            const numeroOctal = prompt("Digite o número octal: ");
            const numeroBinario3 = octalParaBinario(numeroOctal);
            console.log("Número binário: " + numeroBinario3);
            break;
        case "4":
            const numeroBinario4 = prompt("Digite o número binário: ");
            const numeroOctal4 = binarioParaOctal(numeroBinario4);
            console.log("Número octal: " + numeroOctal4);
            break;
        case "5":
            const numeroHexadecimal5 = prompt("Digite o número hexadecimal: ");
            const numeroBinario5 = hexadecimalParaBinario(numeroHexadecimal5);
            console.log("Número binário: " + numeroBinario5);
            break;
        case "6":
            const numeroBinario6 = prompt("Digite o número binário: ");
            const numeroHexadecimal6 = binarioParaHexadecimal(numeroBinario6);
            console.log("Número hexadecimal: " + numeroHexadecimal6);
            break;
        default:
            console.log("Opção inválida.");
    }
}

function decimalParaBinario(decimal: number): string {
    let binario = '';
    if (decimal === 0) {
        return '0';
    }
    while (decimal > 0) {
        const resto = decimal % 2;
        binario = resto + binario;
        decimal = (decimal - resto) / 2;
    }
    return binario;
}

function binarioParaDecimal(binario: string): number {
    let decimal = 0;
    for (let i = 0; i < binario.length; i++) {
        decimal = decimal * 2 + (binario[i] === '1' ? 1 : 0);
    }
    return decimal;
}

function octalParaDecimal(octal: string): number {
    let decimal = 0;
    for (let i = 0; i < octal.length; i++) {
        const digito = parseInt(octal[i], 8);
        if (isNaN(digito)) {
            throw new Error("Número octal inválido");
        }
        decimal = decimal * 8 + digito;
    }
    return decimal;
}

function octalParaBinario(octal: string): string {
    const decimal = octalParaDecimal(octal);
    return decimalParaBinario(decimal);
}

function binarioParaOctal(binario: string): string {
    const decimal = binarioParaDecimal(binario);
    let octal = '';
    if (decimal === 0) {
        return '0';
    }
    let temp = decimal;
    while (temp > 0) {
        const resto = temp % 8;
        octal = resto + octal;
        temp = (temp - resto) / 8;
    }
    return octal;
}

function binarioParaHexadecimal(binario: string): string {
    const decimal = binarioParaDecimal(binario);
    let hexadecimal = '';
    const caracteresHexadecimais = '0123456789ABCDEF';
    if (decimal === 0) {
        return '0';
    }
    let temp = decimal;
    while (temp > 0) {
        const resto = temp % 16;
        hexadecimal = caracteresHexadecimais[resto] + hexadecimal;
        temp = (temp - resto) / 16;
    }
    return hexadecimal;
}

function Garantiamai(char: string): string {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < minusculas.length; i++) {
        if (char === minusculas[i]) {
            return maiusculas[i];
        }
    }
    return char;
}

function hexadecimalParaBinario(hexadecimal: string): string {
    const caracteresHexadecimais = '0123456789ABCDEF';
    let decimal = 0;
    for (let i = 0; i < hexadecimal.length; i++) {
        let char = hexadecimal[i];
        char = Garantiamai(char);
        let valor = 0;
        for (let j = 0; j < caracteresHexadecimais.length; j++) {
            if (caracteresHexadecimais[j] === char) {
                valor = j;
                break;
            }
        }
        decimal = decimal * 16 + valor;
    }
    return decimalParaBinario(decimal);
}

main();