"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var capitalInput = readlineSync.question("Digite o capital inicial: ");
var taxaInput = readlineSync.question("Digite a taxa de juros (em decimal, por exemplo, 0.05 para 5%): ");
var tempoInput = readlineSync.question("Digite o tempo (em meses ou anos, conforme sua conveniência): ");
var capital = Number(capitalInput);
var taxa = Number(taxaInput);
var tempo = Number(tempoInput);
if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
    console.error("Entrada inválida. Todos os valores devem ser números.");
}
else {
    var juros = capital * taxa * tempo;
    console.log("Juros Simples: ".concat(juros));
}
