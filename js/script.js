let numberOne = 0;
let numberTwo = 0;

numberOne = Number(prompt("Digite o primeiro número:"));
numberTwo = Number(prompt("Digite o segundo número:"));

let add = numberOne + numberTwo;



alert(`A soma dos dois número é: ${add}`);
alert(`A subtração dos número é: ${numberOne - numberTwo}`);
alert(`A multiplicação dos dois número é: ${numberOne * numberTwo}`);
alert(`A divisão dos dois número é: ${numberOne / numberTwo}`);
alert(`O resto da divisão dos dois número é: ${numberOne % numberTwo}`);

parInpar(add);
checkingNumbers(numberOne, numberTwo)

function parInpar(add) {
    if(add % 2 == 0){
        alert("par");
    }else{
        alert("impar");
    }
}

function checkingNumbers(numberOne, numberTwo) {
    if(numberOne == numberTwo){
        alert("iguais");
    }else{
        alert("diferentes");
    }
}

