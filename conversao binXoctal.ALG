Algoritmo "Conversão de Binário para Octal"
Var
   binario, octal, resto, potencia, i, oct: inteiro

Inicio
   Escreva("Digite o número binário: ")
   Leia(binario)

   octal <- 0
   potencia <- 1

   Enquanto binario > 0 Faça
      escolha binario mod 1000
              caso 000
                   oct <- 0
              caso 001
                   oct <- 1
              caso 010
                   oct <- 2
              caso 011
                   oct <- 3
              caso 100
                   oct <- 4
              caso 101
                   oct <- 5
              caso 110
                   oct <- 6
              caso 111
                   oct <- 7
      fimescolha
      octal <- octal + oct * potencia
      potencia <- potencia * 10
      binario <- binario div 1000
   FimEnquanto

   Escreva("O número octal é: ", octal)
FimAlgoritmo