import createHome from "./home.js";
import createNav from "./navBar.js";
import createMenu from "./menu.js";

let content = document.getElementById("content")

const firstLoad= () => {
    createHome()
}


firstLoad();

