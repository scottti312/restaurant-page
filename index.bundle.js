"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-fg: #C0AB68;\n  --secondary-fg: #907B28;\n}\n\nbody {\n  margin: 0;\n}\n\n\n#header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  border-bottom: 3px solid var(--main-fg);\n  gap: 20px;\n}\n\n#header button {\n  font-size: 20px;\n  border: 0;\n  color: white;\n  background-color: black;\n  display: inline-block;\n  position:relative;\n  height: 1.5em;\n  cursor: pointer;\n  font-family: \"Palatino Linotype\", \"Book Antiqua\", \"Palatino\", \"serif\";\n}\n\n/* Animation thanks to 30secondsofcode\n * https://www.30secondsofcode.org/css/s/hover-underline-animation\n */\n#header button:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--main-fg);\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n\n#header button:hover:after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n\n#header #logo {\n  cursor: pointer;\n}\n\n#container {\n  position: relative;\n  min-height:100vh;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 10rem;\n}\n\n#content img {\n  float: left;\n  width: 1200px;\n  height: 700px;\n  object-fit:cover;\n}\n\n.slideshow {\n  display: flex;\n  justify-content: center;\n  padding: 40px 0px 60px 0px;\n}\n\n.slideshow button {\n  width: 50px;\n  background-color: transparent;\n  border: 0;\n  transition-duration: 0.3s;\n}\n\n.slideshow button:hover {\n  background-color: black;\n  color: white;\n}\n\n#content h2 {\n  text-align: center;\n  font-style: italic;\n  font-weight: 400;\n  font-size: 22px;\n  font-family: \"Palatino Linotype\", \"Book Antiqua\", \"Palatino\", \"serif\";\n  color: var(--secondary-fg);\n  width: 50vw;\n  height: 80px;\n  border-bottom: 1px solid black;\n}\n\n#content p {\n  font-family: \"Palatino Linotype\", \"Book Antiqua\", \"Palatino\", \"serif\";\n  text-align: center;\n  width: 50vw;\n  line-height: 1.6em;\n  font-size: 15px;\n  letter-spacing: 0.4px;\n  padding: 40px;\n  margin: 0;\n}\n\n#hours {\n  font-size: 18px;\n  font-family: proxima-nova;\n  letter-spacing: 1px;\n  padding: 40px 0px 20px 0px;\n  border-top: 1px solid black;\n  width: 30vw;\n  text-align: center;\n  line-height: 2em;\n}\n\n/*\n * ========== Menu Section ==========\n */\n\n.food-time button {\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n  height: 40px;\n  width: 160px;\n  margin: 40px 0px 40px 0px;\n  font-family: \"Palatino Linotype\",\"Book Antiqua\",\"Palatino\",\"serif\";\n}\n\n#dinner, #lunch, #dessert {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.section {\n  padding: 50px;\n}\n\n.item {\n  font-family: 'Brevia';\n  font-weight: 100;\n  padding-bottom: 8px;\n}\n\n.description {\n  font-family: \"Palatino Linotype\",\"Book Antiqua\",\"Palatino\",\"serif\";\n}\n\n/*\n * ========== Contact Section ==========\n */\n\n#contact {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding: 20px 50px 20px 50px;\n  line-height: 1.6em;\n  margin-top: 20vh;\n  font-family: \"Palatino Linotype\",\"Book Antiqua\",\"Palatino\",\"serif\";\n}\n\n#intro {\n  padding-bottom: 10px;\n  font-size: 1.2em;\n  border-bottom: 1px solid var(--main-fg);\n  margin-bottom: 30px;\n}\n\n#footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n\n  color: white;\n  font-size: 18px;\n  margin-top: 30px;\n  position: absolute;\n  bottom: 0;\n  height: 8rem;\n  width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,SAAS;AACX;;;AAGA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,uCAAuC;EACvC,SAAS;AACX;;AAEA;EACE,eAAe;EACf,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;EACjB,aAAa;EACb,eAAe;EACf,qEAAqE;AACvE;;AAEA;;EAEE;AACF;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,oBAAoB;EACpB,WAAW;EACX,SAAS;EACT,OAAO;EACP,gCAAgC;EAChC,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;EACE,oBAAoB;EACpB,6BAA6B;AAC/B;;;AAGA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,qEAAqE;EACrE,0BAA0B;EAC1B,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,qEAAqE;EACrE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,mBAAmB;EACnB,0BAA0B;EAC1B,2BAA2B;EAC3B,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE;;AAEF;EACE,SAAS;EACT,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,kEAAkE;AACpE;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kEAAkE;AACpE;;AAEA;;EAEE;;AAEF;EACE,4CAA4C;EAC5C,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;EAChB,kEAAkE;AACpE;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,uCAAuC;EACvC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;;EAEvB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,WAAW;AACb","sourcesContent":[":root {\n  --main-fg: #C0AB68;\n  --secondary-fg: #907B28;\n}\n\nbody {\n  margin: 0;\n}\n\n\n#header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  border-bottom: 3px solid var(--main-fg);\n  gap: 20px;\n}\n\n#header button {\n  font-size: 20px;\n  border: 0;\n  color: white;\n  background-color: black;\n  display: inline-block;\n  position:relative;\n  height: 1.5em;\n  cursor: pointer;\n  font-family: \"Palatino Linotype\", \"Book Antiqua\", \"Palatino\", \"serif\";\n}\n\n/* Animation thanks to 30secondsofcode\n * https://www.30secondsofcode.org/css/s/hover-underline-animation\n */\n#header button:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--main-fg);\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n\n#header button:hover:after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n\n#header #logo {\n  cursor: pointer;\n}\n\n#container {\n  position: relative;\n  min-height:100vh;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 10rem;\n}\n\n#content img {\n  float: left;\n  width: 1200px;\n  height: 700px;\n  object-fit:cover;\n}\n\n.slideshow {\n  display: flex;\n  justify-content: center;\n  padding: 40px 0px 60px 0px;\n}\n\n.slideshow button {\n  width: 50px;\n  background-color: transparent;\n  border: 0;\n  transition-duration: 0.3s;\n}\n\n.slideshow button:hover {\n  background-color: black;\n  color: white;\n}\n\n#content h2 {\n  text-align: center;\n  font-style: italic;\n  font-weight: 400;\n  font-size: 22px;\n  font-family: \"Palatino Linotype\", \"Book Antiqua\", \"Palatino\", \"serif\";\n  color: var(--secondary-fg);\n  width: 50vw;\n  height: 80px;\n  border-bottom: 1px solid black;\n}\n\n#content p {\n  font-family: \"Palatino Linotype\", \"Book Antiqua\", \"Palatino\", \"serif\";\n  text-align: center;\n  width: 50vw;\n  line-height: 1.6em;\n  font-size: 15px;\n  letter-spacing: 0.4px;\n  padding: 40px;\n  margin: 0;\n}\n\n#hours {\n  font-size: 18px;\n  font-family: proxima-nova;\n  letter-spacing: 1px;\n  padding: 40px 0px 20px 0px;\n  border-top: 1px solid black;\n  width: 30vw;\n  text-align: center;\n  line-height: 2em;\n}\n\n/*\n * ========== Menu Section ==========\n */\n\n.food-time button {\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n  height: 40px;\n  width: 160px;\n  margin: 40px 0px 40px 0px;\n  font-family: \"Palatino Linotype\",\"Book Antiqua\",\"Palatino\",\"serif\";\n}\n\n#dinner, #lunch, #dessert {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.section {\n  padding: 50px;\n}\n\n.item {\n  font-family: 'Brevia';\n  font-weight: 100;\n  padding-bottom: 8px;\n}\n\n.description {\n  font-family: \"Palatino Linotype\",\"Book Antiqua\",\"Palatino\",\"serif\";\n}\n\n/*\n * ========== Contact Section ==========\n */\n\n#contact {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding: 20px 50px 20px 50px;\n  line-height: 1.6em;\n  margin-top: 20vh;\n  font-family: \"Palatino Linotype\",\"Book Antiqua\",\"Palatino\",\"serif\";\n}\n\n#intro {\n  padding-bottom: 10px;\n  font-size: 1.2em;\n  border-bottom: 1px solid var(--main-fg);\n  margin-bottom: 30px;\n}\n\n#footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n\n  color: white;\n  font-size: 18px;\n  margin-top: 30px;\n  position: absolute;\n  bottom: 0;\n  height: 8rem;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactContent)
/* harmony export */ });
function contactContent() {
  let content = document.createElement('div');
  content.id = ('content');
  let container = document.createElement('div');
  let intro = document.createElement('div');
  let phone = document.createElement('div');
  let email = document.createElement('div');
  let address = document.createElement('div');
  container.id = 'contact';

  intro.innerText = 'Questions? Contact us.';
  intro.id = 'intro';
  phone.innerText = '+1 (123) 456-7890';
  email.innerText = 'restaurant@example.com';
  address.innerText = '12345 Molly Ln, Seattle, 67890';
  container.append(intro, phone, email, address);
  content.append(container);
  return content;
}


