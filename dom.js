function mudarCor() {
    let body = document.body
    body.style.backgroundColor = 'blue'
}

function adicionarTitulo() {
    let h1 = document.createElement('h1')
    let body = document.body
    h1.innerHTML = 'Olá Javascript'
    
    body.appendChild(h1)
}

function removerSubtitulo() {
    let body = document.body
    let h2 = document.getElementsByClassName(sub-titulos) [0]
    body.removeChild(h2)
}

let botoes = document.getElementsByTagName("button")
let botao1 = document.getElementById('btn-mudar-cor')
let botao2 = document.getElementById('btn-adicionar-titulo')
let botao3 = document.getElementById('btn-remover-subtitulo')
let subTitulos = document.getElementsByClassName('sub-titulos')
console.log(subTitulos)

botao1.onclick = mudarCor
botao2.onclick = adicionarTitulo
botao3.onclick = removerSubtitulo