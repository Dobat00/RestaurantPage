import createHome from "./home"
const content = document.getElementById('content')

const website =() => {

    let entrada = document.createElement('h1')
    entrada.textContent = 'ISSO QUE APARECE QUANDO VOCE ABRE A MERDA DO SITE'

    content.appendChild(createNav());
    content.appendChild(entrada)

}

const createNav = () =>{
    const div = document.createElement('div')
    div.classList.add('navBar')

    const logo = document.createElement('h1')
    logo.classList.add('logo')
    logo.textContent = 'restaurante X'

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

    // menu.addEventListener('click', createMenu)
    home.addEventListener('click', (e)=>{
        createHome()
    })

    return div;
}

export default website