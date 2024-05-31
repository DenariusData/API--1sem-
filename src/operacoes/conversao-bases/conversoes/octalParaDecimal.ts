export function octalParaDecimal(octal: string): number {
    let decimal = 0;
    for (let i = 0; i < octal.length; i++) {
        const digito = parseInt(octal[i], 8);
        if (isNaN(digito)) {
            console.log("Numero octal invalido");
            return 404;
        }
        decimal = decimal * 8 + digito;
    }
    return decimal;
}