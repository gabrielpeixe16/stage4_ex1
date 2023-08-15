//apresentação do programa
alert(`Olá, sou a GPX Calculator!
insira dois números e daremos os resultados de +, - , *, / e resto da divisão:`)


//captura dos dados
let firstNumber = prompt(`Primeiro número`)
let secondNumber = prompt(`Segundo número`)

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

//cálculos
const sum = Number(firstNumber) + Number(secondNumber)
const subt = Number(firstNumber) - Number(secondNumber)
const mult = Number(firstNumber) * Number(secondNumber)
const div = Number(firstNumber) / Number(secondNumber)
const remainder = Number(firstNumber) % Number(secondNumber)
 
//retornando os resultados p/ usuário
alert(`Os resultados são:
Soma: ${sum}
Subtração: ${subt}
Multiplicação: ${mult}
Divisão: ${div}
Resto da divisão: ${remainder}`)

//verificando e retornando se os números são iguais
if (Number(firstNumber) === Number(secondNumber)){
  alert(`Os números são iguais`)
  } else {
    alert(`Os números são diferentes`)
  };

//verificando e retornando se os números são pares ou ímpares
  if( sum % 2 === 0){
    alert(`O resultado da soma é: ${sum}, e esse número é par`)
  } else{
    alert(`O resultado da soma é: ${sum}, e esse número é ímpar`)
  }



