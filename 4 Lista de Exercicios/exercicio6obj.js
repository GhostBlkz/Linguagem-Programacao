function Exercicio6() {

    const vetor = []
    for (let i = 0; i < 3; i++) {
        const vendedor = {
            nome: String(prompt(`informe o nome do ${i + 1}° vendedor`)),
            vendas: Number(prompt(`informe as vendas do  vendedor`)),
            comissao: Number(prompt(`informe a comissao do vendedor`)),
            receber: 0
        }
        vetor.push(vendedor)

    }

    let total = 0

    for (let i = 0; i < 3; i++) {
        vetor[i].receber = (vetor[i].vendas * vetor[i].comissao) / 100
        total += vetor[i].vendas
    }

    let maiorValor = vetor[0].receber
    let menorValor = vetor[0].receber
    let maiorNome = vetor[0].nome
    let menorNome = vetor[0].nome

    for (let i = 1; i < 3; i++) {
        if (vetor[i].receber > maiorValor) {
            maiorValor = vetor[i].receber
            maiorNome = vetor[i].nome
        }
        if (vetor[i].receber < menorValor) {
            menorValor = vetor[i].receber
            menorNome = vetor[i].nome
        }

    }
    for (let i = 0; i < 3; i++) {
        console.log(`O vendedor ${vetor[i].nome} receberá ${vetor[i].receber}`)
    }
    console.log(`A soma dos Salarios mais comissões é: ${total}`)
    console.log(`Quem vendeu mais foi ${maiorNome} e o valor foi ${maiorValor}`)
    console.log(`Quem vendeu menos foi ${menorNome} e o valor foi ${menorValor}`)

}