import createNav from "./navBar";

const content = document.getElementById('content')

const createContact = () =>{
    content.textContent = '';
    createNav();

    let div = document.createElement('div')
    div.classList.add('div-contact')

    let texto = document.createElement('p')
    texto.textContent = "Site criado como parte do 'Odin Project', esse projeto em especifico, tem como o intuito aprimorar as habilidades do aluno em Webpack, estrutura de um projeto e trabalho com modulos"

    div.appendChild(texto)
    content.appendChild(div)

    return content
}

export default createContact;