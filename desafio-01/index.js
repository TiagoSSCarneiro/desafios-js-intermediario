//Conectar a seta a uma imagem ok
// Consegui acessar uma imagem ok
//Fazer uma seta ficar tranparente enquanto usar a outra.

const listaImagens = document.querySelectorAll('.imagens')
console.log(listaImagens)
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')
let imagemAtual = 0 
const btnseta = document.querySelector('#seta-avancar')
const btnVoltar = document.querySelector ('#seta-voltar')
const listaSetas = document.querySelectorAll('.setas')
console.log (listaSetas)

//colocar o codigo de mostrar e pagar seta aqui


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
    console.log('03-Avc-escondeImg')
    console.log('04-Avc-mostraImg')
    esconderImagens()
    mostrarImagens()
})

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0) {
        return
    }
    imagemAtual--
    console.log('05-Vol-escondImg')
    console.log('06- Vol-mostraImg')
    esconderImagens()
    mostrarImagens()
})



//Desaparecer com a seta quando for a primeira imagem
//quando chegar na ultima imagem a o seta da direta sumir