let palavra = 'amendoim';

function embaralhar(plv) {
    let list = plv.split('');

    for (let cont = list.length; cont > 0; cont--) {
        const inAleatorio = Math.floor(Math.random() * cont);
        const elemento = list[cont - 1];
        list[cont - 1] = list[inAleatorio];
        list[inAleatorio] = elemento;
    }

    console.log(`${plv} = ${list.join('')}`);
}

embaralhar(palavra);
