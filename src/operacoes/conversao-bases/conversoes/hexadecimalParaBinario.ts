import { decimalParaBinario } from './decimalParaBinario';
import { garantiaMai } from './garantiaMai';

export function hexadecimalParaBinario(hexadecimal: string): string {
    const caracteresHexadecimais = '0123456789ABCDEF';
    let decimal = 0;
    for (let i = 0; i < hexadecimal.length; i++) {
        let char = hexadecimal[i];
        char = garantiaMai(char);
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
