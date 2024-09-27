var comandos = prompt("Insira se você quer somar, subtrair, dividir ou multiplicar.\nInsira + para adição\nInsira - para subtração\nInsira * para multiplicação\nInsira / para divisão");

function num(a, b) {
    if (comandos == "+") {
        var soma = a + b;
        alert(`A soma ficou ${soma}`);
    } else if (comandos == "-") {
        var subtracao = a - b;
        alert(`A subtração ficou ${subtracao}`);
    } else if (comandos == "*") {
        var multiplicacao = a * b;
        alert(`A multiplicação ficou ${multiplicacao}`);
    } else if (comandos == "/") {
        var divisao = a / b;
        alert(`A divisão ficou ${divisao}`);
    } else {
        alert("Insira apenas +, -, * ou / para executar os comandos.");
    }
}

num(21, 41);
