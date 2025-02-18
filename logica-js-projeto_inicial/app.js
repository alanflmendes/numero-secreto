alert('Boas vindas ao nosso site!');
let nomee = "";
let idadee = 25
let numeroDeVendas = 50
let saldoDisponivel = 1000
let mensagemDeErro = "Erro! Preencha todos os campos"
alert(mensagemDeErro)
let nome = prompt("Digite aqui sua idade:"); //testando git hub
let idade = prompt('Digite a sua idade');
let idade = prompt('Digite a sua idade');
if (idade >= 18){
    alert('Pode tirar habilitação')
}else{
    alert("Vá se lascar")
}

let diaSemana = prompt('Qual o dia da semana?').toLowerCase(); // Converte para minúsculas
if (diaSemana === "sábado" || diaSemana === "domingo") {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!'); // testando commit
}

let numero = prompt('Digite um número:'); // Converte a entrada para número
if (numero > 0) {
    alert('O número é positivo.');
} else if (numero <= 0) {
    alert('O número é negativo.');
}