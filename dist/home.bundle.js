"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeContent)
/* harmony export */ });
/* harmony import */ var _assets_Steak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Steak.jpg */ "./src/assets/Steak.jpg");
/* harmony import */ var _assets_Dishes_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Dishes.jpg */ "./src/assets/Dishes.jpg");



function homeContent() {
  let content = document.createElement('div');
  let w3Content = document.createElement('div');
  let steak = new Image();
  let dishes = new Image();
  let rightButton = document.createElement('button');
  let leftButton = document.createElement('button');

  rightButton.classList.add('w3-button', 'w3-black', 'w3-display-right');
  leftButton.classList.add('w3-button', 'w3-black', 'w3-display-left');
  w3Content.classList.add('w3-content', 'w3-display-container');
  rightButton.onclick = 'plusDivs(-1);';
  leftButton.onclick = 'plusDivs(1)';
  rightButton.innerHTML = '&#10095;';
  leftButton.innerHTML = '&#10094;';


  content.id = 'content';

  dishes.src = _assets_Dishes_jpg__WEBPACK_IMPORTED_MODULE_1__;
  steak.src = _assets_Steak_jpg__WEBPACK_IMPORTED_MODULE_0__;
  steak.alt = 'steak';
  dishes.alt = 'dishes';
  steak.classList.add('slides');
  dishes.classList.add('dishes');

  w3Content.appendChild(steak);
  w3Content.appendChild(dishes);
  w3Content.appendChild(leftButton);
  w3Content.appendChild(rightButton);

  content.appendChild(w3Content);

  return content;
}



/***/ }),

/***/ "./src/assets/Dishes.jpg":
/*!*******************************!*\
  !*** ./src/assets/Dishes.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c42fe0b8e9aba0eb532.jpg";

/***/ }),

/***/ "./src/assets/Steak.jpg":
/*!******************************!*\
  !*** ./src/assets/Steak.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1df2a6ba06e9b8666066.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0U7O0FBRTFCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLG1DQUFtQztBQUNuQyxrQ0FBa0M7OztBQUdsQzs7QUFFQSxlQUFlLCtDQUFNO0FBQ3JCLGNBQWMsOENBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RlYWsgZnJvbSAnLi9hc3NldHMvU3RlYWsuanBnJztcbmltcG9ydCBEaXNoZXMgZnJvbSAnLi9hc3NldHMvRGlzaGVzLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDb250ZW50KCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgdzNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBzdGVhayA9IG5ldyBJbWFnZSgpO1xuICBsZXQgZGlzaGVzID0gbmV3IEltYWdlKCk7XG4gIGxldCByaWdodEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsZXQgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3czLWJ1dHRvbicsICd3My1ibGFjaycsICd3My1kaXNwbGF5LXJpZ2h0Jyk7XG4gIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCgndzMtYnV0dG9uJywgJ3czLWJsYWNrJywgJ3czLWRpc3BsYXktbGVmdCcpO1xuICB3M0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndzMtY29udGVudCcsICd3My1kaXNwbGF5LWNvbnRhaW5lcicpO1xuICByaWdodEJ1dHRvbi5vbmNsaWNrID0gJ3BsdXNEaXZzKC0xKTsnO1xuICBsZWZ0QnV0dG9uLm9uY2xpY2sgPSAncGx1c0RpdnMoMSknO1xuICByaWdodEJ1dHRvbi5pbm5lckhUTUwgPSAnJiMxMDA5NTsnO1xuICBsZWZ0QnV0dG9uLmlubmVySFRNTCA9ICcmIzEwMDk0Oyc7XG5cblxuICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuXG4gIGRpc2hlcy5zcmMgPSBEaXNoZXM7XG4gIHN0ZWFrLnNyYyA9IFN0ZWFrO1xuICBzdGVhay5hbHQgPSAnc3RlYWsnO1xuICBkaXNoZXMuYWx0ID0gJ2Rpc2hlcyc7XG4gIHN0ZWFrLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcycpO1xuICBkaXNoZXMuY2xhc3NMaXN0LmFkZCgnZGlzaGVzJyk7XG5cbiAgdzNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrKTtcbiAgdzNDb250ZW50LmFwcGVuZENoaWxkKGRpc2hlcyk7XG4gIHczQ29udGVudC5hcHBlbmRDaGlsZChsZWZ0QnV0dG9uKTtcbiAgdzNDb250ZW50LmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHczQ29udGVudCk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==