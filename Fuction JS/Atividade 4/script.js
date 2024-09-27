var letra = prompt("Insira se você quer a média aritmética ou a média ponderada das notas.\nInsira A para média aritmética\nInsira P para média ponderada");

function medias(a, b, c) {
    if (letra.toUpperCase() == "A") {
        var mediaA = (a + b + c) / 3;
        alert(`A média aritmética dos alunos ficou ${mediaA.toFixed(2)}`);
    } else if (letra.toUpperCase() == "P") {
        var mediaP = ((a * 5) + (b * 3) + (c * 2)) / 10;
        alert(`A média ponderada dos alunos ficou ${mediaP.toFixed(2)}`);
    } else {
        alert("Insira apenas A ou P");
    }
}

medias(5, 8, 10);
