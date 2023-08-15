const createHome = ()=>{
    //criacao da pagina home
    const home = document.createElement('div')
    // const nome = document.createElement('h1')
    // nome.textContent = 'Restaurante X'
    // home.appendChild(nome)
    home.classList.add('home-div')
    
    //criacao da nav junto com o append ao home
    let nav = createNav()
    home.appendChild(nav)

    return home
}

const createNav = () =>{
    const div = document.createElement('div')
    div.classList.add('navBar')

    const logo = document.createElement('h1')
    logo.textContent = 'Restaurante X'

    const home = document.createElement('a')
    const menu = document.createElement('a')
    const contact = document.createElement('a')

    menu.textContent = 'Menu'
    menu.href = ''
    contact.textContent = 'Contact me'
    contact.href = ''
    home.textContent = 'Home'
    home.href= ''

    div.appendChild(logo)
    div.appendChild(home)
    div.appendChild(menu)
    div.appendChild(contact)

    return div;
}



export default createHome