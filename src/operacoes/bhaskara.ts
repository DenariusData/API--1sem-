import * as readlineSync from 'readline-sync';

function eq2grau(a: number, b: number, c: number): { x1: number, x2: number, delta: number } | string {
    const delta: number = b * b - 4 * a * c;
    if (delta < 0) 
        {
            console.log("O valor de delta é: " + delta);
            return "Não existem raízes reais.";
        }

    let sqrtDelta: number = delta;
    let previous: number;

    do {
        previous = sqrtDelta;
        sqrtDelta = (previous + delta / previous) / 2;
    } while (sqrtDelta !== previous);

    const x1: number = (-b + sqrtDelta) / (2 * a);
    const x2: number = (-b - sqrtDelta) / (2 * a);

    return { x1, x2, delta };
}

export function bhaskara() {
    console.log("EQUACAO DE SEGUNDO GRAU");
    console.log();

    const a: number = +readlineSync.question('Digite o valor de a: ');
    const b: number = +readlineSync.question('Digite o valor de b: ');
    const c: number = +readlineSync.question('Digite o valor de c: ');

    const resultado = eq2grau(a, b, c);
    if (typeof resultado === 'string') {
        console.log(resultado);
    } else {
        console.log("As raízes são: x1 = " + resultado.x1.toFixed(2) + ", x2 = " + resultado.x2.toFixed(2));
        console.log("O valor de delta é: " + resultado.delta);
    }
}