/***/ }),

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_Logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Logo.png */ "./src/assets/Logo.png");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






let header = document.createElement('div');
let menu = document.createElement('button');
let contact = document.createElement('button');
let container = document.createElement('div');
const restLogo = new Image();
restLogo.src = _assets_Logo_png__WEBPACK_IMPORTED_MODULE_1__;
restLogo.id = 'logo';
restLogo.alt = 'grand boulevard'

header.id = 'header';
menu.classList.add('menu');
contact.classList.add('contact');
container.id = 'container';

menu.textContent = 'Menu';
contact.textContent = 'Contact';

header.appendChild(menu);
header.appendChild(restLogo);
header.appendChild(contact);
let footer = document.createElement('div');
footer.id = 'footer';
footer.innerText = 'Made by Scott Ti. 2022'

container.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.homeContent)());
container.appendChild(footer);

document.body.appendChild(header);
document.body.appendChild(container);

(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.showDivs)(1);

menu.addEventListener('click', () => {
  container.removeChild(document.querySelector('#content'));
  footer.before((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
})

restLogo.addEventListener('click', () => {
  container.removeChild(document.querySelector('#content'));
  footer.before((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.homeContent)());
  (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.showDivs)(1);
})

contact.addEventListener('click', () => {
  container.removeChild(document.querySelector('#content'));
  footer.before((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
})


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuContent)
/* harmony export */ });
function menuContent() {
  let content = document.createElement('div');
  content.id = 'content';
  let foodTime = document.createElement('div');
  let dinner = document.createElement('button');
  let lunch = document.createElement('button');
  let dessert = document.createElement('button');
  foodTime.classList.add('food-time');
  dinner.innerHTML = 'DINNER';
  lunch.innerHTML = 'LUNCH';
  dessert.innerHTML = 'DESSERT';
  foodTime.appendChild(dinner);
  foodTime.appendChild(lunch);
  foodTime.appendChild(dessert);
  content.appendChild(foodTime);

  let dinnerMenu = dinnerContent();
  let lunchMenu = lunchContent();
  let dessertMenu = dessertContent();
  content.appendChild(dinnerMenu);
  dinner.style.backgroundColor = '#C0AB68';

  dinner.addEventListener('click', () => {
    if (!document.getElementById('dinner')) {
      content.removeChild(content.lastChild);
      content.appendChild(dinnerMenu);
      dinner.style.backgroundColor = '#C0AB68';
      lunch.style.backgroundColor = 'transparent';
      dessert.style.backgroundColor = 'transparent';
    }
  });
  lunch.addEventListener('click', () => {
    if (!document.getElementById('lunch')) {
      content.removeChild(content.lastChild);
      content.appendChild(lunchMenu);
      dinner.style.backgroundColor = 'transparent';
      lunch.style.backgroundColor = '#C0AB68';
      dessert.style.backgroundColor = 'transparent';
    }
  });
  dessert.addEventListener('click', () => {
    if (!document.getElementById('dessert')) {
      content.removeChild(content.lastChild);
      content.appendChild(dessertMenu);
      dinner.style.backgroundColor = 'transparent';
      lunch.style.backgroundColor = 'transparent';
      dessert.style.backgroundColor = '#C0AB68';
    }
  });
  return content;
}

function dinnerContent() {
  let dinnerContent = document.createElement('div');
  dinnerContent.id = 'dinner';
  let firstSection = document.createElement('div');
  let firstItem = document.createElement('div');
  let firstDesc = document.createElement('div');
  firstItem.innerText = 'Spaghetti and Meatballs'
  firstItem.classList.add('item');
  firstDesc.innerText = 'with marinara sauce and fresh basil';
  firstDesc.classList.add('description');
  firstSection.appendChild(firstItem);
  firstSection.appendChild(firstDesc);
  firstSection.classList.add('section');
  let secondSection = document.createElement('div');
  let secondItem = document.createElement('div');
  let secondDesc = document.createElement('div');
  secondItem.innerText = 'Ribeye Steak';
  secondItem.classList.add('item');
  secondDesc.innerText = '28 day dry aged';
  secondDesc.classList.add('description');
  secondSection.appendChild(secondItem);
  secondSection.appendChild(secondDesc);
  secondSection.classList.add('section');
  let thirdSection = document.createElement('div');
  let thirdItem = document.createElement('div');
  let thirdDesc = document.createElement('div');
  thirdItem.innerText = 'Roasted Duck';
  thirdItem.classList.add('item');
  thirdDesc.innerText = 'with green garlic, tatsoi and berries'
  thirdDesc.classList.add('description');
  thirdSection.appendChild(thirdItem);
  thirdSection.appendChild(thirdDesc);
  thirdSection.classList.add('section');
  let fourthSection = document.createElement('div');
  let fourthItem = document.createElement('div');
  let fourthDesc = document.createElement('div');
  fourthItem.innerText = 'Salmon';
  fourthItem.classList.add('item');
  fourthDesc.classList.add('description');
  fourthSection.classList.add('section');
  fourthDesc.innerText = 'with parsnips and ginger';
  fourthSection.appendChild(fourthItem);
  fourthSection.appendChild(fourthDesc);

  dinnerContent.appendChild(firstSection);
  dinnerContent.appendChild(secondSection);
  dinnerContent.appendChild(thirdSection);
  dinnerContent.appendChild(fourthSection);
  return dinnerContent;
}


function lunchContent() {
  let lunchContent = document.createElement('div');
  lunchContent.id = 'lunch';
  let firstSection = document.createElement('div');
  let firstItem = document.createElement('div');
  let firstDesc = document.createElement('div');
  firstItem.classList.add('item');
  firstDesc.classList.add('description');
  firstSection.classList.add('section');
  firstItem.innerText = 'Panini';
  firstDesc.innerText = 'Served with salad';
  firstSection.appendChild(firstItem);
  firstSection.appendChild(firstDesc);
  let secondSection = document.createElement('div');
  let secondItem = document.createElement('div');
  let secondDesc = document.createElement('div');
  secondItem.classList.add('item');
  secondDesc.classList.add('description');
  secondSection.classList.add('section');
  secondItem.innerText = 'Penn Cove Clams and Mussels';
  secondDesc.innerText = 'with garlic, parsley, a touch of cream and garlic toast';
  secondSection.appendChild(secondItem);
  secondSection.appendChild(secondDesc);
  let thirdSection = document.createElement('div');
  let thirdItem = document.createElement('div');
  let thirdDesc = document.createElement('div');
  thirdItem.classList.add('item');
  thirdDesc.classList.add('description');
  thirdSection.classList.add('section');
  thirdItem.innerText = 'Eggplant Zurita';
  thirdDesc.innerText = 'with caviar, oyster and nori';
  thirdSection.appendChild(thirdItem);
  thirdSection.appendChild(thirdDesc);

  lunchContent.appendChild(firstSection);
  lunchContent.appendChild(secondSection);
  lunchContent.appendChild(thirdSection);

  return lunchContent;
}

function dessertContent() {
  let dessertContent = document.createElement('div');
  dessertContent.id = 'dessert';
  let firstSection = document.createElement('div');
  let firstItem = document.createElement('div');
  let firstDesc = document.createElement('div');
  firstItem.classList.add('item');
  firstDesc.classList.add('description');
  firstSection.classList.add('section');
  firstItem.innerText = 'Smoked Cacao';
  firstDesc.innerText = 'with nougatine and ice cream';
  firstSection.appendChild(firstItem);
  firstSection.appendChild(firstDesc);
  let secondSection = document.createElement('div');
  let secondItem = document.createElement('div');
  let secondDesc = document.createElement('div');
  secondItem.classList.add('item');
  secondDesc.classList.add('description');
  secondSection.classList.add('section');
  secondItem.innerText = 'Dark Chocolate Sorbet';
  secondDesc.innerText = 'with koji and spruce tips';
  secondSection.appendChild(secondItem);
  secondSection.appendChild(secondDesc);
  let thirdSection = document.createElement('div');
  let thirdItem = document.createElement('div');
  let thirdDesc = document.createElement('div');
  thirdItem.classList.add('item');
  thirdDesc.classList.add('description');
  thirdSection.classList.add('section');
  thirdItem.innerText = 'Rhubarb';
  thirdDesc.innerText = 'with hazelnut and strawberry';
  thirdSection.appendChild(thirdItem);
  thirdSection.appendChild(thirdDesc);
  let fourthSection = document.createElement('div');
  let fourthItem = document.createElement('div');
  let fourthDesc = document.createElement('div');
  fourthItem.classList.add('item');
  fourthDesc.classList.add('description');
  fourthSection.classList.add('section');
  fourthItem.innerText = 'Snickers';
  fourthDesc.innerText = 'wrapper included';
  fourthSection.appendChild(fourthItem);
  fourthSection.appendChild(fourthDesc);

  dessertContent.appendChild(firstSection);
  dessertContent.appendChild(secondSection);
  dessertContent.appendChild(thirdSection);
  dessertContent.appendChild(fourthSection);

  return dessertContent;
}


/***/ }),

