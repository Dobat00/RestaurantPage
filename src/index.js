import createHome from "./home.js";
import createNav from "./navBar.js";
import createMenu from "./menu.js";
import firstLoad from "./firstLoad.js";


let content = document.getElementById("content")

firstLoad();

let home = document.querySelector('.home')
home.addEventListener('click', (e)=>{
    console.log(content.children[1])
    content.children[1].remove()
})

let menu = document.querySelector('.menu')
menu.addEventListener('click', (e)=>{
    createMenu();
})

