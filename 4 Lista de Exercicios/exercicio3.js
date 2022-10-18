function Exercicio3() {
    const cod = [], estoque = []
    let cliente, prod, qntd
    let pedido = false


    for (let i = 0; i < 10; i++) {
        cod.push(Number(prompt('informe o codigo')))
        estoque.push(Number(prompt('informe o Total do estoque')))
    }


    do {
        prod = (Number(prompt('Digite o codigo do produto')))
        qntd = (Number(prompt('Digite o a quantidade')))
        cliente = (Number(prompt('Digite o codigo do cliente')))

        //verifica se produto existe
        for (let i = 0; i < cod.length; i++) {
            if (prod == cod[i]) {
                pedido = true
                if (estoque[i] >= qntd) {
                    estoque[i] = estoque[i] - qntd
                }
                else {
                    console.log('Estoque insuficiente')
                }
                
            }
        }
        if (!pedido) {
            console.log('Produto nao encontrado')
            
        }
        cliente = (Number(prompt('Informe o Novo cliente digite 0 para sair')))
        
    }
    while (cliente != 0)
    console.log(cod)
    console.log(estoque)

}