import createMenu from "./menu.js"
import createHome from "./home.js"


const content = document.getElementById('content')


const createNav = () =>{
    let div = document.createElement('div')
    div.classList.add('navBar')
    
    const logo = document.createElement('h1')
    logo.classList.add('logo')
    logo.textContent = 'restaurante X'
    
    const home = document.createElement('a')
    home.classList.add('home')
    const menu = document.createElement('a')
    menu.classList.add('menu')
    const contact = document.createElement('a')
    contact.classList.add('contact')
    
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

    content.appendChild(div)
    return content;
    }

export default createNav