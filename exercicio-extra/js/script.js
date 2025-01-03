let number = parseFloat(prompt("Digite o numero que você quer somar" + "\n"
    + "O numero vai ser somado até chegar em 50"));

let result = "";

for ( let i = 0; i <= 10 ; i++){
    sum = number / i
    result += number + " / " + i + " = " + sum + "\n"
}

alert(result)