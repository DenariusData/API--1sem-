Algoritmo "OperacoesBasicas"

Var
   // Seção de Declarações das variáveis
   numero, resultado: real
   operacao: caractere

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval ("Informe numero")
   leia (numero)

   resultado <- numero

   enquanto operacao <> "=" faca
      leia (operacao)
      se operacao = "*" entao
         leia (numero)
         resultado <- resultado * numero
      fimse
      se operacao = "/" entao
         leia (numero)
         enquanto numero = 0 faca
            escreval ("Impossível fazer divisão por 0")
            leia (numero)
         fimenquanto
         resultado <- resultado / numero
      fimse
      se operacao = "+" entao
         leia (numero)
         resultado <- resultado + numero
      fimse
      se operacao = "-" entao
         leia (numero)
         resultado <- resultado - numero
      fimse
   fimenquanto
   escreval (resultado)

Fimalgoritmo
