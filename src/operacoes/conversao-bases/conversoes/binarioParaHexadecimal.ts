import { binarioParaDecimal } from './binarioParaDecimal';

export function binarioParaHexadecimal(binario: string): string {
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
