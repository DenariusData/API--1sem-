import { decimalParaBinario } from './decimalParaBinario';
import { octalParaDecimal} from './octalParaDecimal'

export function octalParaBinario(octal: string): string {
    const decimal = octalParaDecimal(octal);
    return decimalParaBinario(decimal);
}
