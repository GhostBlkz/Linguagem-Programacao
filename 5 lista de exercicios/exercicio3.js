function exercicio3obj() {
    const vetor = []

    for (let i = 0; i < 3; i++) {
        const pessoa = {
            sexo: String(prompt(`Informe o Sexo(F ou M) da ${i + 1} pessoa`)),
            idade: Number(prompt(`Informe a idade da ${i + 1} pessoa`)),
            altura: Number(prompt(`Informe a altura da ${i + 1} pessoa`)),
            olhos: String(prompt(`Informe a cor dos olhos (A,V,C) da ${i + 1} pessoa`))

        }
        vetor.push(pessoa)
    }
    let media = 0
    let soma = 0
    let contIdade = 0
    //calculando a media
    for (let i = 0; i < 3; i++) {
        if (vetor[i].altura > 1.60 && vetor[i].olhos == 'C') {
            soma += vetor[i].idade
            contIdade++
        }
    }

    media = soma / contIdade
    console.log(`A media é ${media}`)
    //descobrindo a Maior idade
    let maiorIdade = vetor[0].idade

    for (let i = 0; i < 3; i++) {
        if (vetor[i].idade > maiorIdade) {
            maiorIdade = vetor[i].idade
        }
    }
    console.log(`A maior idade é ${maiorIdade}`)
    //contando Mulheres de idade entre 20 e 45 menores que 1.70 de olhos verdes
    let cont = 0
    for (let i = 0; i < 3; i++) {
        if (vetor[i].sexo == 'F' && vetor[i].idade >= 20 && vetor[i].idade <= 45 || vetor[i].olhos == 'V' && vetor[i].altura < 1.70 && vetor[i].sexo == 'F') {
            cont++
        }
    }
    console.log(`A quantidade de habitantes do sexo feminino entre 20 e 45 ou olhos verdes e menor que 1.70 ${cont}`)
    //descobrindo a porcentagem de homens
    let contHomem = 0
    let porcento = 0
    for (let i = 0; i < 3; i++) {
        if (vetor[i].sexo == 'M') {
            contHomem++
        }
    }
    porcento = (contHomem * 100) / vetor.lenght
    console.log(`A porcentagem de homens é de ${porcento.toFixed(2)}%`)






}