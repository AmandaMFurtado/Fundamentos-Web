/*JS é case sensitive - reconhece letras maiusculas e minusculas para as palavras reservadas*/

/*Formas de adicionar uma variavel*/
/*var - escopo global, pode ser acessada por todo código */
/*let - escopo local, utilizado somente dentro escopo */
/*const - escopo global, o seu valor não se alter*/
/*Em JS as variaveis não sao tipadas*/

/* DOM pode ser acessado
tag: getElementByTagName()
id: getElementeById()
nome: getElementsByName()
classe: getElementsByClassName() 
seletor: querySelector()
*/

let nome = window.document.getElementById("nome") /*acessando o elemento no input com id nome */
let email = document.querySelector("#email") /* usa-se # por se tratar de um id, em classe utiliza o .*/
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let foto = document.querySelector("#foto")

/*aumentando o tamanho do input no js*/
nome.style.width = "50%"
email.style.width = "50%"
assunto.style.width = "50%"

/*JS linguagem orientada a funções - blocos de códigos*/
/*utiliza a palavra reservada function podendo ter ou não um nome */
function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) { /*value refere-se ao valor da variavel */
        txtNome.innerHTML = "Nome invalido" /* colocando valor dentro da div*/
        txtNome.style.color = "red" /* aplicando cor ao texto de resposta */
    } else {
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    /*validando o email com @ e . */
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email invalido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email valido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 150) {
        txtAssunto.innerHTML = "Texto muito grande, digite no maximo 150 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        /*Utiliza para que a mensagem so aparece caso ultrapasse 100 caracteres */
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    /*verificando a validade dos campos antes do envio do formulario */
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        /*alert - alerta que aparecera no site */
        alert("Formulario enviado com sucesso")
    } else {
        alert("Preencha o formulario corretamente antes de enviar. Todos os campos são obrigatorios !")
    }
}

function fotoZoom() {
    foto.style.display.width = "800px"
    foto.style.display.height = "600px"
}

function fotoNormal() {
    foto.style.display.width = "300px"
    foto.style.display.height = "500px"
}