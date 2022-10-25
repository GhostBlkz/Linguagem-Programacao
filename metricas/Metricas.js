function organizarMetricas() {

    const valores = []
    const valoresG = []
    let i = -1
    let aux = false
    let geral = 0


    //inserir valores . 0 2 vezes para sair
    while (i < valores.length && aux == false) {
        valores.push(Number(prompt("Insira os valores")))
        if (valores[i] == 0) {
            aux = true
        }
        i++
    }
    //retira os 2 ultimos valores do vetor(0 e 0 pressionados para sair)
    valores.pop()
    valores.pop()


    console.log(`valores sem geral ${valores}`)

    // soma o valor geral
    for (let j = 0; j < valores.length; j++) {
        geral = valores[j] + geral

    }
    console.log(`Geral: ${geral}`)

    //cria outro vetor com valor geral inserido
    for (let j = 0; j < valores.length; j++) {
        valoresG.push(valores[j])

    }
    valoresG.push(geral)


    console.log(`Valores com geral ${valoresG}`)
    console.log("")
    //separa a quantidade de entradas referenciadas
    let entrada1 = 0, entrada2 = 0, entrada3 = 0
    let entradaS = 0, entradaM = 0, entradaC = 0

    for (let j = 0; j < valores.length; j++) {
        if (valores[j] >= 1 && valores[j] <= 4) {
            entrada1++
        }
        else if (valores[j] >= 5 && valores[j] <= 15) {
            entrada2++
        }
        else if (valores[j] > 15) {
            entrada3++
        }

    }

    //soma as entradas ------------------
    if (entrada1 >= 0 && entrada1 <= 2) {
        entradaS += entrada1
    }
    else if (entrada1 >= 3) {
        entradaM += entrada1
    }

    //-----------------------------------
    if (entrada2 >= 0 && entrada2 <= 1) {
        entradaS += entrada2
    }
    else if (entrada2 == 2) {
        entradaM += entrada2
    }
    else if (entrada2 >= 3) {
        entradaC += entrada2
    }
    //-----------------------------------
    if (entrada3 >= 0 && entrada3 <= 1) {
        entradaM += entrada3
    }
    else if (entrada3 >= 2) {
        entradaC += entrada3
    }

    //separa a quantidade de saidas referenciadas
    let saida1 = 0, saida2 = 0, saida3 = 0
    let saidaS = 0, saidaM = 0, saidaC = 0

    for (let j = 0; j < valoresG.length; j++) {
        if (valoresG[j] >= 1 && valoresG[j] <= 5) {
            saida1++
        }
        else if (valoresG[j] >= 6 && valoresG[j] <= 19) {
            saida2++
        }
        else if (valoresG[j] > 19) {
            saida3++
        }

    }

    //soma as saidas -------------------
    if (saida1 >= 0 && saida1 <= 1) {
        saidaS += saida1
    }
    else if (saida1 >= 2 && saida1 <= 3) {
        saidaS += saida1
    }
    else if (saida1 >= 4) {
        saidaM += saida1
    }

    //----------------------------------
    if (saida2 >= 0 && saida2 <= 1) {
        saidaS += saida2
    }
    else if (saida2 >= 2 && saida2 <= 3) {
        saidaM += saida2
    }
    else if (saida2 >= 4) {
        saidaC += saida2
    }
    //---------------------------------
    if (saida3 >= 0 && saida3 <= 1) {
        saidaM += saida3
    }
    else if (saida3 >= 2 && saida3 <= 3) {
        saidaC += saida3
    }
    else if (saida3 > 4) {
        saidaC += saida3
    }

    //separa a quantidade de consultas referenciadas
    let consulta1 = 0, consulta2 = 0, consulta3 = 0
    let consultaS = 0, consultaM = 0, consultaC = 0

    for (let j = 0; j < valoresG.length; j++) {
        if (valoresG[j] >= 1 && valoresG[j] <= 4) {
            consulta1++
        }
        else if (valoresG[j] >= 5 && valoresG[j] <= 15) {
            consulta2++
        }
        else if (valoresG[j] > 15) {
            consulta3++
        }

    }

    //soma das consultas -----------------
    if (consulta1 >= 0 && consulta1 <= 1) {
        consultaS += consulta1
    }
    else if (consulta1 == 2 ) {
        consultaS += consulta1
    }
    else if (consulta1 >= 3) {
        consultaM += consulta1
    }

    //------------------------------------
    if (consulta2 >= 0 && consulta2 <= 1) {
        consultaS += consulta2
    }
    else if (consulta2 == 2) {
        consultaM += consulta2
    }
    else if (consulta2 >= 3) {
        consultaC += consulta2
    }

    //----------------------------------
    if (consulta3 >= 0 && consulta3 <= 1) {
        consultaM += consulta3
    }
    else if (consulta3 == 2) {
        consultaC += consulta3
    }
    else if (consulta3 >= 3) {
        consultaC += consulta3
    }

    //separa a quantidade de arquivos referenciados
    let arquivo1 = 0, arquivo2 = 0, arquivo3 = 0
    let arquivoS = 0, arquivoM = 0, arquivoC = 0

    for (let j = 0; j < valores.length; j++) {
        if (valores[j] >= 1 && valores[j] <= 19) {
            arquivo1++
        }
        else if (valores[j] >= 20 && valores[j] <= 50) {
            arquivo2++
        }
        else if (valores[j] > 50) {
            arquivo3++
        }

    }

    //soma dos arquivos-----------------

    if (arquivo1 == 1){
        arquivoS += arquivo1
    }
    else if (arquivo1 >=2 && arquivo1 <=5){
        arquivoS += arquivo1
    }
    else if (arquivo1 >= 6){
        arquivoM += arquivo1
    }
    //------------------------------------
    if (arquivo2 == 1){
        arquivoS += arquivo2
    }
    else if (arquivo2 >= 2 && arquivo2 <=5){
        arquivoM += arquivo2
    }
    else if (arquivo2 >=6){
        arquivoC += arquivo2
    }
    //-----------------------------------
    if (arquivo3 == 1){
        arquivoM += arquivo3
    }
    else if (arquivo3 >= 2 && arquivo3 <=5){
        arquivoC += arquivo3
    }
    else if (arquivo3 >= 6){
        arquivoC += arquivo3
    }

    //separa a quantidade de Interface referenciados
    let interface1 = 0, interface2 = 0, interface3 = 0
    let interfaceS = 0, interfaceM = 0, interfaceC = 0

    for (let j = 0; j < valoresG.length; j++) {
        if (valoresG[j] >= 1 && valoresG[j] <= 19) {
            interface1++
        }
        else if (valoresG[j] >= 20 && valoresG[j] <= 50) {
            interface2++
        }
        else if (valoresG[j] > 50) {
            interface3++
        }

    }

    if (interface1 == 1){
        interfaceS += interface1
    }
    else if (interface1 >=2 && interface1 <=5){
        interfaceS += interface1
    }
    else if (interface1 >= 6){
        interfaceM += interface1
    }
    //------------------------------------
    if (interface2 == 1){
        interfaceS += interface2
    }
    else if (interface2 >= 2 && interface2 <=5){
        interfaceM += interface2
    }
    else if (interface2 >=6){
        interfaceC += interface2
    }
    //-----------------------------------
    if (interface3 == 1){
        interfaceM += interface3
    }
    else if (interface3 >= 2 && interface3 <=5){
        interfaceC += interface3
    }
    else if (interface3 >= 6){
        interfaceC += interface3
    }    

    console.log(`A quantidade de Entrada Simples ${entradaS}`)
    console.log(`A quantidade de Entrada Media ${entradaM}`)
    console.log(`A quantidade de Entrada Complexa ${entradaC}`)
    console.log("")
    console.log(`A quantidade de Saida Simples ${saidaS}`)
    console.log(`A quantidade de Saida Media ${saidaM}`)
    console.log(`A quantidade de Saida Complexa ${saidaC}`)
    console.log("")
    console.log(`A quantidade de Consulta Simples ${consultaS}`)
    console.log(`A quantidade de Consulta Media ${consultaM}`)
    console.log(`A quantidade de Consulta Complexa ${consultaC}`)
    console.log("")
    console.log(`A quantidade de Arquivos Simples ${arquivoS}`)
    console.log(`A quantidade de Arquivos Medios ${arquivoM}`)
    console.log(`A quantidade de Arquivos Complexa ${arquivoC}`)
    console.log("")
    console.log(`A quantidade de Interface Simples ${interfaceS}`)
    console.log(`A quantidade de Interface Media ${interfaceM}`)
    console.log(`A quantidade de Interface Complexa ${interfaceC}`)

    

    














}