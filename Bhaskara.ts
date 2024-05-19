//ts-node bhaskara.ts para leitura no terminal
function bhaskara(a: number, b: number, c: number): { x1: number, x2: number } | string {
    const delta = b * b - 4 * a * c;
    if (delta < 0) return "Não existem raízes reais.";

    const sqrtDelta = Math.sqrt(delta);//parte rafael

    return {
        x1: (-b + sqrtDelta) / (2 * a),
        x2: (-b - sqrtDelta) / (2 * a)
    };
}
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';

console.log('Digite o valor de a:');
console.log('Digite o valor de b:');
console.log('Digite o valor de c:');

process.stdin.on('data', (data) => {
    input += data;
    const [a, b, c] = input.trim().split(' ').map(Number);
    const resultado = bhaskara(a, b, c);
    if (typeof resultado === 'string') {
        console.log(resultado);
    } else {
        console.log(`As raízes são: x1 = ${resultado.x1}, x2 = ${resultado.x2}`);
    }
    process.exit();
});
