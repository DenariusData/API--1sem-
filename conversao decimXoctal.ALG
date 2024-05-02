Algoritmo "dectooctal"
// Algoritmo : DECIMAL PARA BINARIO
// Disciplina: [Linguagem e Lógica de programaçao]
// Função : Demonstração para o programa VisuAlg 3.03
// Autor : Claudio Morgado de Souza
// Data : 08/09/2002
// Seção de Declarações
var
oct : caracter
num,decimal : inteiro
inicio
// Seção de Comandos
escreva("Entre com um número inteiro :")
leia(num)
decimal <- num
enquanto num > 0 faca
   escolha (num mod 8)
   caso 0
      oct <-  "0" +  oct
   caso 1
      oct <-  "1" +  oct
   caso 2
      oct <-  "2" +  oct
   caso 3
      oct <-  "3" +  oct
   caso 4
      oct <-  "4" +  oct
   caso 5
      oct <-  "5" +  oct
   caso 6
      oct <-  "6" +  oct
   caso 7
      oct <-  "7" +  oct
   fimescolha
   num <- num div 8
fimenquanto
escreval("A representação binária de", decimal, " é ", oct)
fimalgoritmo