export function garantiaMai(char: string): string {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < minusculas.length; i++) {
        if (char === minusculas[i]) {
            return maiusculas[i];
        }
    }
    return char;
}
