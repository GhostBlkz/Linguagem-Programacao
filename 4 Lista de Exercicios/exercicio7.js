function Exercicio7() {
    const vetor =[]
    let aux = 0, soma = 0
    //insere 10 numeros inteiros
    for(let i = 0 ; i < 10 ; i++) {
        vetor.push(parseInt(prompt(`Digite um numero inteiro`)))
    }

    for(let i = 0 ; i < 10 ; i++) {
        //conta quantos são negativos
        if (vetor[i] < 0){
            aux++
        }
        //soma so positivos
        else{
            soma = vetor[i]+soma
        }
    }
    document.getElementById('resul').innerHTML = (`A quantidade de numeros negativos é ${aux}
    e a soma dos positivos é ${soma}`)


}