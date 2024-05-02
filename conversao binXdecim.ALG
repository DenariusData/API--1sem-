Algoritmo "Conversão de Binário para Decimal"
Var
   binario: real
   decimal, potencia, digito, i: inteiro

Inicio
   Escreva("Digite o número binário: ")
   Leia(binario)

   decimal <- 0
   potencia <- 1
   i <- 1

   Enquanto binario > 0 Faça
      digito <- binario mod 10
      decimal <- decimal + (digito * potencia)
      potencia <- potencia * 2
      binario <- binario / 10
      i <- i + 1
   FimEnquanto

   Escreva("O número decimal é: ", decimal)
FimAlgoritmo