"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeContent": () => (/* binding */ homeContent),
/* harmony export */   "showDivs": () => (/* binding */ showDivs)
/* harmony export */ });
/* harmony import */ var _assets_Steak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Steak.jpg */ "./src/assets/Steak.jpg");
/* harmony import */ var _assets_Dishes_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Dishes.jpg */ "./src/assets/Dishes.jpg");



var slideIndex = 1;
function homeContent() {
  let content = document.createElement('div');
  let slideshowContainer = document.createElement('div');
  let steak = new Image();
  let dishes = new Image();
  let rightButton = document.createElement('button');
  let leftButton = document.createElement('button');

  rightButton.classList.add('w3-button', 'w3-black', 'w3-display-right');
  leftButton.classList.add('w3-button', 'w3-black', 'w3-display-left');
  slideshowContainer.classList.add('slideshow');
  rightButton.innerHTML = '&#10095;';
  leftButton.innerHTML = '&#10094;';

  content.id = 'content';

  dishes.src = _assets_Dishes_jpg__WEBPACK_IMPORTED_MODULE_1__;
  steak.src = _assets_Steak_jpg__WEBPACK_IMPORTED_MODULE_0__;
  steak.alt = 'steak';
  dishes.alt = 'dishes';
  steak.classList.add('slides');
  dishes.classList.add('slides');
  steak.style.width = "60vw";
  steak.style.height = "70vh";
  dishes.style.width = "60vw";
  dishes.style.height = "70vh";
  slideshowContainer.appendChild(leftButton);
  slideshowContainer.appendChild(steak);
  slideshowContainer.appendChild(dishes);
  slideshowContainer.appendChild(rightButton);

  rightButton.addEventListener('click', () => {
    showDivs(slideIndex += 1);
  })
  leftButton.addEventListener('click', () => {
    showDivs(slideIndex += -1);
  })

  let welcome = document.createElement('h2');
  welcome.innerText = 'Welcome to the restaurant lorem ipsum this is some test text. Fine dining since 1962.';
  let about = document.createElement('p');
  about.innerText = 'This is a restaurant that sells food. We make fancy food in small portions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  let hours = document.createElement('div');
  hours.id = 'hours';
  let weekdays = document.createElement('div');
  let weekends = document.createElement('div');
  weekdays.innerText = 'Weekdays: 11am to 10pm';
  weekends.innerText = 'Weekends: 8am to 11pm';
  hours.appendChild(weekdays);
  hours.appendChild(weekends);

  content.appendChild(slideshowContainer);
  content.appendChild(welcome);
  content.appendChild(about);
  content.appendChild(hours);
  return content;
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('slides');
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNFOztBQUV6QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxrQ0FBa0M7O0FBRWxDOztBQUVBLGVBQWUsK0NBQU07QUFDckIsY0FBYyw4Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLGNBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RlYWsgZnJvbSAnLi9hc3NldHMvU3RlYWsuanBnJztcbmltcG9ydCBEaXNoZXMgZnJvbSAnLi9hc3NldHMvRGlzaGVzLmpwZyc7XG5cbnZhciBzbGlkZUluZGV4ID0gMTtcbmV4cG9ydCBmdW5jdGlvbiBob21lQ29udGVudCgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHNsaWRlc2hvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgc3RlYWsgPSBuZXcgSW1hZ2UoKTtcbiAgbGV0IGRpc2hlcyA9IG5ldyBJbWFnZSgpO1xuICBsZXQgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbGV0IGxlZnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICByaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd3My1idXR0b24nLCAndzMtYmxhY2snLCAndzMtZGlzcGxheS1yaWdodCcpO1xuICBsZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3czLWJ1dHRvbicsICd3My1ibGFjaycsICd3My1kaXNwbGF5LWxlZnQnKTtcbiAgc2xpZGVzaG93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlc2hvdycpO1xuICByaWdodEJ1dHRvbi5pbm5lckhUTUwgPSAnJiMxMDA5NTsnO1xuICBsZWZ0QnV0dG9uLmlubmVySFRNTCA9ICcmIzEwMDk0Oyc7XG5cbiAgY29udGVudC5pZCA9ICdjb250ZW50JztcblxuICBkaXNoZXMuc3JjID0gRGlzaGVzO1xuICBzdGVhay5zcmMgPSBTdGVhaztcbiAgc3RlYWsuYWx0ID0gJ3N0ZWFrJztcbiAgZGlzaGVzLmFsdCA9ICdkaXNoZXMnO1xuICBzdGVhay5jbGFzc0xpc3QuYWRkKCdzbGlkZXMnKTtcbiAgZGlzaGVzLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcycpO1xuICBzdGVhay5zdHlsZS53aWR0aCA9IFwiNjB2d1wiO1xuICBzdGVhay5zdHlsZS5oZWlnaHQgPSBcIjcwdmhcIjtcbiAgZGlzaGVzLnN0eWxlLndpZHRoID0gXCI2MHZ3XCI7XG4gIGRpc2hlcy5zdHlsZS5oZWlnaHQgPSBcIjcwdmhcIjtcbiAgc2xpZGVzaG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRCdXR0b24pO1xuICBzbGlkZXNob3dDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlYWspO1xuICBzbGlkZXNob3dDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzaGVzKTtcbiAgc2xpZGVzaG93Q29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uKTtcblxuICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93RGl2cyhzbGlkZUluZGV4ICs9IDEpO1xuICB9KVxuICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dEaXZzKHNsaWRlSW5kZXggKz0gLTEpO1xuICB9KVxuXG4gIGxldCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgd2VsY29tZS5pbm5lclRleHQgPSAnV2VsY29tZSB0byB0aGUgcmVzdGF1cmFudCBsb3JlbSBpcHN1bSB0aGlzIGlzIHNvbWUgdGVzdCB0ZXh0LiBGaW5lIGRpbmluZyBzaW5jZSAxOTYyLic7XG4gIGxldCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXQuaW5uZXJUZXh0ID0gJ1RoaXMgaXMgYSByZXN0YXVyYW50IHRoYXQgc2VsbHMgZm9vZC4gV2UgbWFrZSBmYW5jeSBmb29kIGluIHNtYWxsIHBvcnRpb25zLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJ1xuXG4gIGxldCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3Vycy5pZCA9ICdob3Vycyc7XG4gIGxldCB3ZWVrZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgd2Vla2VuZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2Vla2RheXMuaW5uZXJUZXh0ID0gJ1dlZWtkYXlzOiAxMWFtIHRvIDEwcG0nO1xuICB3ZWVrZW5kcy5pbm5lclRleHQgPSAnV2Vla2VuZHM6IDhhbSB0byAxMXBtJztcbiAgaG91cnMuYXBwZW5kQ2hpbGQod2Vla2RheXMpO1xuICBob3Vycy5hcHBlbmRDaGlsZCh3ZWVrZW5kcyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChzbGlkZXNob3dDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RpdnMobikge1xuICB2YXIgaTtcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXMnKTtcbiAgaWYgKG4gPiB4Lmxlbmd0aCkgeyBzbGlkZUluZGV4ID0gMSB9XG4gIGlmIChuIDwgMSkgeyBzbGlkZUluZGV4ID0geC5sZW5ndGggfVxuICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIHhbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIHhbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=