import * as readlineSync from 'readline-sync';

export function jurosSimples() {
    console.log("JUROS SIMPLES");
    console.log();

    let capital: number = readlineSync.questionFloat("Digite o capital inicial: ");
    let taxa: number = readlineSync.questionFloat("Digite a taxa de juros (em decimal, por exemplo: 0.05 para 5%): ");
    let tempo: number = readlineSync.questionFloat("Digite o tempo em meses: ");

    let juros: number = capital * taxa * tempo;
    let montante: number = capital + juros;

    console.log("Juros: " + juros);
    console.log("Montante: " + montante);
}
