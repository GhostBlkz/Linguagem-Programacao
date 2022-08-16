function calcular() {
    // recupera o valor de altura digitado pelo usuario na caixa de texto
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    //calcular imc
    let imc = peso / (altura * altura)
    //mostra o resultado
    alert(`o valor do IMC é de: ${imc.toFixed(2)}`)
}