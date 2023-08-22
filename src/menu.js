const content = document.getElementById('content')
import createNav from "./navBar";

const createMenu = () =>{
    content.textContent = '';
    createNav();
    let div = document.createElement('div')
    div.classList.add('menu')
    
    div.appendChild(item1)
    div.appendChild(item2)
    div.appendChild(item3)
    content.appendChild(div)
    return content
}

//PRECOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

const menuItem = (path, nome, preco, desc) => {
    const item = document.createElement('div')
    item.classList.add('item')

    const img = document.createElement('img')
    img.classList.add('img-menu')
    img.src = path

    const itemImg = document.createElement('div')
    itemImg.classList.add('item-img')
    itemImg.appendChild(img)

    const itemName = document.createElement('div')
    itemName.classList.add('item-name')
    const nomeTexto = document.createElement('h1')
    nomeTexto.classList.add('nome')
    nomeTexto.textContent = nome
    nomeTexto.append(": ","R$", preco)
    itemName.appendChild(nomeTexto)
    
    const itemDesc = document.createElement('div')
    itemDesc.classList.add('item-desc')
    const descricao = document.createElement('p')
    descricao.textContent = desc
    itemDesc.appendChild(descricao)

    item.appendChild(itemImg)
    itemImg.appendChild(itemName)
    itemName.appendChild(itemDesc)
    
    return item
}

let item1 = menuItem("https://i.pinimg.com/originals/97/ff/09/97ff0963e56cc1f1def08f51e594f352.png", 'Pudim','15', 'pudim meia boca')
let item2 = menuItem('https://www.creativefabrica.com/wp-content/uploads/2021/02/14/Kawaii-Cute-Panecake-Food-Graphics-8601102-1.png', 'Pancake', '20', 'Panqueca com creme')
let item3 = menuItem('https://static.vecteezy.com/system/resources/previews/024/096/704/original/ice-cream-kawaii-fast-food-free-png.png', 'Sorvete', '7', 'Casquinha de sorvete')

export default createMenu
