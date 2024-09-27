function dados() {
    return Math.floor(Math.random() * 6) + 1;
}

function jogarCraps() {
    const dado1 = dados();
    const dado2 = dados();
    const soma = dado1 + dado2;
    alert(`A soma dos dados foram: ${dado1} + ${dado2} = ${soma}`);
    
    if (soma === 7 || soma === 11) {
        alert("Parabéns! Você tirou uma nota igual a Natural e ganhou!");
    } else if (soma === 2 || soma === 3 || soma === 12) {
        alert("Craps! Você perdeu.");
    } else {
        const ponto = soma;
        alert(`Seu ponto é ${ponto}. Continue jogando...`);
        
        while (true) {
            const dado1 = dados();
            const dado2 = dados();
            const soma = dado1 + dado2;
            alert(`A soma dos dados foram: ${dado1} + ${dado2} = ${soma}`);
            
            if (soma === ponto) {
                alert("Parabéns! Você tirou seu ponto novamente e ganhou!");
                break;
            } else if (soma === 7) {
                alert("Você tirou um 7 antes de tirar seu ponto novamente. Você perdeu.");
                break;
            }
        }
    }
}

jogarCraps();