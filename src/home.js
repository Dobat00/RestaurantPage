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
    let img = document.createElement('img');
    img.src = "https://static.vecteezy.com/system/resources/previews/024/096/399/original/hamburger-kawaii-fast-food-free-png.png"
    img.classList.add('bacana-emote')
    let div = document.createElement('div')
    div.classList.add('bacana-img')

    div.appendChild(img)
    return div
}


export default createHome