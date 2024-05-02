Algoritmo "Juros_Simples"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
Var
   capital, taxa, meses, jurosSimples: real
Inicio
   // Solicita ao usuário que insira o capital inicial
   Escreva("Digite o valor do capital inicial: ")
   Leia(capital)

   // Solicita ao usuário que insira a taxa de juros
   Escreva("Digite a taxa de juros (em porcentagem): ")
   Leia(taxa)

   // Solicita ao usuário que insira o tempo em meses
   Escreva("Digite o tempo de aplicação (em meses): ")
   Leia(meses)

   // Calcula os juros simples
   jurosSimples <- (capital * taxa * meses) / 100

   // Exibe o resultado
   Escreva("O montante total com juros simples é: ", capital + jurosSimples)
FimAlgoritmo
