Algoritmo "Juros Compostos"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Prof. Fabiano Sabha e Lucas Nadalete
// Descrição   : Cálculo de Juros composto (função)
// Autor(a)    : Clarice Corrêa Costa
// Data atual  : 31/03/2024
Var
// Seção de Declarações das variáveis 

   ValorInicial, Juros, Meses, Contador: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

//ENTRADA DOS VALORES
   escreval ("Digite apenas números reais")
   escreval ("Informe o Valor Inicial")
   Leia (ValorInicial)
   escreval ("Informe o Juros Mensal (sem símbolo de %)")
   Leia (Juros)
   escreval ("Informe o número de meses")
   leia (meses)

 //CÁLCULO DO JUROS COMPOSTOS LIMITADO AOS MESES INFORMADOS PELO USUÁRIO
 
enquanto contador < Meses faca
          contador <- contador +1
          ValorInicial <- ValorInicial*(1+(Juros/100))
          fimenquanto

escreva (ValorInicial)
Fimalgoritmo