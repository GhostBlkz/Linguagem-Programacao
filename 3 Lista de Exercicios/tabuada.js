function calcular() {
    console.log('Funcionou')

    //com estrutura de repetição while

    let num = 1

    while (num <= 10) {
        let contador = 0
        while (contador <= 10) {
            console.log(`${num} x ${contador} = ${num * contador}`)
            contador++
        }
        num++
    }
}
function calculaMedia() {
    let altura
    let media
    let contador = 0
    let acumula = 0
    while (contador <= 10) {
        altura = prompt('Informe a altura')
        acumula = acumula + altura
        contador++
    }

    media = acumula / 10

    document.getElementById("resul") = `A media das alturas é ${media}`



}