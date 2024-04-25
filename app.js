alert("Bem vindo ao jogo do Número Secreto!!! ;)");
let secretNum = 5;
let answer = prompt("Esolha um número entre 1 e 10");

if (secretNum == answer) {
    console.log("Parabéns! Você descobriu o número secreto (" + answer + ")");
} else if (answer < secretNum) {
    console.log("Resposta incorreta. O número sercreto é maior do que " + answer + ". Tente de novo");
} else if (answer > secretNum) {
    console.log("Resposta incorreta. O número sercreto é menor do que " + answer + ". Tente de novo");
}