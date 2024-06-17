import { binarioParaDecimal } from './binarioParaDecimal';

export function binarioParaOctal(binario: string): string {
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
