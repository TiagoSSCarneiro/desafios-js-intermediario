//Buscando o formulario
// BUSCAR CLASSES DE VALIDAÇÃO
// const validacao = document.getElementsByClassName('.valido')
// const campoInvalido = document.getElementsByClassName('.invalido')
const botao = document.getElementById('botao')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"")//remove tudo o que nao é digitado
    v=v.replace(/^(\d{2})(\d)/g,"($1)$2")//Coloca parenteses em volta dos dois primeiros digitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2")//Coloca hifen entre o quarto e o quinto digitos
    return v
}
function id ( el ) {
    return document.getElementById ( el )
}

window.onload = function(){
    id('telefone').onkeyup = function(){
        mascara(this, mtel)
    }
}

botao.addEventListener('click', (evento) => {
    evento.preventDefault()

    if (nome.value == '') {
        nome.classList.add('invalido')
        nome.nextElementSibling.classList.add('mostrar')
        //pega o proximo elemento

    }//else {
        // nome.classList.remove('mostrar')
     //}

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add('invalido')
        email.nextElementSibling.classList.add('mostrar')

    } 

    if (telefone.value.length == 14) { 
        //telefone.classList.remove('invalido') 
        
        

    } else {
        telefone.classList.add('invalido')
        telefone.nextElementSibling.classList.add('mostrar')
        console.log('dddddd')
    }

    if (mensagem.value == '') {
        mensagem.classList.add('invalido')
        mensagem.nextElementSibling.classList.add('mostrar')
    } 
})

nome.addEventListener('keyup', ()=>{
    nome.classList.remove('invalido')
    nome.nextElementSibling.classList.remove('mostrar')

})

email.addEventListener('keyup', ()=>{
    email.classList.remove('invalido')
    email.nextElementSibling.classList.remove('mostrar')
})

telefone.addEventListener('keyup', ()=>{
    telefone.classList.remove('invalido')
    telefone.nextElementSibling.classList.remove('mostrar')

})

mensagem.addEventListener('keyup', ()=>{
    mensagem.classList.remove('invalido')
    mensagem.nextElementSibling.classList.remove('mostrar')
})