/***/ "./src/assets/Dishes.jpg":
/*!*******************************!*\
  !*** ./src/assets/Dishes.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c42fe0b8e9aba0eb532.jpg";

/***/ }),

/***/ "./src/assets/Logo.png":
/*!*****************************!*\
  !*** ./src/assets/Logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6772bf996b453e8187c.png";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW1haW4tZmc6ICNDMEFCNjg7XFxuICAtLXNlY29uZGFyeS1mZzogIzkwN0IyODtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLW1haW4tZmcpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGFsYXRpbm8gTGlub3R5cGVcXFwiLCBcXFwiQm9vayBBbnRpcXVhXFxcIiwgXFxcIlBhbGF0aW5vXFxcIiwgXFxcInNlcmlmXFxcIjtcXG59XFxuXFxuLyogQW5pbWF0aW9uIHRoYW5rcyB0byAzMHNlY29uZHNvZmNvZGVcXG4gKiBodHRwczovL3d3dy4zMHNlY29uZHNvZmNvZGUub3JnL2Nzcy9zL2hvdmVyLXVuZGVybGluZS1hbmltYXRpb25cXG4gKi9cXG4jaGVhZGVyIGJ1dHRvbjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZnKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcXG59XFxuXFxuI2hlYWRlciBidXR0b246aG92ZXI6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG59XFxuXFxuXFxuI2hlYWRlciAjbG9nbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDoxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XFxufVxcblxcbiNjb250ZW50IGltZyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IDcwMHB4O1xcbiAgb2JqZWN0LWZpdDpjb3ZlcjtcXG59XFxuXFxuLnNsaWRlc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0MHB4IDBweCA2MHB4IDBweDtcXG59XFxuXFxuLnNsaWRlc2hvdyBidXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcbi5zbGlkZXNob3cgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudCBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYWxhdGlubyBMaW5vdHlwZVxcXCIsIFxcXCJCb29rIEFudGlxdWFcXFwiLCBcXFwiUGFsYXRpbm9cXFwiLCBcXFwic2VyaWZcXFwiO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mZyk7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2NvbnRlbnQgcCB7XFxuICBmb250LWZhbWlseTogXFxcIlBhbGF0aW5vIExpbm90eXBlXFxcIiwgXFxcIkJvb2sgQW50aXF1YVxcXCIsIFxcXCJQYWxhdGlub1xcXCIsIFxcXCJzZXJpZlxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNTB2dztcXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNob3VycyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHBhZGRpbmc6IDQwcHggMHB4IDIwcHggMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDMwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMmVtO1xcbn1cXG5cXG4vKlxcbiAqID09PT09PT09PT0gTWVudSBTZWN0aW9uID09PT09PT09PT1cXG4gKi9cXG5cXG4uZm9vZC10aW1lIGJ1dHRvbiB7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIG1hcmdpbjogNDBweCAwcHggNDBweCAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlBhbGF0aW5vIExpbm90eXBlXFxcIixcXFwiQm9vayBBbnRpcXVhXFxcIixcXFwiUGFsYXRpbm9cXFwiLFxcXCJzZXJpZlxcXCI7XFxufVxcblxcbiNkaW5uZXIsICNsdW5jaCwgI2Rlc3NlcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5pdGVtIHtcXG4gIGZvbnQtZmFtaWx5OiAnQnJldmlhJztcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYWxhdGlubyBMaW5vdHlwZVxcXCIsXFxcIkJvb2sgQW50aXF1YVxcXCIsXFxcIlBhbGF0aW5vXFxcIixcXFwic2VyaWZcXFwiO1xcbn1cXG5cXG4vKlxcbiAqID09PT09PT09PT0gQ29udGFjdCBTZWN0aW9uID09PT09PT09PT1cXG4gKi9cXG5cXG4jY29udGFjdCB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDUwcHg7XFxuICBsaW5lLWhlaWdodDogMS42ZW07XFxuICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYWxhdGlubyBMaW5vdHlwZVxcXCIsXFxcIkJvb2sgQW50aXF1YVxcXCIsXFxcIlBhbGF0aW5vXFxcIixcXFwic2VyaWZcXFwiO1xcbn1cXG5cXG4jaW50cm8ge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1haW4tZmcpO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztBQUNYOzs7QUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZixxRUFBcUU7QUFDdkU7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsU0FBUztFQUNULE9BQU87RUFDUCxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7OztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFFQUFxRTtFQUNyRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtFQUFrRTtBQUNwRTs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtFQUFrRTtBQUNwRTs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDRDQUE0QztFQUM1Qyw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW1haW4tZmc6ICNDMEFCNjg7XFxuICAtLXNlY29uZGFyeS1mZzogIzkwN0IyODtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLW1haW4tZmcpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGFsYXRpbm8gTGlub3R5cGVcXFwiLCBcXFwiQm9vayBBbnRpcXVhXFxcIiwgXFxcIlBhbGF0aW5vXFxcIiwgXFxcInNlcmlmXFxcIjtcXG59XFxuXFxuLyogQW5pbWF0aW9uIHRoYW5rcyB0byAzMHNlY29uZHNvZmNvZGVcXG4gKiBodHRwczovL3d3dy4zMHNlY29uZHNvZmNvZGUub3JnL2Nzcy9zL2hvdmVyLXVuZGVybGluZS1hbmltYXRpb25cXG4gKi9cXG4jaGVhZGVyIGJ1dHRvbjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZnKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcXG59XFxuXFxuI2hlYWRlciBidXR0b246aG92ZXI6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG59XFxuXFxuXFxuI2hlYWRlciAjbG9nbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDoxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XFxufVxcblxcbiNjb250ZW50IGltZyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IDcwMHB4O1xcbiAgb2JqZWN0LWZpdDpjb3ZlcjtcXG59XFxuXFxuLnNsaWRlc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0MHB4IDBweCA2MHB4IDBweDtcXG59XFxuXFxuLnNsaWRlc2hvdyBidXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcbi5zbGlkZXNob3cgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudCBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYWxhdGlubyBMaW5vdHlwZVxcXCIsIFxcXCJCb29rIEFudGlxdWFcXFwiLCBcXFwiUGFsYXRpbm9cXFwiLCBcXFwic2VyaWZcXFwiO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mZyk7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2NvbnRlbnQgcCB7XFxuICBmb250LWZhbWlseTogXFxcIlBhbGF0aW5vIExpbm90eXBlXFxcIiwgXFxcIkJvb2sgQW50aXF1YVxcXCIsIFxcXCJQYWxhdGlub1xcXCIsIFxcXCJzZXJpZlxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNTB2dztcXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNob3VycyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHBhZGRpbmc6IDQwcHggMHB4IDIwcHggMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDMwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMmVtO1xcbn1cXG5cXG4vKlxcbiAqID09PT09PT09PT0gTWVudSBTZWN0aW9uID09PT09PT09PT1cXG4gKi9cXG5cXG4uZm9vZC10aW1lIGJ1dHRvbiB7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIG1hcmdpbjogNDBweCAwcHggNDBweCAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlBhbGF0aW5vIExpbm90eXBlXFxcIixcXFwiQm9vayBBbnRpcXVhXFxcIixcXFwiUGFsYXRpbm9cXFwiLFxcXCJzZXJpZlxcXCI7XFxufVxcblxcbiNkaW5uZXIsICNsdW5jaCwgI2Rlc3NlcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5pdGVtIHtcXG4gIGZvbnQtZmFtaWx5OiAnQnJldmlhJztcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYWxhdGlubyBMaW5vdHlwZVxcXCIsXFxcIkJvb2sgQW50aXF1YVxcXCIsXFxcIlBhbGF0aW5vXFxcIixcXFwic2VyaWZcXFwiO1xcbn1cXG5cXG4vKlxcbiAqID09PT09PT09PT0gQ29udGFjdCBTZWN0aW9uID09PT09PT09PT1cXG4gKi9cXG5cXG4jY29udGFjdCB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDUwcHg7XFxuICBsaW5lLWhlaWdodDogMS42ZW07XFxuICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYWxhdGlubyBMaW5vdHlwZVxcXCIsXFxcIkJvb2sgQW50aXF1YVxcXCIsXFxcIlBhbGF0aW5vXFxcIixcXFwic2VyaWZcXFwiO1xcbn1cXG5cXG4jaW50cm8ge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1haW4tZmcpO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdENvbnRlbnQoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuaWQgPSAoJ2NvbnRlbnQnKTtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuaWQgPSAnY29udGFjdCc7XG5cbiAgaW50cm8uaW5uZXJUZXh0ID0gJ1F1ZXN0aW9ucz8gQ29udGFjdCB1cy4nO1xuICBpbnRyby5pZCA9ICdpbnRybyc7XG4gIHBob25lLmlubmVyVGV4dCA9ICcrMSAoMTIzKSA0NTYtNzg5MCc7XG4gIGVtYWlsLmlubmVyVGV4dCA9ICdyZXN0YXVyYW50QGV4YW1wbGUuY29tJztcbiAgYWRkcmVzcy5pbm5lclRleHQgPSAnMTIzNDUgTW9sbHkgTG4sIFNlYXR0bGUsIDY3ODkwJztcbiAgY29udGFpbmVyLmFwcGVuZChpbnRybywgcGhvbmUsIGVtYWlsLCBhZGRyZXNzKTtcbiAgY29udGVudC5hcHBlbmQoY29udGFpbmVyKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgU3RlYWsgZnJvbSAnLi9hc3NldHMvU3RlYWsuanBnJztcbmltcG9ydCBEaXNoZXMgZnJvbSAnLi9hc3NldHMvRGlzaGVzLmpwZyc7XG5cbnZhciBzbGlkZUluZGV4ID0gMTtcbmV4cG9ydCBmdW5jdGlvbiBob21lQ29udGVudCgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHNsaWRlc2hvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgc3RlYWsgPSBuZXcgSW1hZ2UoKTtcbiAgbGV0IGRpc2hlcyA9IG5ldyBJbWFnZSgpO1xuICBsZXQgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbGV0IGxlZnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICByaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd3My1idXR0b24nLCAndzMtYmxhY2snLCAndzMtZGlzcGxheS1yaWdodCcpO1xuICBsZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3czLWJ1dHRvbicsICd3My1ibGFjaycsICd3My1kaXNwbGF5LWxlZnQnKTtcbiAgc2xpZGVzaG93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlc2hvdycpO1xuICByaWdodEJ1dHRvbi5pbm5lckhUTUwgPSAnJiMxMDA5NTsnO1xuICBsZWZ0QnV0dG9uLmlubmVySFRNTCA9ICcmIzEwMDk0Oyc7XG5cbiAgY29udGVudC5pZCA9ICdjb250ZW50JztcblxuICBkaXNoZXMuc3JjID0gRGlzaGVzO1xuICBzdGVhay5zcmMgPSBTdGVhaztcbiAgc3RlYWsuYWx0ID0gJ3N0ZWFrJztcbiAgZGlzaGVzLmFsdCA9ICdkaXNoZXMnO1xuICBzdGVhay5jbGFzc0xpc3QuYWRkKCdzbGlkZXMnKTtcbiAgZGlzaGVzLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcycpO1xuICBzdGVhay5zdHlsZS53aWR0aCA9IFwiNjB2d1wiO1xuICBzdGVhay5zdHlsZS5oZWlnaHQgPSBcIjcwdmhcIjtcbiAgZGlzaGVzLnN0eWxlLndpZHRoID0gXCI2MHZ3XCI7XG4gIGRpc2hlcy5zdHlsZS5oZWlnaHQgPSBcIjcwdmhcIjtcbiAgc2xpZGVzaG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRCdXR0b24pO1xuICBzbGlkZXNob3dDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlYWspO1xuICBzbGlkZXNob3dDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzaGVzKTtcbiAgc2xpZGVzaG93Q29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uKTtcblxuICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93RGl2cyhzbGlkZUluZGV4ICs9IDEpO1xuICB9KVxuICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dEaXZzKHNsaWRlSW5kZXggKz0gLTEpO1xuICB9KVxuXG4gIGxldCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgd2VsY29tZS5pbm5lclRleHQgPSAnV2VsY29tZSB0byB0aGUgcmVzdGF1cmFudCBsb3JlbSBpcHN1bSB0aGlzIGlzIHNvbWUgdGVzdCB0ZXh0LiBGaW5lIGRpbmluZyBzaW5jZSAxOTYyLic7XG4gIGxldCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXQuaW5uZXJUZXh0ID0gJ1RoaXMgaXMgYSByZXN0YXVyYW50IHRoYXQgc2VsbHMgZm9vZC4gV2UgbWFrZSBmYW5jeSBmb29kIGluIHNtYWxsIHBvcnRpb25zLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJ1xuXG4gIGxldCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3Vycy5pZCA9ICdob3Vycyc7XG4gIGxldCB3ZWVrZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgd2Vla2VuZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2Vla2RheXMuaW5uZXJUZXh0ID0gJ1dlZWtkYXlzOiAxMWFtIHRvIDEwcG0nO1xuICB3ZWVrZW5kcy5pbm5lclRleHQgPSAnV2Vla2VuZHM6IDhhbSB0byAxMXBtJztcbiAgaG91cnMuYXBwZW5kQ2hpbGQod2Vla2RheXMpO1xuICBob3Vycy5hcHBlbmRDaGlsZCh3ZWVrZW5kcyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChzbGlkZXNob3dDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RpdnMobikge1xuICB2YXIgaTtcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXMnKTtcbiAgaWYgKG4gPiB4Lmxlbmd0aCkgeyBzbGlkZUluZGV4ID0gMSB9XG4gIGlmIChuIDwgMSkgeyBzbGlkZUluZGV4ID0geC5sZW5ndGggfVxuICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIHhbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIHhbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vYXNzZXRzL0xvZ28ucG5nJztcbmltcG9ydCB7IGhvbWVDb250ZW50LCBzaG93RGl2cyB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudUNvbnRlbnQgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0Q29udGVudCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xubGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHJlc3RMb2dvID0gbmV3IEltYWdlKCk7XG5yZXN0TG9nby5zcmMgPSBMb2dvO1xucmVzdExvZ28uaWQgPSAnbG9nbyc7XG5yZXN0TG9nby5hbHQgPSAnZ3JhbmQgYm91bGV2YXJkJ1xuXG5oZWFkZXIuaWQgPSAnaGVhZGVyJztcbm1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5jb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcblxubWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbmNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbmhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcbmhlYWRlci5hcHBlbmRDaGlsZChyZXN0TG9nbyk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5sZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb290ZXIuaWQgPSAnZm9vdGVyJztcbmZvb3Rlci5pbm5lclRleHQgPSAnTWFkZSBieSBTY290dCBUaS4gMjAyMidcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KCkpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuc2hvd0RpdnMoMSk7XG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnRhaW5lci5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpKTtcbiAgZm9vdGVyLmJlZm9yZShtZW51Q29udGVudCgpKTtcbn0pXG5cbnJlc3RMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb250YWluZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSk7XG4gIGZvb3Rlci5iZWZvcmUoaG9tZUNvbnRlbnQoKSk7XG4gIHNob3dEaXZzKDEpO1xufSlcblxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykpO1xuICBmb290ZXIuYmVmb3JlKGNvbnRhY3RDb250ZW50KCkpO1xufSlcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVDb250ZW50KCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuICBsZXQgZm9vZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGRpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsZXQgbHVuY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbGV0IGRlc3NlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZm9vZFRpbWUuY2xhc3NMaXN0LmFkZCgnZm9vZC10aW1lJyk7XG4gIGRpbm5lci5pbm5lckhUTUwgPSAnRElOTkVSJztcbiAgbHVuY2guaW5uZXJIVE1MID0gJ0xVTkNIJztcbiAgZGVzc2VydC5pbm5lckhUTUwgPSAnREVTU0VSVCc7XG4gIGZvb2RUaW1lLmFwcGVuZENoaWxkKGRpbm5lcik7XG4gIGZvb2RUaW1lLmFwcGVuZENoaWxkKGx1bmNoKTtcbiAgZm9vZFRpbWUuYXBwZW5kQ2hpbGQoZGVzc2VydCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZFRpbWUpO1xuXG4gIGxldCBkaW5uZXJNZW51ID0gZGlubmVyQ29udGVudCgpO1xuICBsZXQgbHVuY2hNZW51ID0gbHVuY2hDb250ZW50KCk7XG4gIGxldCBkZXNzZXJ0TWVudSA9IGRlc3NlcnRDb250ZW50KCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlubmVyTWVudSk7XG4gIGRpbm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MwQUI2OCc7XG5cbiAgZGlubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpbm5lcicpKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlubmVyTWVudSk7XG4gICAgICBkaW5uZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNDMEFCNjgnO1xuICAgICAgbHVuY2guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgIGRlc3NlcnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB9XG4gIH0pO1xuICBsdW5jaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsdW5jaCcpKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobHVuY2hNZW51KTtcbiAgICAgIGRpbm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgbHVuY2guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNDMEFCNjgnO1xuICAgICAgZGVzc2VydC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH1cbiAgfSk7XG4gIGRlc3NlcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzc2VydCcpKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydE1lbnUpO1xuICAgICAgZGlubmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICBsdW5jaC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgZGVzc2VydC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MwQUI2OCc7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGRpbm5lckNvbnRlbnQoKSB7XG4gIGxldCBkaW5uZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpbm5lckNvbnRlbnQuaWQgPSAnZGlubmVyJztcbiAgbGV0IGZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgZmlyc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBmaXJzdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmlyc3RJdGVtLmlubmVyVGV4dCA9ICdTcGFnaGV0dGkgYW5kIE1lYXRiYWxscydcbiAgZmlyc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgZmlyc3REZXNjLmlubmVyVGV4dCA9ICd3aXRoIG1hcmluYXJhIHNhdWNlIGFuZCBmcmVzaCBiYXNpbCc7XG4gIGZpcnN0RGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICBmaXJzdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZmlyc3RJdGVtKTtcbiAgZmlyc3RTZWN0aW9uLmFwcGVuZENoaWxkKGZpcnN0RGVzYyk7XG4gIGZpcnN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG4gIGxldCBzZWNvbmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBzZWNvbmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBzZWNvbmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY29uZEl0ZW0uaW5uZXJUZXh0ID0gJ1JpYmV5ZSBTdGVhayc7XG4gIHNlY29uZEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICBzZWNvbmREZXNjLmlubmVyVGV4dCA9ICcyOCBkYXkgZHJ5IGFnZWQnO1xuICBzZWNvbmREZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gIHNlY29uZFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2Vjb25kSXRlbSk7XG4gIHNlY29uZFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2Vjb25kRGVzYyk7XG4gIHNlY29uZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbicpO1xuICBsZXQgdGhpcmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCB0aGlyZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHRoaXJkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGlyZEl0ZW0uaW5uZXJUZXh0ID0gJ1JvYXN0ZWQgRHVjayc7XG4gIHRoaXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gIHRoaXJkRGVzYy5pbm5lclRleHQgPSAnd2l0aCBncmVlbiBnYXJsaWMsIHRhdHNvaSBhbmQgYmVycmllcydcbiAgdGhpcmREZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gIHRoaXJkU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlyZEl0ZW0pO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcmREZXNjKTtcbiAgdGhpcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgbGV0IGZvdXJ0aFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGZvdXJ0aEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGZvdXJ0aERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm91cnRoSXRlbS5pbm5lclRleHQgPSAnU2FsbW9uJztcbiAgZm91cnRoSXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gIGZvdXJ0aERlc2MuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgZm91cnRoU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG4gIGZvdXJ0aERlc2MuaW5uZXJUZXh0ID0gJ3dpdGggcGFyc25pcHMgYW5kIGdpbmdlcic7XG4gIGZvdXJ0aFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm91cnRoSXRlbSk7XG4gIGZvdXJ0aFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm91cnRoRGVzYyk7XG5cbiAgZGlubmVyQ29udGVudC5hcHBlbmRDaGlsZChmaXJzdFNlY3Rpb24pO1xuICBkaW5uZXJDb250ZW50LmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb24pO1xuICBkaW5uZXJDb250ZW50LmFwcGVuZENoaWxkKHRoaXJkU2VjdGlvbik7XG4gIGRpbm5lckNvbnRlbnQuYXBwZW5kQ2hpbGQoZm91cnRoU2VjdGlvbik7XG4gIHJldHVybiBkaW5uZXJDb250ZW50O1xufVxuXG5cbmZ1bmN0aW9uIGx1bmNoQ29udGVudCgpIHtcbiAgbGV0IGx1bmNoQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsdW5jaENvbnRlbnQuaWQgPSAnbHVuY2gnO1xuICBsZXQgZmlyc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBmaXJzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGZpcnN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaXJzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICBmaXJzdERlc2MuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgZmlyc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgZmlyc3RJdGVtLmlubmVyVGV4dCA9ICdQYW5pbmknO1xuICBmaXJzdERlc2MuaW5uZXJUZXh0ID0gJ1NlcnZlZCB3aXRoIHNhbGFkJztcbiAgZmlyc3RTZWN0aW9uLmFwcGVuZENoaWxkKGZpcnN0SXRlbSk7XG4gIGZpcnN0U2VjdGlvbi5hcHBlbmRDaGlsZChmaXJzdERlc2MpO1xuICBsZXQgc2Vjb25kU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgc2Vjb25kSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgc2Vjb25kRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWNvbmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgc2Vjb25kRGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICBzZWNvbmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgc2Vjb25kSXRlbS5pbm5lclRleHQgPSAnUGVubiBDb3ZlIENsYW1zIGFuZCBNdXNzZWxzJztcbiAgc2Vjb25kRGVzYy5pbm5lclRleHQgPSAnd2l0aCBnYXJsaWMsIHBhcnNsZXksIGEgdG91Y2ggb2YgY3JlYW0gYW5kIGdhcmxpYyB0b2FzdCc7XG4gIHNlY29uZFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2Vjb25kSXRlbSk7XG4gIHNlY29uZFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2Vjb25kRGVzYyk7XG4gIGxldCB0aGlyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHRoaXJkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgdGhpcmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRoaXJkSXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gIHRoaXJkRGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICB0aGlyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbicpO1xuICB0aGlyZEl0ZW0uaW5uZXJUZXh0ID0gJ0VnZ3BsYW50IFp1cml0YSc7XG4gIHRoaXJkRGVzYy5pbm5lclRleHQgPSAnd2l0aCBjYXZpYXIsIG95c3RlciBhbmQgbm9yaSc7XG4gIHRoaXJkU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlyZEl0ZW0pO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcmREZXNjKTtcblxuICBsdW5jaENvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3RTZWN0aW9uKTtcbiAgbHVuY2hDb250ZW50LmFwcGVuZENoaWxkKHNlY29uZFNlY3Rpb24pO1xuICBsdW5jaENvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcmRTZWN0aW9uKTtcblxuICByZXR1cm4gbHVuY2hDb250ZW50O1xufVxuXG5mdW5jdGlvbiBkZXNzZXJ0Q29udGVudCgpIHtcbiAgbGV0IGRlc3NlcnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc3NlcnRDb250ZW50LmlkID0gJ2Rlc3NlcnQnO1xuICBsZXQgZmlyc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBmaXJzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGZpcnN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaXJzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICBmaXJzdERlc2MuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgZmlyc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgZmlyc3RJdGVtLmlubmVyVGV4dCA9ICdTbW9rZWQgQ2FjYW8nO1xuICBmaXJzdERlc2MuaW5uZXJUZXh0ID0gJ3dpdGggbm91Z2F0aW5lIGFuZCBpY2UgY3JlYW0nO1xuICBmaXJzdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZmlyc3RJdGVtKTtcbiAgZmlyc3RTZWN0aW9uLmFwcGVuZENoaWxkKGZpcnN0RGVzYyk7XG4gIGxldCBzZWNvbmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBzZWNvbmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBzZWNvbmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY29uZEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICBzZWNvbmREZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gIHNlY29uZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbicpO1xuICBzZWNvbmRJdGVtLmlubmVyVGV4dCA9ICdEYXJrIENob2NvbGF0ZSBTb3JiZXQnO1xuICBzZWNvbmREZXNjLmlubmVyVGV4dCA9ICd3aXRoIGtvamkgYW5kIHNwcnVjZSB0aXBzJztcbiAgc2Vjb25kU2VjdGlvbi5hcHBlbmRDaGlsZChzZWNvbmRJdGVtKTtcbiAgc2Vjb25kU2VjdGlvbi5hcHBlbmRDaGlsZChzZWNvbmREZXNjKTtcbiAgbGV0IHRoaXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgdGhpcmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCB0aGlyZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGhpcmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgdGhpcmREZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gIHRoaXJkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG4gIHRoaXJkSXRlbS5pbm5lclRleHQgPSAnUmh1YmFyYic7XG4gIHRoaXJkRGVzYy5pbm5lclRleHQgPSAnd2l0aCBoYXplbG51dCBhbmQgc3RyYXdiZXJyeSc7XG4gIHRoaXJkU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlyZEl0ZW0pO1xuICB0aGlyZFNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcmREZXNjKTtcbiAgbGV0IGZvdXJ0aFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGZvdXJ0aEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGZvdXJ0aERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm91cnRoSXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gIGZvdXJ0aERlc2MuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgZm91cnRoU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG4gIGZvdXJ0aEl0ZW0uaW5uZXJUZXh0ID0gJ1NuaWNrZXJzJztcbiAgZm91cnRoRGVzYy5pbm5lclRleHQgPSAnd3JhcHBlciBpbmNsdWRlZCc7XG4gIGZvdXJ0aFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm91cnRoSXRlbSk7XG4gIGZvdXJ0aFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm91cnRoRGVzYyk7XG5cbiAgZGVzc2VydENvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3RTZWN0aW9uKTtcbiAgZGVzc2VydENvbnRlbnQuYXBwZW5kQ2hpbGQoc2Vjb25kU2VjdGlvbik7XG4gIGRlc3NlcnRDb250ZW50LmFwcGVuZENoaWxkKHRoaXJkU2VjdGlvbik7XG4gIGRlc3NlcnRDb250ZW50LmFwcGVuZENoaWxkKGZvdXJ0aFNlY3Rpb24pO1xuXG4gIHJldHVybiBkZXNzZXJ0Q29udGVudDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==