function Exercicio0() {

    const idades = [] //Declara o vetor idades
    const pares = []
    const impares = []
    

    for (let i = 0; i < 4; i++) {
        idades.push(Number(prompt('Informe a idades')))
    }

    for (let i = 0; i < 4; i++) {
        if (idades[i] % 2 == 0) {
            pares.push(idades[i])
        }
        else {
            impares.push(idades[i])
            
        }

    }
    alert(`Os numeros pares ${pares} e a quantidade é ${pares.length} `)
    alert(`Os numeros impares ${impares} e a quantidade é ${impares.length}`)
}