function exercicio8obj() {
    let vetor = []
    criarObj(vetor)
    criarIndice(vetor)
    maiorEmenor(vetor)
    media(vetor)
    percentualV(vetor)
    mostra(vetor)

}
function criarObj(vetor) {
    for (let i = 0; i < 2; i++) {
        let objEstado = {
            nome: prompt(`Informe o nome do estado: `),
            veiculos: Number(prompt(`Informe nro de veiculos: `)),
            acidentes: Number(prompt(`Informe nro de acidentes: `)),
            cidades: Number(prompt("Informe a quantidade de cidades no estado")),
            indice: 0,
            percentualVeiculos: 0,
            mediaAcidentes: 0
        }
        vetor.push(objEstado)
    }
}
function criarIndice(vetor) {
    for (let i = 0; i < 2; i++) {
        vetor[i].indice = (vetor[i].acidentes / vetor[i].veiculos) * 100
    }
}
function maiorEmenor(vetor) {
    let maiorIndice = vetor[0].indice
    let menorIndice = vetor[0].indice
    let maiorNome = vetor[0].nome
    let menorNome = vetor[0].nome
    for (let i = 1; i < 2; i++) {
        if (vetor[i].indice > maiorIndice) {
            maiorIndice = vetor[i].indice
            maiorNome = vetor[i].nome
        }
        if (vetor[i].indice < maiorIndice) {
            menorIndice = vetor[i].indice
            menorNome = vetor[i].nome
        }

    }
    console.log(`Maior indice ${maiorIndice} do estado ${maiorNome}`)
    console.log(`Menor indice ${menorIndice} do estado ${menorNome}`)

}
function media(vetor) {
    for (let i = 0; i < 2; i++) {
        vetor[i].mediaAcidentes = vetor[i].acidentes / vetor[i].cidades
    }
}
function percentualV(vetor) {
    let somaVeiculos = 0

    for (let i = 0; i < 2; i++) {
        somaVeiculos += vetor[i].veiculos
    }

    for (let i = 0; i < 2; i++) {
        vetor[i].percentualVeiculos = (vetor[i].veiculos / somaVeiculos) * 100
    }
}
function mostra(vetor) {
    console.log("Mostrar resultado do vetor")
    console.log(vetor)
}