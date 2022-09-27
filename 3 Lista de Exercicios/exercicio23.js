function calcularExe23() {
    let opt
    let Nsalario

    do {
        opt = Number(prompt('Informe 1. Novo salario \n 2.Férias \n 3. Décimo terceiro \n 4. Sair '))

        switch (opt) {
            case 1:
                let novo
                Nsalario = Number(prompt('Digite o novo salario'))
                if (Nsalario >= 0 && Nsalario < 2100) {
                    novo = Nsalario + (Nsalario * 0.15)
                }
                else if (Nsalario >= 2100 && Nsalario <= 6000) {
                    novo = Nsalario + (Nsalario * 0.10)
                }
                else if (Nsalario > 6000) {
                    novo = Nsalario + (Nsalario * 0.05)
                }
                else {
                    alert('Salario informado não pode ser negativo')
                    break
                }
                alert(`Novo salario ${novo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
                break

            case 2:
                let ferias
                Nsalario = Number(prompt('Digite o novo salario'))
                if (Nsalario >= 0) {
                    ferias = (Nsalario / 3)
                    alert(`O salario com as ferias é ${ferias.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
                }
                else {
                    alert('Salario informado não pode ser negativo')
                }
                break

            case 3:
                let meses
                Nsalario = Number(prompt('Digite o novo salario'))
                meses = Number(prompt('Digite os Meses trabalhados no ano'))
                if (meses >= 0 && meses <= 12) {
                    let dTerceiro = (Nsalario * (meses / 12))
                    alert(`O valor do decimo terceiro é ${dTerceiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
                }
                else {
                    alert('Mes informado não pode ser negativo')
                }

                break
            case 4:
                alert('Obrigado por ultilizar o nosso sistema')

                break
            default:
                alert('Opção invalida tente novamente')

        }
    }
    while (opt != 4)

}