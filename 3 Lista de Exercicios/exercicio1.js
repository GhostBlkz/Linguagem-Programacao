function calcularExe1() {
    for (let j = 1; j < 6; j++) {
        let a = Number(prompt("Informe o Primeiro numero"))
        let b = Number(prompt("Informe o Segundo numero"))
        let c = Number(prompt("Informe o Terceiro numero"))
        let d = Number(prompt("Informe o Quarto numero"))
        let aux = 0

        console.log(`Ordem lida ${a} - ${b} - ${c} - ${d} `)

        for (let i = 1; i <= 3; i++) {
            if (a > b) {
                aux = a
                a = b
                b = aux
            }
            if (b > c) {
                aux = b
                b = c
                c = aux
            }
            if (c > d) {
                aux = c
                c = d
                d = aux
            }
        }
        //mostra o resultado
        console.log(`Crescente ${a} - ${b} - ${c} - ${d}`)
        console.log(`Decrescente ${d} - ${c} - ${b} - ${a}`)
        console.log(``)
    }

}