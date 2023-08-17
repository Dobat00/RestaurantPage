const content = document.getElementById('content')
import createNav from "./navBar";

const createMenu = () =>{
    content.textContent = '';
    createNav();
    let div = document.createElement('div')
    div.classList.add('menu')
    
    let menu = document.createElement('h2')
    menu.textContent = 'prato generico 10 real'

    div.appendChild(menu)
    content.appendChild(div)
    return content
}

export default createMenu