function verificarData(data) {

    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (regex.test(data)) {
        const partes = data.split('/');
        const dia = partes[0];
        const mes = parseInt(partes[1]);
        const ano = partes[2];

        const mesesPorExtenso = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        if (mes >= 1 && mes <= 12) {
            console.log(`${dia} de ${mesesPorExtenso[mes - 1]} de ${ano}`);
        } else {
            console.log("NULL");
        }

    } else {
        console.log("NULL");
    }
}
verificarData("20/10/2010");
verificarData("31/13/2021");
verificarData("12/12/21");