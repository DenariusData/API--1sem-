import * as readlineSync from 'readline-sync';

export function jurosCompostos() {
    console.log("JUROS COMPOSTOS");
    console.log();
    
    var capital: number = readlineSync.questionFloat("Digite o capital inicial: ");
    var taxa: number = readlineSync.questionFloat("Digite a taxa de juros (em decimal, por exemplo: 0.05 para 5%): ");
    var tempo: number = readlineSync.questionFloat("Digite o tempo em meses: ");

    var montante = capital;
    for (var i = 0; i < tempo; i++) {
        montante += montante * taxa;
    }
    var juros = montante - capital;
    console.log("Juros Compostos: " + juros);
    console.log("Montante: " + montante);
}