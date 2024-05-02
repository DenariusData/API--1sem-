Algoritmo "Conversão de Binário para Decimal"
Var

   octal: real
   decimal, potencia, digito, i: inteiro

Inicio
   Escreva("Digite o número binário: ")
   Leia(octal)

   decimal <- 0
   potencia <- 1


   Enquanto octal > 0 Faça
      digito <- octal mod 10
      decimal <- decimal + (digito * potencia)
      potencia <- potencia * 8
      octal <- octal / 10

   FimEnquanto

   Escreva("O número decimal é: ", decimal)
FimAlgoritmo