const content = document.getElementById('content')
import createNav from "./navBar"


const createHome = ()=>{
    //criacao da pagina home
    content.textContent= ''
    createNav();
    const home = document.createElement('div')
    home.classList.add('home-div')
    //criacao da nav e os conteudos da pagina junto com o append ao home
    let conteudo = homePage();
    home.appendChild(conteudo)
    content.appendChild(home)
    return content
}



const homePage = () =>{
    let div = document.createElement('div')
    div.classList.add('home-conteudo')
    const texto  = document.createElement('h1')
    texto.textContent = 'RESTAURANTE generico'

    div.appendChild(texto)
    return div
}


export default createHome