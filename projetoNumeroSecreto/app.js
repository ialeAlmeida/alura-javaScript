alert("Bem vindo ao jogo do Número Secreto!!! ;)");
let secretNum = 5;
let answer = prompt("Esolha um número entre 1 e 10");

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert("Erro! Preencha todos os campos");
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
nome = prompt("Digite seu nome: ");
idade = prompt("Digite sua idade: ");

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}

if (secretNum == answer) {
    console.log("Parabéns! Você descobriu o número secreto (" + answer + ")");
} else if (answer < secretNum) {
    console.log("Resposta incorreta. O número sercreto é maior do que " + answer + ". Tente de novo");
} else if (answer > secretNum) {
    console.log("Resposta incorreta. O número sercreto é menor do que " + answer + ". Tente de novo");
}