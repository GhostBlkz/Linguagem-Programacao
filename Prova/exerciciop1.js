function porcento(x, y) {
    return (100 * x) / y;
}

function calcular1() {
    let opt
    let teams = 0
    let papel = 0
    let whats = 0
    let email = 0
    let tf = 0
    let total = 0
    let aux = 0
    let a = 0, b = 0 , c = 0, d = 0 , e = 0

    do {
        opt = Number(prompt('Digite a opção e digite 0 para finalizar'))
        total++
        switch (opt) {
            case 1:
                teams++
                break
            case 2:
                papel++
                break
            case 3:
                whats++
                break
            case 4:
                email++
                break
            case 5:
                tf++
                break
            case 0:
                alert('Suas opções foram registradas')
                break
            default:
                alert('erro digite outro valor')
        }
    }
    while (opt != 0)
    document.getElementById('resul').innerHTML = `Teams foi escolhido ${(teams)} vezes </br>
    papel foi escolhido ${papel} vezes </br>
    whatsapp foi escolhido ${whats} vezes </br>
    email foi escolhido ${email} vezes </br>
    tanto faz foi escolhido ${tf} vezes </br>
    a porcentagem de tanto faz sobre o total ${porcento(tf, total).toFixed(2)}%`
    a = teams
    b = papel
    c = whats
    d= email
    e = tf
    for (let i = 1; i <= 4; i++) {
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
        if (d > e ){
            aux = d 
            d = e
            e = aux
        }
    }
    document.getElementById('resul2').innerHTML = `a ordem crescente é ${a} - 
    ${b} - ${c} - ${d} - ${e} `


}