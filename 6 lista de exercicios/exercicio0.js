function exercicio0() {
    let matriz = [] //declaração de matriz
    leitura(matriz)
    console.log(matriz)
    media(matriz)
}
function leitura(matriz) {
    for (let i = 0; i < 5; i++) {
        matriz[i] = [] //criando um vetor em cada posição da matriz
        alert(`informe as notas do aluno ${i + 1}`)
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Number(prompt(`Informe a nota ${j + 1}`))

        }
    }
}
function media(matriz) {

    for (let i = 0; i < matriz.length; i++) {
        let soma = 0 // zera a nota pois e um novo aluno
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]
        }

        //encerram as notas
        console.log(`A media do aluno ${i+ 1} é ${soma / matriz[i].length}`)
    }
}