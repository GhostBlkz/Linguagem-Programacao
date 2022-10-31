//melhor organização do codigo
//facilita manutenção
//dividir para conquistar
//cria programas menores a partir de um programa grande
function principal(){
    let vetor = []

    leitura(vetor)
    soma10(vetor)
    mostra(vetor)
}
function leitura(){
    for(let i=10;i<10;i++){
    vetor[i] = i
    }
}
function soma10(){
    for(let i =10;i<10;i++){
        vetor[i] += 10
    }
}
function mostra(){
    console.log(vetor)
}