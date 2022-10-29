/* 1. Você deve solicitar apenas o nome e idade do seu usuário e salvar em
variáveis
2. Com o valor da idade em mãos, crie uma variável AnoNascimento e grave o
ano de nascimento do usuário, considerando o ano atual como 2022.
3. Com esses dados você deve exibir o seguinte texto, substituindo com os
valores recebidos: Olá NOMEUSUARIO, você tem IDADE anos que é um
número (PAR OU IMPAR de acordo com a idade) e nasceu no ano:
AnoNascimento que é um número (PAR OU IMPAR de acordo com a idade)
4. Se o usuário já for maior de idade, em outra linha você deve exibir: “Está
liberado o consumo de bebidas alcoólicas" */



var idade
var nome

var nome = prompt("Insira o seu nome")
var idade = prompt("Qual sua idade")

var maiorIdade
if (idade >= 18) {
    maiorIdade = true
} else {
    maiorIdade = false
}
var anoNasc = 2022 - idade

var idadeParImpar
if (idade % 2 == 0) {
    idadeParImpar = "par"
} else {
    idadeParImpar = "impar"
}

var anoParImpar
if (anoNasc % 2 == 0) {
    anoParImpar = "par"
} else {
    anoParImpar = "impar"
}

console.log("Ola", nome, "voce tem", idade, "anos que e um numero", idadeParImpar, "e nasceu no ano:", anoNasc, "que e um numero", anoParImpar)
if (maiorIdade == true) {
    console.log("Esta liberado o consumo de bebidas alcoolicas")
} else {
    console.log("Voce ainda e menor de idade")
}














