Algoritmo "dectohex"
// Disciplina: [Linguagem e Lógica de programaçao] 
// Função : Demonstração para o programa VisuAlg 3.03
// Autor : Claudio Morgado de Souza
// Data : 08/09/2002
// Função : Demonstração para o programa VisuAlg, usando a estrutura
//          escolha...caso...fimescolha
// Autor : Claudio Morgado de Souza
// Data : 13/04/2003
// Seção de Declarações
var
   h : caracter
   num,decimal : inteiro
inicio
// Seção de Comandos
escreval("Programa de Conversão Decimal para Hexadecimal")
escreva("Entre com um número inteiro:")
leia(num)
decimal <- num
se num < 0 entao
   num <- 65536 + num
fimse
enquanto num > 0 faca
   escolha num mod 16
   caso 0
      h <-  "0" +  h
   caso 1
      h <-  "1" +  h
   caso 2
      h <-  "2" +  h
   caso 3
      h <-  "3" +  h
   caso 4
      h <-  "4" +  h
   caso 5
      h <-  "5" +  h
   caso 6
      h <-  "6" +  h
   caso 7
      h <-  "7" +  h
   caso 8
      h <-  "8" +  h
   caso 9
      h <-  "9" +  h
   caso 10
      h <-  "A" +  h
   caso 11
      h <-  "B" +  h
   caso 12
      h <-  "C" +  h
   caso 13
      h <-  "D" +  h
   caso 14
      h <-  "E" +  h
   caso 15
      h <-  "F" +  h
   fimescolha
   num <- num div 16
fimenquanto
escreval( "A representação hexadecimal de", decimal, " é ", h)
fimalgoritmo

