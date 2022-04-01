
const listaImagens = document.querySelectorAll('.imagens')//Ok! Esta muscando todas as imagens
const setaVoltar = document.getElementById('seta-voltar')//ok! Buscando pelo ID da primeira seta
const setaAvancar = document.getElementById('seta-avancar')//Ok! Buscando ID da segunda seta
let imagemAtual = 0 //Varivel de inicialização
const listaSetas = document.querySelectorAll('.setas')//as duas setas
const setaInativa = document.querySelector('.seta-inativa')

function esconderImagens() {
    listaImagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagens() {
    listaImagens[imagemAtual].classList.add('mostrar')
      
    imagemAtual == 0 ? setaVoltar.style.opacity = '20%': setaVoltar.style.opacity = '100%'
        
    listaImagens.length -1 == imagemAtual ? setaAvancar.style.opacity = '20%' : setaAvancar.style.opacity = '100%'  
}

setaAvancar.addEventListener('click', function () {
  
    if (imagemAtual == listaImagens.length -1) return
    imagemAtual++//conta mais uma
    esconderImagens()
    mostrarImagens()
})

setaVoltar.addEventListener('click', function () {
    
    if (imagemAtual == 0) return
    imagemAtual--
    esconderImagens()
    mostrarImagens()
})
