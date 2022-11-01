function Exercicio14(){
    const nome = [] , nota1 = [], nota2 =[]
    //entrada de dados
    for (let i = 0; i < 5; i++) {
        nome.push(String(prompt(`Informe o ${i + 1}° nome: `)))
        nota1.push(Number(prompt(`Informe a primeira nota do ${nome[i]}: `)))
        nota2.push(Number(prompt(`Informe a segunda nota do ${nome[i]}: `)))
    }

    const media = []
    for (let i = 0; i < 5; i++) {
        media.push(nota1[i]+nota2[i])
        media.forEach(soma)

    }
    function soma(item){
        let soma = 0
        soma += item
    }

}