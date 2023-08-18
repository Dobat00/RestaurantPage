import createMenu from "./menu.js"
import createHome from "./home.js"
import createContact from "./contact.js"


const content = document.getElementById('content')


const createNav = () =>{
    let div = document.createElement('div')
    div.classList.add('navBar')
    
    const logo = document.createElement('h1')
    logo.classList.add('logo')
    logo.textContent = 'restaurante X'
    
    const home = document.createElement('button')
    home.classList.add('home')
    const menu = document.createElement('button')
    menu.classList.add('menu')
    const contact = document.createElement('button')
    contact.classList.add('contact')
    
    //adicionando os eventos aos botoes
    home.addEventListener('click', ()=>{
        createHome()
    })

    contact.addEventListener('click', ()=>{
        createContact()
    })

    menu.addEventListener('click', ()=>{
        createMenu()
    })

    menu.textContent = 'Menu'
    menu.href = ''
    contact.textContent = 'About'
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