import promptSync from 'prompt-sync';
import * as readlineSync from 'readline-sync';

const prompt = promptSync();

function bhaskara(a: number, b: number, c: number): { x1: number, x2: number, delta: number } | string {
    const delta = b * b - 4 * a * c;
    console.log("O valor de delta é: " + delta);
    if (delta < 0) return "Não existem raízes reais.";

    let sqrtDelta = delta;
    let previous;

    do {
        previous = sqrtDelta;
        sqrtDelta = (previous + delta / previous) / 2;
    } while (sqrtDelta !== previous);

    const x1 = (-b + sqrtDelta) / (2 * a);
    const x2 = (-b - sqrtDelta) / (2 * a);

    return { x1, x2, delta };
}

const a = +readlineSync.question('Digite o valor de a: ');
const b = +readlineSync.question('Digite o valor de b: ');
const c = +readlineSync.question('Digite o valor de c: ');

const resultado = bhaskara(a, b, c);
if (typeof resultado === 'string') {
    console.log(resultado);
} else {
    console.log("As raízes são: x1 = " + resultado.x1.toFixed(2) + ", x2 = " + resultado.x2.toFixed(2));
    console.log("O valor de delta é: " + resultado.delta);
}
