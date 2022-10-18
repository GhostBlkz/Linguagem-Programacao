function Exercicio2() {
    const numeros = []
    const M3 = []
    const M2 = []
    const M23 = []

    for (let i = 0; i < 8; i++) {
        numeros.push(Number(prompt('Informe os numeros')))
    }
    for (let i = 0; i < 8; i++) {
        if (numeros[i] % 2 == 0) {
            M2.push(numeros[i])
        }
        if (numeros[i] % 3 == 0) {
            M3.push(numeros[i])
        }
        if (numeros[i] % 2 == 0 && numeros[i] % 3 == 0) {
            M23.push(numeros[i])
        }
    }
    alert(`Os multiplos de 2: ${M2}
    os multiplos de 3: ${M3}
    os multiplos de 2 e 3:  ${M23}`)


}