Algoritmo "Bhaskhara"
// Disciplina   : API função de 2 grau
Var
// Seção de Declarações das variáveis
a, b, c, delta : real
xl1, xl2, raiz : real
Inicio
escreval("Valor de a")
leia (a)
escreval ("Valor de b")
leia(b)
escreval("valor de c")
leia (c)
delta<- (b^2-4*a*c)
escreval("O valor do delta é", delta)
se delta <0 entao
escreval("Não existem raízes reais para essa função quadrática!")
senao
xl1<- -b +  / (2*a)  //falta arrumar
xl2 <- -b -  / (2*a) //falta arrumar
escreval("X linha 1 = ", xl1, " e ", "X linha 2 = ", xl2)
//descobrir como calculo a raiz de delta sem usar alguma função já pronta
fimse
Fimalgoritmo