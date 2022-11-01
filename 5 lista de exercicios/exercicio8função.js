function exercicio8obj() {
    let vetor = []
    criarObj(vetor)
    criarIndice(vetor)
    maiorEmenor(vetor)
    percentualV(vetor)
    mostra(vetor)

}
function criarObj() {
    for (let i = 0; i < 5; i++) {
        let objEstado = {
            nome: prompt(`Informe o nome do estado: `),
            veiculos: Number(prompt(`Informe nro de veiculos: `)),
            acidentes: Number(prompt(`Informe nro de acidentes: `)),
            cidades: Number(prompt("Informe a quantidade de cidades no estado")),
            indice: 0,
            percentualVeiculos: 0,
            mediaAcidentes: 0
        }
    }vetor[i].push(objEstado)
}
function criarIndice() {
    for (let i = 0; i < 5; i++) {
        vetor[i].indice = (vetor[i].acidentes / vetor[i].veiculos) * 100
    }
}
function maiorEmenor() {
    let maiorIndice = vetor[0].indice
    let menorIndice = vetor[0].indice
    let maiorNome = vetor[0].nome
    let menorNome = vetor[0].nome
    for (let i = 1; i < 5; i++) {
        if (vetor[i].indice > maiorIndice) {
            maiorIndice = vetor[i].indice
            maiorNome = vetor[i].nome
        }
        if (vetor[i].indice < maiorIndice) {
            menorIndice = vetor[i].indice
            menorNome = vetor[i].nome
        }

    }

}
function percentualV() {
    let somaVeiculos = 0

    for (let i = 0; i < 5; i++) {
        somaVeiculos += vetor[i].veiculos
    }

    for (let i = 0; i < 5; i++) {
        vetor[i].percentualVeiculos = (vetor[i].veiculos / somaVeiculos) * 100
        vetor[i].mediaAcidentes = vetor[i].acidentes / vetor[i].cidades
    }
}
function mostra() {
    console.log(vetor)
    console.log(`Maior indice ${maiorIndice} do estado ${maiorNome}`)
    console.log(`Menor indice ${menorIndice} do estado ${menorNome}`)
}