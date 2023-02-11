// criando a função do botão

function contar() {
    // determinando as variáveis [var ou let]
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf') 
    let passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    // funcionalidade das variáveis
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        // variáveis transformando em número para contagem
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // estrutura de repetição para a contagem
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
