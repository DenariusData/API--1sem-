export function binarioParaDecimal(binario: string): number {
    let decimal = 0;
    for (let i = 0; i < binario.length; i++) {
        decimal = decimal * 2 + (binario[i] === '1' ? 1 : 0);
    }
    return decimal;
}
