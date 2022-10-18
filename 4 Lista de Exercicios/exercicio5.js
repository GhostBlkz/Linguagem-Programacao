function Exercicio5() {
    //entrada de dados
    const lista1 = []
    const lista2 = []
    const comparar = []

    for (let i = 0; i < 5; i++) {
        lista1.push(Number(prompt(`Informe a ${i + 1} matricula de Logica`)))
    }

    for (let i = 0; i < 3; i++) {
        lista2.push(Number(prompt(`Informe a ${i + 1} matricula de Linguagem`)))
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
            if (lista1[i] == lista2[j]) {
                comparar.push(lista1[i])
            }
        }

    }
    if (comparar.length == 0) {
        alert('Não ha alunos participando das duas Matérias')
    }
    else {
        alert(`O numero da matricula dos alunos que fazem as duas materias são: ${comparar}`)
    }
}