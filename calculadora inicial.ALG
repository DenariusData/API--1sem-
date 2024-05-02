Algoritmo "Calculadora Básica"
// Declaração das variáveis
Var
   // Variável para armazenar a operação escolhida pelo usuário
   opcao: caractere
   // Variáveis para armazenar os números e o resultado
   num1, num2, resultado: real
   // Variáveis para armazenar o contador e o resultado da função fatorial
   contadorFatorial, resultadoFatorial: inteiro

// Função para realizar a soma
Funcao soma(a, b: real): real
Inicio
   resultado <- a + b
   retorne resultado
FimFuncao

// Função para realizar a subtração
Funcao subtracao(a, b: real): real
Inicio
   resultado <- a - b
   retorne resultado
FimFuncao

// Função para realizar a multiplicação
Funcao multiplicacao(a, b: real): real
Inicio
   resultado <- a * b
   retorne resultado
FimFuncao

// Função para realizar a divisão
Funcao divisao(a, b: real): real
Inicio
   Se b = 0 Entao
      Escreval("Erro: Não é possível dividir por zero.")
      retorne 0
   Senao
      resultado <- a / b
      retorne resultado
   FimSe
FimFuncao

// Função para calcular o fatorial
Funcao fatorial(a: inteiro): inteiro
Inicio
  resultadoFatorial <- 1
  Para contadorFatorial <- 1 ate a Faca
   resultadoFatorial <- resultadoFatorial * contadorFatorial
  FimPara
  retorne resultadoFatorial
FimFuncao


// Algoritmo principal
Inicio
   // Repete o menu até que o usuário selecione a opção 6
   Repita
      Escreval("Escolha uma operação:")
      Escreval("1. Soma")
      Escreval("2. Subtração")
      Escreval("3. Multiplicação")
      Escreval("4. Divisão")
      Escreval("5. Fatorial")
      Escreval("6. Sair")
      Escreva("Digite o número da operação desejada: ")
      Leia(opcao)

      // Verifica se o usuário escolheu uma operação válida
      Se opcao = "1" Entao
         Escreva("Digite o primeiro número: ")
         Leia(num1)
         Escreva("Digite o segundo número: ")
         Leia(num2)
         Escreval("Resultado: ", soma(num1, num2))
      Senao
         Se opcao = "2" Entao
            Escreva("Digite o primeiro número: ")
            Leia(num1)
            Escreva("Digite o segundo número: ")
            Leia(num2)
            Escreval("Resultado: ", subtracao(num1, num2))
         Senao
            Se opcao = "3" Entao
               Escreva("Digite o primeiro número: ")
               Leia(num1)
               Escreva("Digite o segundo número: ")
               Leia(num2)
               Escreval("Resultado: ", multiplicacao(num1, num2))
            Senao
               Se opcao = "4" Entao
                  Escreva("Digite o primeiro número: ")
                  Leia(num1)
                  Escreva("Digite o segundo número: ")
                  Leia(num2)
                  Escreval("Resultado: ", divisao(num1, num2))
               Senao
                  Se opcao = "5" Entao
                     Escreva("Digite um número para calcular o fatorial: ")
                     Leia(num1)
                     Escreval("Resultado: ", fatorial(num1))
                  Senao
                     Se opcao <> "6" Entao
                        Escreval("Opção inválida. Tente novamente.")
                     FimSe
                  FimSe
               FimSe
            FimSe
         FimSe
      FimSe
   Ate opcao = "6" // Continua até que o usuário escolha sair
Fimalgoritmo

