//Conectar a seta a uma imagem
// Consegui acessar uma imagem

const listaImagens = document.querySelectorAll('.imagens')
console.log(listaImagens)
//Buscar todas a imagens com a classe imagens
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')
let imagemAtual = 0

function esconderImagens () {
    listaImagens.forEach(imagem =>{
        imagem.classList.remove('mostrar')
        
    })
    console.log('01-f esconder')
}

function mostrarImagens () {
    listaImagens[imagemAtual].classList.add ('mostrar')
    console.log ('02-f mostrar')
}



setaAvancar.addEventListener('click', function(){
    const totalDeImagens = listaImagens.length -1
    if (imagemAtual === totalDeImagens) {
        return
    }
    imagemAtual++
    esconderImagens(console.log('03-Avc-escondeImg'))
    mostrarImagens(console.log('04-Avc-mostraImg'))
})

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0) {
        return
    }

    imagemAtual--

    esconderImagens(console.log('05-Vol-escondImg'))
    mostrarImagens(console.log('06- Vol-mostraImg'))
})











