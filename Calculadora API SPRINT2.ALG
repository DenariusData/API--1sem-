Algoritmo "Calculadora API SPRINT2"
// Declaracao das variaveis
Var
   // Variavel para armazenar a opcao escolhida pelo usuario
   MENUopcao: caractere

// Funcao para realizar as operacoes basicas
Funcao operacoesBasicas(): real
Var
   numero, resultado: real
   operacao: caractere
Inicio
   Escreval("OPERAÇÕES BÁSICAS")
   Escreva("Informe numero: ")
   leia(numero)

   resultado <- numero

   enquanto operacao <> "=" faca
   Escreva("Informe a operação(+ | - | * | /): ")
      Leia(operacao)
      se operacao = "*" entao
         Escreva("Informe numero: ")
         Leia (numero)
         resultado <- resultado * numero
      fimse
      se operacao = "/" entao
         Escreva("Informe numero: ")
         Leia (numero)
         enquanto numero = 0 faca
            Escreval ("Impossível fazer divisão por 0")
            Leia (numero)
         fimenquanto
         resultado <- resultado / numero
      fimse
      se operacao = "+" entao
         Escreva("Informe numero: ")
         Leia (numero)
         resultado <- resultado + numero
      fimse
      se operacao = "-" entao
         Escreva("Informe numero: ")
         Leia (numero)
         resultado <- resultado - numero
      fimse
   fimenquanto
   operacao := "x"
   retorne resultado
FimFuncao

// Funcao para realizar o calculo do fatorial
Funcao fatorial(): inteiro
Var
   numero, resultado, i: inteiro
Inicio
   Escreval("FATORIAL")
   Escreva("Digite um número: ")
   Leia(numero)
   resultado <- 1
   para i := 1 ate numero faca
        resultado <- resultado * i
   fimPara
   retorne resultado
FimFuncao

// Função para calculo da raiz quadrada (auxiliar no calculo da eq. de seg grau)
Funcao raizQuadrada(numero: Real): Real
Var
   raiz, erro, anterior: Real
Inicio
   raiz <- numero / 2
   erro <- 0.1
   repita
      anterior <- raiz
      raiz <- (raiz + numero / raiz) / 2
   ate abs(raiz - anterior) < erro
   Retorne raiz
FimFuncao

Funcao eqSegundoGrau(): caracter
Var
   a, b, c: Real
   delta, x1, x2: real
   resultado: caracter

Inicio
   Escreval("EQUAÇÃO DE SEGUNDO GRAU")
   Escreva("Digite o valor de a: ")
   Leia(a)

   Escreva("Digite o valor de b: ")
   Leia(b)

   Escreva("Digite o valor de c: ")
   Leia(c)

   delta <- b * b - 4 * a * c

   Se delta < 0 Entao
      resultado <- "A equação não possui raízes reais."
   Senao
      Se delta = 0 Entao
      escreval("O delta é: " , delta)
         x1 <- (-b) / (2 * a)
         resultado <- "A equação possui uma raiz real: " + Numpcarac(x1)
      Senao
         x1 <- (-b + raizQuadrada(delta)) / (2 * a)
         x2 <- (-b - raizQuadrada(delta)) / (2 * a)
         resultado <- "O resultado do seu delta é: " + Numpcarac(delta) + ". E sua  equação possui duas raízes reais: " + Numpcarac(x1) + " e " + Numpcarac(x2)
      FimSe
   FimSe
   
   retorne resultado
FimFuncao

// Funcao para realizar a conversao de um decimal para binario
Funcao decimToBin(): caracter
Var
x: caracter
num, decimal: inteiro

Inicio
   Escreval("DECIMAL -> BINÁRIO")
   Escreva("Digite um número inteiro: ")
   leia(num)
   decimal <- num
   enquanto num > 0 faca
      se (num mod 2) = 0 entao
         x <-  "0" +  x
      senao
         x <-  "1" +  x
      fimse
      num <- num div 2
   fimenquanto
   retorne x
FimFuncao

// Funcao para realizar a conversao de um binario para decimal
Funcao binToDecim(): inteiro
Var
   binario: real
   decimal, potencia, digito, i: inteiro

Inicio
   Escreval("BINÁRIO -> DECIMAL")
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
   retorne decimal
FimFuncao

// Funcao para realizar a conversao de um binario para octal
Funcao binToOctal(): inteiro
Var
   binario, octal, resto, potencia, i, oct: inteiro

Inicio
   Escreval("BINÁRIO -> OCTAL")
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
   retorne octal
FimFuncao

// Funcao para realizar a conversao de um octal para binario
Procedimento octalToBin()
Var
   numeroOctal, indice, i, resto:inteiro
   digitosBinarios: vetor[1..30] de real
   
Inicio
   Escreval("OCTAL -> BINÁRIO")
   escreva("Digite o número octal: ")
    leia(numeroOctal)
    escreva("Rsultado: ")
    indice <- 0
    enquanto numeroOctal > 0 faca
        resto <- numeroOctal % 10
        para i de 1 ate 3 faca
            digitosBinarios[indice + i] <- resto % 2
            resto <- resto div 2
        fimpara
        indice <- indice + 3
        numeroOctal <- numeroOctal div 10
    fimenquanto

    para i de indice ate 1 passo -1 faca
        escreva(digitosBinarios[i])
    fimpara
    Escreval()
