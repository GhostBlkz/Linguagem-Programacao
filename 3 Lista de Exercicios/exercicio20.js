function calcularExe20() {
    let opt
    do {
        opt = Number(prompt('Digite 1 para Media Aritimetica \n Digite 2 para Media Ponderada \n Digite 3 para sair'))
        switch (opt) {
            case 1:
                let nota1 = Number(prompt('Digite a Primeira nota'))
                let nota2 = Number(prompt('Digite a Segunda nota'))
                let mediaA = (nota1 + nota2) / 2
                alert(`A media é ${mediaA}`)
                break
            case 2:
                let nota3 = Number(prompt('Digite a Primeira nota'))
                let p1 = Number(prompt('Digite o Peso'))
                let nota4 = Number(prompt('Digite a Segunda nota'))
                let p2 = Number(prompt('Digite o Peso'))
                let nota5 = Number(prompt('Digite a Terceira nota'))
                let p3 = Number(prompt('Digite o Peso'))
                let mediaP = (nota3 * p1 + nota4 * p2 + nota5 * p3) / (p1 + p2 + p3)
                alert(`A media é ${mediaP}`)
                break
            case 3:
                alert('Sair')
                break
            default:
            alert('erro')    
        }


    }
    while (opt != 3)
}