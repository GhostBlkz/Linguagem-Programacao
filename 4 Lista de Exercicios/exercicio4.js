function Exercicio4() {
    const vetor = []
    const salvar = []


    for (let i = 0; i < 10; i++) {
        vetor.push(Number(prompt(`Informe o ${i + 1} valor`)))
        if (vetor[i] == 30) {
            salvar.push(i + 1)
        }

    }

    if (salvar.length == 0) {
        alert('nao tem 30')
    }
    else {
        alert(`As posições que aparecem 30 são ${salvar}`)
    }

}