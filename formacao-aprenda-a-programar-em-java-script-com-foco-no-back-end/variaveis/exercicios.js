const string = 'casa';
const num = 51;
const moraAi = true;

console.log(typeof string);
console.log(typeof num);
console.log(typeof moraAi);

//--------------------------------------------------------------

const primeiroNome = 'Iale ';
const ultimoNome = "Almeida";
const nomesJuntos = primeiroNome + ultimoNome;
const nomesJuntosTempStr = `${primeiroNome}${ultimoNome}`;

console.log(primeiroNome);
console.log(ultimoNome);
console.log(nomesJuntos);
console.log(nomesJuntosTempStr);

//--------------------------------------------------------------

const num1 = 51;
const local = 'Área';
const together = `${local} ${num1}`;
console.log(together);

//--------------------------------------------------------------

let nome = 'Maria';
console.log(nome);

nome = 'Iale';
console.log(nome);

//--------------------------------------------------------------

// 5. Consegui acessar as duas variáveis dentro e fora do bloco, pois as duas foram
// declaradas com var.
//    Já com let foi diferente. Consegui acessar aquela que foi declarada fora do 
// bloco dentro do mesmo. Mas não consegui acessar fora do bloco a que tinha sido 
// declarada dentro do mesmo.

//--------------------------------------------------------------

let estaChovendo = true;

if (estaChovendo) {
    console.log('Leve uma sombrinha!!! Está chovendo :(');
} else {
    console.log('Não está chovendo');
}