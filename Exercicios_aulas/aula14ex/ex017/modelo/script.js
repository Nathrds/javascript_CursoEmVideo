// criando a função quando clicar [onclick]

function tabuada() {
    // variáveis do html para js
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //converter para número
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)

        //limpar a tela antes da próxima tabuada
        tab.innerHTML = ''

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }

        /*
        // repetição while
        let c = 1

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        */
    }
    
}