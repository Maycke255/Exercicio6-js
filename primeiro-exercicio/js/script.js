/* Escreva um programa em javascript que seja capaz de calcular a 
tabuada de um determinado número (de 1 a 20). O programa deve começar
pedindo o número a ser usado nos cálculos e então salvar todos os 
resultados de multiplicações de 1 a 20 usando o número informado 
dentro de uma variável do tipo string. Depois o programa deve exibir 
esses resultados e finalizar. */

let number = parseFloat(prompt("Qual numero você quer usar no calculo? \n"+
    "O numero vai ser multiplicado ate chegar em 20"));

for (
    let i = 1;
    i <= 20;
    i++
){
    let result = number * i;
    alert(number + " x " + i + " = " + result);
}