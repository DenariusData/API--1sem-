Algoritmo "Equação de segundo grau sem raizq"

Funcao RaizQuadrada(numero: Real): Real
Var
   raiz, erro, anterior: Real
Inicio
   raiz <- numero / 2
   erro <- 0.0001
   repita
      anterior <- raiz
      raiz <- (raiz + numero / raiz) / 2
   ate abs(raiz - anterior) < erro
   Retorne raiz
FimFuncao

Procedimento CalcularRaizes(a, b, c: Real)
Var
   delta, x1, x2: Real

Inicio
   delta <- b * b - 4 * a * c

   Se delta < 0 Entao
      Escreva("A equação não possui raízes reais.")
   Senao
      Se delta = 0 Entao
         x1 <- (-b) / (2 * a)
         Escreva("A equação possui uma raiz real: ", x1)
      Senao
         x1 <- (-b + RaizQuadrada(delta)) / (2 * a)
         x2 <- (-b - RaizQuadrada(delta)) / (2 * a)
         Escreva("A equação possui duas raízes reais: ", x1, " e ", x2)
      FimSe
   FimSe
FimProcedimento

Var
   coef_a, coef_b, coef_c: Real

Inicio
   Escreva("Digite o valor de a: ")
   Leia(coef_a)

   Escreva("Digite o valor de b: ")
   Leia(coef_b)

   Escreva("Digite o valor de c: ")
   Leia(coef_c)

   CalcularRaizes(coef_a, coef_b, coef_c)
FimAlgoritmo
