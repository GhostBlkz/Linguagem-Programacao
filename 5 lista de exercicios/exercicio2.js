function exercicio2(){
    vetor =[]
    entrada(vetor)
    mediaSalario(vetor)
    mediaNfilhos(vetor)
    maiorSalario(vetor)
    percentualMS(vetor)
    mostra(vetor)
}
function entrada(vetor){
    for(let i = 0; i<2; i++){
        let pessoas = {
            sexo: prompt('informe o sexo da pessoa').toUpperCase,
            idade: Number(prompt('Informe a idade da pessoa')),
            salario: Number(prompt('informe o salario da pessoa')),
            filhos: Number(prompt('informe o numero de filhos'))
            
        }
        vetor.push(pessoas)
    }
}
function mediaSalario(vetor){
    let soma = 0
    for(let i= 0; i<2; i++){
        soma += vetor[i].salario
    }
    let mediaS = 0 
    mediaS = soma/vetor.lenght
    console.log(`A media dos salarios é ${mediaS}`)
}
function mediaNfilhos(vetor){
    let soma = 0
    for(let i= 0; i<2; i++){
        soma += vetor[i].filhos
    }
    let mediaF = 0
    mediaF = soma/vetor.lenght
    console.log(`A media do numero de filhos é ${mediaF}`)
}
function maiorSalario(vetor){
    let maior = vetor[0].salario

    for(let i = 0 ; i <2; i++){
        if(vetor[i].salario > maior){
            maior = vetor[i].salario
        }
    }
    console.log(`O maior salario é ${maior}`)
}
function percentualMS(vetor){
    let soma1 = 0
    let soma2 = 0
    let porcento = 0
    for (let i = 0; i <2; i++){
        if(vetor[i].sexo == 'F' && vetor[i].salario > 1000){
            soma1++
        }
        if(vetor[i].sexo == 'F' ){
            soma2++
        }
    }
    for (let i = 0; i <2; i++){
        porcento = (soma2/soma1)*100

    }
    console.log(`percentual de mulheres que recebem mais que 1000 ${porcento}`)
    
}
function mostra(vetor){
    console.log('O vetor é')
    console.log(vetor)
}