FimProcedimento

// Funcao para realizar a conversao de um binario para hexadecimal
Funcao binToHexa(): caracter
Var
   binario: inteiro
   hex: caracter
Inicio
   Escreval("BINÁRIO -> HEXADECIMAL")
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
   retorne hex
FimFuncao

// Funcao para realizar a concatenacao de duas strings
Funcao concatenacao(): caracter
Var
   string1, string2, stringConcatenada: caracter
Inicio
   Escreval("CONCATENAÇÃO DE 2 STRINGS")
   Escreva("Digite a primeira string: ")
   Leia(string1)
   Escreva("Digite a segunda string: ")
   Leia(string2)
   
   stringConcatenada <- string1 + string2
   retorne stringConcatenada
FimFuncao

// Funcao para realizar o calculo de juros simples
Funcao jurosSimples(): caracter
Var
   capital, taxa, meses, juros: real
   resultado: caracter
Inicio
   Escreval("JUROS SIMPLES")
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
   juros <- (capital * taxa * meses) / 100

   resultado <- "O montante total com juros simples é " + Numpcarac(capital+juros)
   retorne resultado
FimFuncao

// Funcao para realizar o calculo de juros compostos
Funcao jurosCompostos(): real
Var
    ValorInicial, Juros, Meses, Contador: real
Inicio
   Escreval("JUROS COMPOSTOS")
   Escreva("Informe o Valor Inicial: ")
   Leia(ValorInicial)
   Escreva("Informe o Juros Mensal (sem símbolo de %): ")
   Leia(Juros)
   Escreva("Informe o número de meses: ")
   Leia(meses)
   
   enquanto contador < Meses faca
          contador <- contador +1
          ValorInicial <- ValorInicial*(1+(Juros/100))
   fimenquanto
   
   retorne ValorInicial
FimFuncao

// Funcao para exibir menu para as conversoes
Procedimento menuConversoes()
Var
opcao: caracter

Inicio
   limpatela()
   Repita
      Escreval("Escolha uma operação:")
      Escreval("1. Decimal -> Binário")
      Escreval("2. Binário -> Decimal")
      Escreval("3. Binário -> Octal")
      Escreval("4. Octal -> Binário")
      Escreval("5. Binário -> Hexadecimal")
      Escreval("6. Hexadecimal -> Binário")
      Escreval("7. Voltar")
      Escreva("Digite o número da operação desejada: ")
      Leia(opcao)

      escolha opcao
         caso "1"
              limpatela()
              Escreva("Resultado: ", decimToBin())
              Escreval()
              Escreval()
         caso "2"
              limpatela()
              Escreva("Resultado: ", binToDecim())
              Escreval()
              Escreval()
         caso "3"
              limpatela()
              Escreva("Resultado: ", binToOctal())
              Escreval()
              Escreval()
         caso "4"
              limpatela()
              octalToBin()
              Escreval()
         caso "5"
              limpatela()
              Escreva("Resultado: ", binToHexa())
              Escreval()
              Escreval()
         caso "6"
              Escreva("Em produção")
              limpatela()
      fimEscolha
   Ate opcao = "7"
   limpatela()
FimProcedimento

// Funcao para exibir menu para os juros
Procedimento menuJuros()
Var
opcao: caracter

Inicio
   limpatela()
   Repita
      Escreval("Escolha uma operação:")
      Escreval("1. Juros simples")
      Escreval("2. Juros compostos")
      Escreval("3. Voltar")
      Escreva("Digite o número da operação desejada: ")
      Leia(opcao)

      escolha opcao
         caso "1"
              limpatela()
              Escreva(jurosSimples())
              Escreval()
              Escreval()
         caso "2"
              limpatela()
              Escreva("Resultado: ", jurosCompostos())
              Escreval()
              Escreval()
      fimEscolha
   Ate opcao = "3"
   limpatela()
FimProcedimento

// Algoritmo principal
Inicio

   limpatela()
   Repita
      Escreval("Escolha uma operação:")
      Escreval("1. Operações básicas")
      Escreval("2. Fatorial")
      Escreval("3. Equação de segundo grau")
      Escreval("4. Conversão de bases")
      Escreval("5. Concatenação de strings")
      Escreval("6. Juros")
      Escreval("7. Sair")
      Escreva("Digite o número da operação desejada: ")
      Leia(MENUopcao)

      escolha MENUopcao
         caso "1"
              limpatela()
              Escreva("Resultado: ", operacoesBasicas())
              Escreval()
              Escreval()
         caso "2"
              limpatela()
              Escreva("Resultado: ", fatorial())
              Escreval()
              Escreval()
         caso "3"
              limpatela()
              Escreva(eqSegundoGrau())
              Escreval()
              Escreval()
         caso "4"
              menuConversoes()
         caso "5"
              limpatela()
              Escreva("Resultado: ", concatenacao())
              Escreval()
              Escreval()
         caso "6"
              menuJuros()
      fimEscolha
   Ate MENUopcao = "7"
Fimalgoritmo