function porcento(x, y) {
    return (100 * x) / y;
}
function calcularExe7() {

    let altura = 0
    let peso = 0
    let idade = 0, contI = 0, contII = 0, contIII = 0
    let erro = false
    let cont = 0
    let Saltura = 0
    for (let i = 1; i <= 8; i++) {
        idade = Number(prompt("Informe a Idade"))
        altura = Number(prompt("Informe a Altura"))
        peso = Number(prompt("Informe o Peso"))
        cont += 1

        if (idade > 50) {
            contI += 1

        }
        else if (idade >= 10 && idade < 21) {
            Saltura += altura
            contII += 1
        }
        if (peso >= 0 && peso < 40) {
            contIII += 1

        }

    }
    document.getElementById('resul').innerHTML = `Quantidade de pessoas com mais de 50 ${contI} </br>
A média das alturas de pessoas entre 10 e 20 anos ${Saltura / contII}</br>
porcentagem de pessoas com menos de 40 kilos ${porcento(contIII, cont)}%`



}     