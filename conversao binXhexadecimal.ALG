Algoritmo "Conversão de Binário para hexadecimal"
Var
   binario: inteiro
   hex: caracter

Inicio
   Escreva("Digite o número binário: ")
   Leia(binario)
   Enquanto binario > 0 Faça
      escolha binario mod 10000
              caso 0000
                   hex <- "0" + hex
              caso 0001
                   hex <- "1" + hex
              caso 0010
                   hex <- "2" + hex
              caso 0011
                   hex <- "3" + hex
              caso 0100
                   hex <- "4" + hex
              caso 0101
                   hex <- "5" + hex
              caso 0110
                   hex <- "6" + hex
              caso 0111
                   hex <- "7" + hex
              caso 1000
                   hex <- "8" + hex
              caso 1001
                   hex <- "9" + hex
              caso 1010
                   hex <- "A" + hex
              caso 1011
                   hex <- "B" + hex
              caso 1100
                   hex <- "C" + hex
              caso 1101
                   hex <- "D" + hex
              caso 1110
                   hex <- "E" + hex
              caso 1111
                   hex <- "F" + hex
      fimescolha
      binario <- binario div 10000
   FimEnquanto

   Escreva("O número hexadecimal é: ", hex)
FimAlgoritmo