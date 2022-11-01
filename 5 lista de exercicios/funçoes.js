//melhor organização do codigo
//facilita manutenção
//dividir para conquistar
//cria programas menores a partir de um programa grande
function principal() {
    let vetor = []

    leitura(vetor)
    soma10(vetor)
    mostra(vetor)
}
function leitura(vetor) {
    for (let i = 0; i < 10; i++) {
        vetor[i] = i
    }
}
function soma10(vetor) {
    for (let i = 0; i < 10; i++) {
        vetor[i] += 10
    }
}
function mostra(vetor) {
    console.log(vetor)
}