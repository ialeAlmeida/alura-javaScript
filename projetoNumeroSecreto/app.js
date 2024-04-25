alert("Bem vindo ao jogo do Número Secreto!!! ;)");
let secretNum = 9;
let answer = prompt("Esolha um número entre 1 e 10");

if (secretNum == answer) {
    alert(`Parabéns! Você descobriu o número secreto (${secretNum})`);
} else if (answer < secretNum) {
    alert(`Resposta incorreta. O número sercreto é maior do que ${answer}. Tente de novo`);
} else if (answer > secretNum) {
    alert(`Resposta incorreta. O número sercreto é menor do que ${answer}. Tente de novo`);
}