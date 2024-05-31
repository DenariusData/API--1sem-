export function decimalParaBinario(decimal: number): string {
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
