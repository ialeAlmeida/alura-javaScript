/*alert("Bem vindo ao jogo do Número Secreto!!! ;)");
let secretNum = 9;
let answer = prompt("Esolha um número entre 1 e 10");


if (secretNum == answer) {
    alert(`Parabéns! Você descobriu o número secreto (${secretNum})`);
} else if (answer < secretNum) {
    alert(`Resposta incorreta. O número sercreto é maior do que ${answer}. Tente de novo`);
} else if (answer > secretNum) {
    alert(`Resposta incorreta. O número sercreto é menor do que ${answer}. Tente de novo`);
}*/

// --------------------------------------------------------------

let semanalDay = prompt("Qual o dia da semana?");

if (semanalDay == "Domingo" || semanalDay == "Sábado") {
    alert("Bom fim de semana! :)"); 
} else {
     alert("Boa semana! :)");
 }

let num = prompt("Digite um número:");

if (num > 0) {
    alert(`${num} é um número positivo`);
} else {
    alert(`${num} é um número negativo`);
}

// --------------------------------------------------------------

let pontuacao = prompt("Qual a sua pontuação no jogo?");

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar");
}

// --------------------------------------------------------------

let ballance = 500;

alert(`Seu saldo é R$${ballance}`);

// --------------------------------------------------------------

let nameUser = prompt("Insira seu nome:");

alert(`Bem vindo, ${nameUser}! :)`);
