/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n\r\n\r\nconst content = document.getElementById('content')\r\n\r\nconst createContact = () =>{\r\n    content.textContent = '';\r\n    (0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    let div = document.createElement('div')\r\n    div.classList.add('div-contact')\r\n\r\n    let texto = document.createElement('p')\r\n    texto.textContent = \"Site criado como parte do 'Odin Project', esse projeto em especifico, tem como o intuito aprimorar as habilidades do aluno em Webpack, estrutura de um projeto e trabalho com modulos\"\r\n\r\n    div.appendChild(texto)\r\n    content.appendChild(div)\r\n\r\n    return content\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\nconst content = document.getElementById('content')\r\n;\r\n\r\n\r\nconst createHome = ()=>{\r\n    //criacao da pagina home\r\n    content.textContent= ''\r\n    ;(0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const home = document.createElement('div')\r\n    home.classList.add('home-div')\r\n    //criacao da nav e os conteudos da pagina junto com o append ao home\r\n    let conteudo = homePage();\r\n    home.appendChild(conteudo)\r\n    content.appendChild(home)\r\n    return content\r\n}\r\n\r\n\r\n\r\nconst homePage = () =>{\r\n    let img = document.createElement('img');\r\n    img.src = \"https://static.vecteezy.com/system/resources/previews/024/096/399/original/hamburger-kawaii-fast-food-free-png.png\"\r\n    img.classList.add('bacana-emote')\r\n    let div = document.createElement('div')\r\n    div.classList.add('bacana-img')\r\n\r\n    div.appendChild(img)\r\n    return div\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _navBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar.js */ \"./src/navBar.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nlet content = document.getElementById(\"content\")\r\n\r\nconst firstLoad= () => {\r\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\r\n\r\n\r\nfirstLoad();\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\nconst content = document.getElementById('content')\r\n;\r\n\r\nconst createMenu = () =>{\r\n    content.textContent = '';\r\n    (0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    let div = document.createElement('div')\r\n    div.classList.add('menu')\r\n    \r\n    div.appendChild(item1)\r\n    div.appendChild(item2)\r\n    div.appendChild(item3)\r\n    content.appendChild(div)\r\n    return content\r\n}\r\n\r\n//PRECOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\r\n\r\nconst menuItem = (path, nome, preco, desc) => {\r\n    const item = document.createElement('div')\r\n    item.classList.add('item')\r\n\r\n    const img = document.createElement('img')\r\n    img.classList.add('img-menu')\r\n    img.src = path\r\n\r\n    const itemImg = document.createElement('div')\r\n    itemImg.classList.add('item-img')\r\n    itemImg.appendChild(img)\r\n\r\n    const itemName = document.createElement('div')\r\n    itemName.classList.add('item-name')\r\n    const nomeTexto = document.createElement('h1')\r\n    nomeTexto.classList.add('nome')\r\n    nomeTexto.textContent = nome\r\n    nomeTexto.append(\": \",\"R$\", preco)\r\n    itemName.appendChild(nomeTexto)\r\n    \r\n    const itemDesc = document.createElement('div')\r\n    itemDesc.classList.add('item-desc')\r\n    const descricao = document.createElement('p')\r\n    descricao.textContent = desc\r\n    itemDesc.appendChild(descricao)\r\n\r\n    item.appendChild(itemImg)\r\n    itemImg.appendChild(itemName)\r\n    itemName.appendChild(itemDesc)\r\n    \r\n    return item\r\n}\r\n\r\nlet item1 = menuItem(\"https://i.pinimg.com/originals/97/ff/09/97ff0963e56cc1f1def08f51e594f352.png\", 'Pudim','15', 'pudim meia boca')\r\nlet item2 = menuItem('https://www.creativefabrica.com/wp-content/uploads/2021/02/14/Kawaii-Cute-Panecake-Food-Graphics-8601102-1.png', 'Pancake', '20', 'Panqueca com creme')\r\nlet item3 = menuItem('https://static.vecteezy.com/system/resources/previews/024/096/704/original/ice-cream-kawaii-fast-food-free-png.png', 'Sorvete', '7', 'Casquinha de sorvete')\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content')\r\n\r\nconst createNav = () =>{\r\n    let div = document.createElement('div')\r\n    div.classList.add('navBar')\r\n    \r\n    const logo = document.createElement('img')\r\n    logo.classList.add('logo')\r\n    logo.src = \"https://img.freepik.com/free-icon/gummy_318-386410.jpg?w=2000\"\r\n    \r\n    const home = document.createElement('button')\r\n    home.classList.add('home')\r\n    const menu = document.createElement('button')\r\n    menu.classList.add('menu')\r\n    const contact = document.createElement('button')\r\n    contact.classList.add('contact')\r\n    \r\n    // adicionando os eventos aos botoes\r\n    home.addEventListener('click', ()=>{\r\n        ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    })\r\n\r\n    contact.addEventListener('click', ()=>{\r\n        ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    })\r\n\r\n    menu.addEventListener('click', ()=>{\r\n        ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    })\r\n\r\n    menu.textContent = 'Menu'\r\n    menu.href = ''\r\n    contact.textContent = 'About'\r\n    contact.href = ''\r\n    home.textContent = 'Home'\r\n    home.href= ''\r\n    \r\n\r\n    div.appendChild(logo)\r\n    div.appendChild(home)\r\n    div.appendChild(menu)\r\n    div.appendChild(contact)\r\n\r\n    content.appendChild(div)\r\n    return content;\r\n    }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);\n\n//# sourceURL=webpack://restaurantpage/./src/navBar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;