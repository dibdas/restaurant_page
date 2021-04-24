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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n  const root = document.getElementById('content');\n  root.innerHTML = ' ';\n  const element = document.createElement('div');\n\n  element.innerHTML = `\n    <div class=\"about-container text-center \">\n    <div class=\"center-card\">\n      <h1 class=\"heading text-white\">About project</h1>\n      <p class=\"text text-white\">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>\n    </div>\n  </div>\n  `;\n  root.appendChild(element);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactPage = () => {\n  const root = document.getElementById('content');\n  root.innerHTML = '';\n  const element = document.createElement('div');\n  element.innerHTML = `\n  <div class=\"contact text-center\">\n    <div class=\"center-card\">\n      <h1>Contact us.</h1>\n\n      <form action=\"#\">\n        <div class=\"form-group\">\n          <input type=\"text\" id=\"name\" class=\"form-control\"  placeholder=\"Name\">\n        </div><br/>\n\n        <div class=\"form-group\">\n          <input type=\"email\" id=\"email\" class=\"form-control\"  placeholder=\"email\">\n        </div><br/>\n\n        <div class=\"form-group\">\n          <textarea name=\"message\" class=\"form-control\" placeholder=\"Your message ...\"></textarea>\n        </div><br/>\n\n        <div>\n           <input type=\"submit\" class=\"btn menu-btn\" value=\"submit\">\n        </div>\n      </form>\n\n\n      <div class=\"contact-info\">\n        <p class=\"contact-message\">Reach out to us directly.</p>\n        <p class=\"contact-number\">+977 120-244-242</p>\n      </div>\n\n    </div>\n  </div>\n`;\n  root.appendChild(element);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n // eslint-disable-line\n\nconst home = () => {\n  const root = document.querySelector('body');\n  const navBar = document.createElement('div');\n  navBar.innerHTML = `\n  <header class=\"navbar\" style=\"background-color: black\">\n  <div class=\"logo-name\">\n  <a href=\"#\">Exim's Kitchen</a>\n  </div>\n  <div class=\"menu\">\n  <ul class=\"menu-list\">\n  <li class=\"menu-item\"><a href=\"#home\"class=\"nav-menu-link\">Home</a></li>\n  <li class=\"menu-item\"><a href=\"#menu\" class=\"nav-menu-link\" id=\"menu\">Menu</a></li>\n  <li class=\"menu-item\"><a href=\"#about\" class=\"nav-menu-link\" id=\"about\">About Us</a></li>\n  <li class=\"menu-item\"><a href=\"#contact\" class=\"nav-menu-link\" id=\"contact\" >Contact</a></li>\n  </ul>\n  </div>\n  </header>\n  `;\n  const content = document.getElementById('content');\n  root.insertBefore(navBar, content);\n  content.innerHTML = 'Welcome';\n  const menuTab = document.querySelector('#menu');\n  const contactTab = document.querySelector('#contact');\n  const aboutTab = document.querySelector('#about');\n  const tabs = [[menuTab, _menu__WEBPACK_IMPORTED_MODULE_2__.default], [contactTab, _contactPage__WEBPACK_IMPORTED_MODULE_0__.default], [aboutTab, _about__WEBPACK_IMPORTED_MODULE_1__.default]];\n  tabs.forEach((tab) => {\n    tab[0].addEventListener('click', () => {\n      tab[1]();\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n // eslint-disable-line\n\nconst menu = () => {\n  const root = document.getElementById('content');\n  root.innerHTML = '';\n  const element = document.createElement('div');\n  element.innerHTML = `\n    <div class=\"menu-container menu-center\">\n        <ul class=\"card-list\">\n          <li class=\"card\">\n            \n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Chicken Burger</h2>\n              <span class=\"price\">$8.2</span>\n            </div>\n          </li><br/>\n\n          <li class=\"card\">\n            \n\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Pizza Margherita</h2>\n              <span class=\"price\">$5</span>\n            </div>\n          </li><br/>\n\n          <li class=\"card\">\n           \n\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Hot dog</h2>\n              <span class=\"price\">$4.2</span>\n            </div>\n          </li><br/>\n\n          <li class=\"card\">\n            \n\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Mixed salad</h2>\n              <span class=\"price\">$10</span>\n            </div>\n          </li><br/>\n\n          <li class=\"card\">\n            \n\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Veggie Burger</h2>\n              <p class=\"card-subtitle\">includes green leafs</p>\n              <span class=\"price\">$8.2</span>\n            </div>\n          </li><br/>\n\n          <li class=\"card\">\n            \n\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Mixed salad</h2>\n              <span class=\"price\">$10</span>\n            </div>\n          </li><br/>\n        </ul>\n    </div>\n  \n    `;\n  root.appendChild(element);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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