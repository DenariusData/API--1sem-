Algoritmo "Concatenação de strings"
// Declaração das variáveis
Var
   // Variável para armazenar a opção escolhida pelo usuário
   opcao: caractere
   // Variável para armazenar as strings a serem concatenadas
   string1, string2: caractere
   // Variável para armazenar a string concatenada
   stringConcatenada: caractere
   
// Função para realizar a concatenação das strings
Funcao concatenacao(a, b: caractere): caractere
Inicio
   stringConcatenada <- a + b
   retorne stringConcatenada
FimFuncao

// Algoritmo principal
Inicio
   // Repetir o menu até que o usuário escolha sair
   Repita
      Escreval("Escolha uma operação:")
      Escreval("1. Concatenação")
      Escreval("2. Sair")
      Escreva("Digite o número da operação desejada: ")
      Leia(opcao)

      // Verificar se o usuário escolheu uma operação válida
      Se opcao = "1" Entao
         Escreva("Digite a primeira string: ")
         Leia(string1)
         Escreva("Digite a segunda string: ")
         Leia(string2)
         Escreval("Resultado: ", concatenacao(string1, string2))
      Senao
           Se opcao <> "2" Entao
              Escreval("Opção inválida. Tente novamente.")
           FimSe
      FimSe
   Ate opcao = "2" // Continuar até que o usuário escolha sair
Fimalgoritmo