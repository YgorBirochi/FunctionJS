function novoNumero(a, b) {
    if (a >= 10 && a <= 99 && b >= 10 && b <= 99) {
        let n1 = Math.floor(a / 10);
        let n2 = b % 10;
        let n3 = parseInt(`${n1}${n2}`);
        console.log(`O novo número criado foi: ${n3}`);
    } else {
        console.log('Os números devem estar entre 10 e 99.');
    }
}
novoNumero(90, 15);
