
const createHome = ()=>{
    //criacao da pagina home
    const home = document.createElement('div')
    // const nome = document.createElement('h1')
    home.classList.add('home-div')
    
    //criacao da nav e os conteudos da pagina junto com o append ao home
    let conteudo = homePage();
    home.appendChild(conteudo)
    alert('oi')
    return home
}



const homePage = () =>{
    let div = document.createElement('div')
    div.classList.add('home-conteudo')
    const texto  = document.createElement('h1')
    texto.textContent = 'RESTAURANTE asdasd MERDA DO MUNDO'

    div.appendChild(texto)
    return div
}

export default createHome