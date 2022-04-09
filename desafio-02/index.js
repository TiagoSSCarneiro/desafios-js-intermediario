//clicar na seta fazer o texto aparecer
//quando clicar na prozima pergunta fecha a outra
const itensPerguntasERespostas = document.querySelectorAll('.item')
console.log(itensPerguntasERespostas)

itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener('click',function(){

        const mostraResposta = item.classList.contains('mostrar')
        itensPerguntasERespostas.forEach(function(item){
            item.classList.remove('mostrar')
        })
        if(!mostraResposta) {
            item.classList.add('mostrar')
        }else {
            item.classList.remove('mostrar')
        }
    })
    
})