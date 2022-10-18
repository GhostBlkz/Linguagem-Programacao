function Exercicio6() {
    const nome = []
    const vendas = []
    const comissao = []
    let soma
    //entrada dos valores nos vetores
    for (let i = 0; i < 5; i++) {
        nome.push(String(prompt(`Informe o ${i + 1}° nome: `)))
    }
    for (let i = 0; i < 5; i++) {
        vendas.push(Number(prompt(`Informe a quantidade de vendas do ${nome[i]}: `)))
    }
    for (let i = 0; i < 5; i++) {
        comissao.push(Number(prompt(`Informe a comissão do ${nome[i]}: `)))

    }
    //relatorio
    //calcular os vcalores a receber
    const receber=[]
    for (let i = 0 ; i<5; i++){
        receber.push((vendas[i]*comissao[i])/100)
    }
    for (let i = 0; i < 5; i++) {
       console.log( `O vendedor ${nome[i]} vai receber ${receber[i]} `)

    }
    //total das vendas
    soma = 0
    for (let i = 0; i < 5; i++) {
        soma += vendas[i]
    }
    console.log(`A soma dos Salarios mais comissões é: ${soma}`)

    let MaiorValor = receber[0], nomeMaiorValor = nome[0]
     let menorValor = receber[0], nomeMenorValor = nome[0]

    for(let i = 1; i< 5 ; i++){
        if (receber[i] > MaiorValor){
            MaiorValor = receber[i]
            nomeMaiorValor = nome[i]
        }
        if (receber[i] < menorValor){
            menorValor = receber[i]
            nomeMenorValor = nome[i]
        }
    
    }

    console.log(`Quem vendeu mais foi ${nomeMaiorValor} e o valor foi ${MaiorValor}`)
    console.log(`Quem vendeu menos foi ${nomeMenorValor} e o valor foi ${menorValor}`)
    




}