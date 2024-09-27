function bhaskara(a, b, c) {
    let delta = (b ** 2) - (4 * a * c);
    if (delta < 0) {
        console.log("Não existem raízes reais.");
        return;
    }
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`As raízes da equação são: x1 = ${x1} e x2 = ${x2}`);
}

bhaskara(1, -3, 2);
