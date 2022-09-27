function calcularExe21() {
    let voto, nulo
    let candidato1, candidato2, candidato3, candidato4

    do {
        voto = Number(prompt('Digite seu Voto e digite 0 para finalizar'))
        switch (voto) {
            case 1:
                candidato1++
                break
            case 2:
                candidato2++
                break
            case 3:
                candidato3++
                break
            case 4:
                candidato4++
                break
            case 5:
                nulo++
                break
            case 0:
                alert('Seu voto foi registrado')
                break
            default:
                alert('erro')
        }
    }
    while (voto != 0)
    document.getElementById('resul').innerHTML=`O candidato `

}