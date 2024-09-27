function revers(a){
    var reverso = String(a).split('').reverse().join('');
    console.log(`O numero ${a} invertido ficou ${reverso}`);
}

revers(1234);