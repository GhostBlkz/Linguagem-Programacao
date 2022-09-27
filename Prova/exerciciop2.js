function calcular2() {
    let vb = 0
    let acres = 0
    let pos = 0
    let vt = 0
    let erro = false
    let andar = Number(document.getElementById("n3").value)
    let metragem = Number(document.getElementById("n1").value)
    let garagem = Number(document.getElementById("n2").value)
    let sol = Number(document.getElementById("n4").value)

    if (metragem >= 0 && metragem < 80) {
        switch (garagem) {
            case 1:
                vb = 300000
                break
            case 2:
                vb = 320000
                break
            case 3:
                vb = 340000
                break
        }


    }
    else if (metragem >= 80 && metragem < 120) {
        if (garagem == 1) {
            vb = 400000
        }
        else if (garagem == 2) {
            vb = 420000
        }
        else if (garagem == 3) {
            vb = 440000
        }
        else {
            erro = true
        }
    }
    else if (metragem > 120) {
        if (garagem == 1) {
            vb = 500000
        }
        else if (garagem == 2) {
            vb = 520000
        }
        else if (garagem == 3) {
            vb = 540000
        }
        else {
            erro = true
        }
    }
    if (andar == 1) {
        acres = 10000
    }
    else if (andar == 2) {
        acres = 20000
    }
    else if (andar == 3) {
        acres = 30000
    }
    else {
        erro = true
    }
    if (sol == 'M') {
        pos = vb * 0.05
    }
    else {
        pos = vb * 0.08
    }
    if (erro) {
        alert('Erro')
    }


    vt = vb + acres + pos
    document.getElementById("resul3").innerHTML = `O valor total do apartamento é ${vt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
`

}