Algoritmo "dectobin"
// Algoritmo : DECIMAL PARA BINARIO
// Disciplina: [Linguagem e Lógica de programaçao]
// Função : Demonstração para o programa VisuAlg 3.03
// Autor : Claudio Morgado de Souza
// Data : 08/09/2002
// Seção de Declarações
var
x : caracter
num,decimal : inteiro
inicio
// Seção de Comandos
escreva("Entre com um número inteiro :")
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
escreval("A representação binária de", decimal, " é ", x)
fimalgoritmo