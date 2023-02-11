// Verificar ano e sexo
function verificar() {
    // pegar o ano atual e dados do html
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    // verificar o preenchimento do ano e sexo
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        // variáveis sexo, idade, genero e imagens
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        //condições das variáveis acima
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src','bebe-h.png')
            } else if (idade >= 12 && idade < 21) {
                //jovem
                img.setAttribute('src',  'jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', 'h-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade >= 12 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'm-idosa.png')
            }
        }

        // alinhar e colocar resposta no site com imagem
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}