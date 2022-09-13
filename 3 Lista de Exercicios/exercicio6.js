function calcularExe6() {
    let valor
    let vista = 0
    let prazo = 0
    let cod
    let vtotal = 0, pP = 0, spP = 0
    let erro = false


    for (let i = 1; i < 16; i++) {
        cod = String(prompt('Digite o Codigo V ou P'))
        valor = Number(prompt('Digite o Valor'))
        vtotal = vtotal + valor
        if (cod == 'V' || cod == 'v') {
            vista = valor + vista
        }
        else if (cod == 'P' || cod == 'p') {
            prazo = valor + prazo
            pP = valor / 3
            spP = pP + spP
        }

        else {
            erro = true
        }
    }

    document.getElementById('resul').innerHTML = `Valor das compras á Vista ${vista.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </br>
    Valor das compras a Prazo ${prazo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </br>
    Valor total das compras ${vtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </br>
    Valor das primeiras parcelas juntas ${spP.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`


}


