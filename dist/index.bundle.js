"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Amatic_SC/AmaticSC-Regular.ttf */ "./src/Amatic_SC/AmaticSC-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Amatic_SC/AmaticSC-Bold.ttf */ "./src/Amatic_SC/AmaticSC-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/pizza-pepperoni-944464-pxhere.com.jpg */ "./src/Images/pizza-pepperoni-944464-pxhere.com.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Amatic-SC';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype'),
      url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

* {
	box-sizing: border-box;
    margin: 0;
    font-family: 'Amatic-SC', sans-serif;
}

a:link {
    text-decoration: none;
}

body {
    width: 100vw;
    height: auto;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    background-repeat: no-repeat;
}

header {
    position: fixed;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    height: 50px;
    width: 100%;
    padding: 10px;
}

.nav-button {
    background-color: transparent;
    background-repeat: no-repeat;
    color: white;
    border: none;
    overflow: hidden;
    outline: none;
    font-size: 24px;
    cursor: pointer;
    margin-right: 20px;
}

.main-container {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-text {
    font-size: 120px;
    color: white;
    text-align: center;
}

.btn-main-menu {
    width: 200px;
    line-height: 60px;
    background-color: black;
    color: white;
    font-size: 24px;
    border: none;
    cursor: pointer;
    text-align: center;
}

.open-text {
    background-color: black;
    color: white;
    font-size: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 20px;
}

.menu-page {
    width: 100%;
    height: auto;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
}

.menu-title {
    font-size: 60px;
    color: white;
    margin-top: 100px;
    margin-bottom: 30px;
}

.menu-container {
    border: 0.5px solid white;
}

.menu-buttons {
    background-color: black;
    color: white;
    width: 225px;
    height: 60px;
    font-size: 25px;
    border: none;
    cursor: pointer;
}

.menu-buttons.PIZZA {
    background-color: red;
}

.menu-buttons:active {
    background-color: red;
}

.menu-buttons:hover {
    background-color: red;
}

.menues {
    width: 100%;
    height: auto;
}

.menu-item {
    width: 100%;
    height: auto;
    padding: 0px 10px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-dish {
    width: 100%;
    height: 100%;
    font-size: 25px;
    & .dish-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0px;
    }
    & span {
        width: 60px;
        height: 40px;
        background-color: grey;
        color: white;
        border-radius: 5px;
        text-align: center;
        margin: 10px 0px;
    }
    & hr {
        margin-top: 20px;
        margin-bottom: 10px;
    }
}

.about-page {
    width: 100%;
    height: auto;
    background-color: rgba(139,95,91,255);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-title {
    font-size: 60px;
    color: white;
    margin-top: 100px;
    margin-bottom: 30px;
}

.about-content {
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
}

.about-text {
    color: white;
    text-wrap: wrap;
    font-size: 20px;
    margin-bottom: 15px;
}

.opening-hours {
    color: white;
    margin-top: 20px;
    margin-bottom: 15px;
}

.hours-container {
    display: flex;
    flex-direction: row;
    & div {
        margin-right: 100px;
    }
    & p {
        color: white;
        font-size: 20px;
        margin-bottom: 15px;
    }
}

.contact-page {
    width: 100%;
    height: 100vh;
    background-color: rgba(108,122,129,255);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-title {
    font-size: 60px;
    color: white;
    margin-top: 100px;
    margin-bottom: 30px;
}

.contact-content {
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    & p {
        color: white;
        text-wrap: wrap;
        font-size: 20px;
        margin-bottom: 15px;
    }
    & .contact-p3 {
        font-size: 30px;
    }
}

.contact-form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    & input {
        height: 45px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }
    & button {
        height: 45px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
    }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Amatic-SC';\n    src: url('./Amatic_SC/AmaticSC-Regular.ttf') format('truetype'),\n      url('./Amatic_SC/AmaticSC-Bold.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n\tbox-sizing: border-box;\n    margin: 0;\n    font-family: 'Amatic-SC', sans-serif;\n}\n\na:link {\n    text-decoration: none;\n}\n\nbody {\n    width: 100vw;\n    height: auto;\n    background-image: url(\"./Images/pizza-pepperoni-944464-pxhere.com.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\nheader {\n    position: fixed;\n    display: flex;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.6);\n    height: 50px;\n    width: 100%;\n    padding: 10px;\n}\n\n.nav-button {\n    background-color: transparent;\n    background-repeat: no-repeat;\n    color: white;\n    border: none;\n    overflow: hidden;\n    outline: none;\n    font-size: 24px;\n    cursor: pointer;\n    margin-right: 20px;\n}\n\n.main-container {\n    width: 100%;\n    height: 80vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-text {\n    font-size: 120px;\n    color: white;\n    text-align: center;\n}\n\n.btn-main-menu {\n    width: 200px;\n    line-height: 60px;\n    background-color: black;\n    color: white;\n    font-size: 24px;\n    border: none;\n    cursor: pointer;\n    text-align: center;\n}\n\n.open-text {\n    background-color: black;\n    color: white;\n    font-size: 30px;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin: 20px;\n}\n\n.menu-page {\n    width: 100%;\n    height: auto;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 15px;\n}\n\n.menu-title {\n    font-size: 60px;\n    color: white;\n    margin-top: 100px;\n    margin-bottom: 30px;\n}\n\n.menu-container {\n    border: 0.5px solid white;\n}\n\n.menu-buttons {\n    background-color: black;\n    color: white;\n    width: 225px;\n    height: 60px;\n    font-size: 25px;\n    border: none;\n    cursor: pointer;\n}\n\n.menu-buttons.PIZZA {\n    background-color: red;\n}\n\n.menu-buttons:active {\n    background-color: red;\n}\n\n.menu-buttons:hover {\n    background-color: red;\n}\n\n.menues {\n    width: 100%;\n    height: auto;\n}\n\n.menu-item {\n    width: 100%;\n    height: auto;\n    padding: 0px 10px;\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.menu-dish {\n    width: 100%;\n    height: 100%;\n    font-size: 25px;\n    & .dish-info {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        margin: 10px 0px;\n    }\n    & span {\n        width: 60px;\n        height: 40px;\n        background-color: grey;\n        color: white;\n        border-radius: 5px;\n        text-align: center;\n        margin: 10px 0px;\n    }\n    & hr {\n        margin-top: 20px;\n        margin-bottom: 10px;\n    }\n}\n\n.about-page {\n    width: 100%;\n    height: auto;\n    background-color: rgba(139,95,91,255);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.about-title {\n    font-size: 60px;\n    color: white;\n    margin-top: 100px;\n    margin-bottom: 30px;\n}\n\n.about-content {\n    width: 50%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n}\n\n.about-text {\n    color: white;\n    text-wrap: wrap;\n    font-size: 20px;\n    margin-bottom: 15px;\n}\n\n.opening-hours {\n    color: white;\n    margin-top: 20px;\n    margin-bottom: 15px;\n}\n\n.hours-container {\n    display: flex;\n    flex-direction: row;\n    & div {\n        margin-right: 100px;\n    }\n    & p {\n        color: white;\n        font-size: 20px;\n        margin-bottom: 15px;\n    }\n}\n\n.contact-page {\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(108,122,129,255);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.contact-title {\n    font-size: 60px;\n    color: white;\n    margin-top: 100px;\n    margin-bottom: 30px;\n}\n\n.contact-content {\n    width: 50%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    & p {\n        color: white;\n        text-wrap: wrap;\n        font-size: 20px;\n        margin-bottom: 15px;\n    }\n    & .contact-p3 {\n        font-size: 30px;\n    }\n}\n\n.contact-form {\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    & input {\n        height: 45px;\n        margin-top: 10px;\n        margin-bottom: 10px;\n        font-size: 20px;\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n    & button {\n        height: 45px;\n        margin-top: 10px;\n        margin-bottom: 10px;\n        font-size: 20px;\n    }\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Images_onepage_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/onepage_restaurant.jpg */ "./src/Images/onepage_restaurant.jpg");


const aboutContent = () => {
    const about_page = document.createElement('div');
    about_page.classList.add('about-page');
    about_page.id = 'about-page';

    const about_title = document.createElement('h1');
    about_title.textContent = 'ABOUT';
    about_title.classList.add('about-title');
    about_page.appendChild(about_title);

    const about_content = document.createElement('div');
    about_content.classList.add('about-content');

    const p1 = document.createElement('p');
    p1.classList.add('about-text');

    p1.textContent = 
        `The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
    
    const p2 = document.createElement('p');
    p2.classList.add('about-text');

    p2.textContent = `The Chef? Mr. Italiano himself`;

    const p3 = document.createElement('p');
    p3.classList.add('about-text');

    p3.textContent = `We are proud of our interiors.`;

    const restaurant_img = document.createElement('img');
    restaurant_img.src = _Images_onepage_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;

    about_content.appendChild(p1);
    about_content.appendChild(p2);
    about_content.appendChild(p3);
    about_content.appendChild(restaurant_img);


    const opening_hours = document.createElement('h1');
    opening_hours.classList.add('opening-hours');
    opening_hours.textContent = 'Opening Hours';
    about_content.appendChild(opening_hours);

    const hours_div = document.createElement('div');
    hours_div.classList.add('hours-container');

    const mon_thur_div = document.createElement('div');
    mon_thur_div.classList.add('hours-content');
    const mon_p = document.createElement('p');
    mon_p.textContent = 'Mon & tue closed';
    const wed_p = document.createElement('p');
    wed_p.textContent = 'Wednesday 10.00 - 24.00';
    const thur_p = document.createElement('p');
    thur_p.textContent = 'Thursday 10:00 - 24:00';

    mon_thur_div.appendChild(mon_p);
    mon_thur_div.appendChild(wed_p);
    mon_thur_div.appendChild(thur_p);
    hours_div.appendChild(mon_thur_div);
    
    const fri_sun_div = document.createElement('div');
    fri_sun_div.classList.add('hours-content');
    const fri_p = document.createElement('p');
    fri_p.textContent = 'Friday 10:00 - 12:00';
    const sat_p = document.createElement('p');
    sat_p.textContent = 'Saturday 10:00 - 23:00';
    const sun_p = document.createElement('p');
    sun_p.textContent = 'Sunday Closed';

    fri_sun_div.appendChild(fri_p);
    fri_sun_div.appendChild(sat_p);
    fri_sun_div.appendChild(sun_p);
    hours_div.appendChild(fri_sun_div);
    
    about_content.appendChild(hours_div);

    about_page.appendChild(about_content);

    document.body.appendChild(about_page);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutContent);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const contactContent = () => {
    const contact_page = document.createElement('div');
    contact_page.classList.add('contact-page');
    contact_page.id = 'contact-page';

    const contact_title = document.createElement('h1');
    contact_title.classList.add('contact-title');
    contact_title.textContent = 'CONTACT';

    contact_page.appendChild(contact_title);


    const contact_content = document.createElement('div');
    contact_content.classList.add('contact-content');

    const contact_p1 = document.createElement('p');
    contact_p1.textContent = 'Find us at some address at some place or call us at 05050515-122330';
    const contact_p2 = document.createElement('p');
    contact_p2.textContent = 'We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.';
    const contact_p3 = document.createElement('p');
    contact_p3.textContent = 'Reserve a table, ask for today\'s special or just send us a message:'
    contact_p3.classList.add('contact-p3');
    contact_content.appendChild(contact_p1);
    contact_content.appendChild(contact_p2);
    contact_content.appendChild(contact_p3);
    

    const contact_form = document.createElement('form');
    contact_form.classList.add('contact-form');

    const form_name = document.createElement('input');
    form_name.type = 'text';
    form_name.placeholder = 'NAME';

    const form_people = document.createElement('input');
    form_people.type = 'number';
    form_people.placeholder = 'How many people?';

    const form_date = document.createElement('input');
    form_date.type = 'datetime-local';
    form_date.placeholder = 'Date and time';
    form_date.value = '2020-11-16T20:00';

    const form_note = document.createElement('input');
    form_note.type = 'text';
    form_note.placeholder = 'Message \ Special requirements';

    const form_submit = document.createElement('button');
    form_submit.type = 'submit';
    form_submit.textContent = 'SEND MESSAGE';

    contact_form.appendChild(form_name);
    contact_form.appendChild(form_people);
    contact_form.appendChild(form_date);
    contact_form.appendChild(form_note);
    contact_form.appendChild(form_submit);
    contact_content.appendChild(contact_form);

    contact_page.appendChild(contact_content);
    document.body.appendChild(contact_page);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContent);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_page.js */ "./src/main_page.js");
/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_page.js */ "./src/menu_page.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







(0,_main_page_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_menu_page_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();



/***/ }),

/***/ "./src/main_page.js":
/*!**************************!*\
  !*** ./src/main_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const mainContent = () => {
    const main = document.createElement('div');
    main.classList.add('main-container');

    const main_text = document.createElement('span');
    const main_menu = document.createElement('a');

    main_text.setAttribute('style', 'white-space: pre;');
    main_text.textContent = 'Italian\r\n';
    main_text.textContent += 'Pizza';
    main_text.classList.add('main-text');
    main.appendChild(main_text);

    main_menu.textContent = 'LET ME SEE THE MENU';
    main_menu.classList.add('btn-main-menu');
    main_menu.href = '#menu-page';
    main.appendChild(main_menu);

    const open_text = document.createElement('span');
    open_text.textContent = 'Open from 10am - 12pm';
    open_text.classList.add('open-text');

    document.body.appendChild(main);
    document.body.appendChild(open_text);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainContent);


/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const menuContent = () => {
    const menu_page = document.createElement('div');
    menu_page.classList.add('menu-page');
    menu_page.id = 'menu-page';

    const menu_title = document.createElement('h1');
    menu_title.textContent = 'THE MENU';
    menu_title.classList.add('menu-title');
    menu_page.appendChild(menu_title);

    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-container');

    const menu_options = document.createElement('div')
    menu_options.classList.add('menu-options');

    ['PIZZA', 'DISHES', 'STARTER'].forEach((text) => {
        const btn = document.createElement('button');
        btn.classList.add('menu-buttons', text);
        btn.textContent = text;
        menu_options.appendChild(btn);
    });

    menu_container.appendChild(menu_options);

    menu_options.addEventListener('click', (e) => {
        const pizza_div = document.querySelector('.menues.pizza');
        const dishes_div = document.querySelector('.menues.dishes');
        const starter_div = document.querySelector('.menues.starter');
        const pizza_button = document.querySelector('.menu-buttons.PIZZA');
        const dishes_button = document.querySelector('.menu-buttons.DISHES');
        const starter_button = document.querySelector('.menu-buttons.STARTER');
        if (e.target.textContent === 'PIZZA') {
            pizza_div.style.display = 'block';
            dishes_div.style.display = 'none';
            starter_div.style.display = 'none';
            pizza_button.style.backgroundColor = 'red';
            dishes_button.style.backgroundColor = 'black';
            starter_button.style.backgroundColor = 'black';
        } else if (e.target.textContent === 'DISHES') {
            pizza_div.style.display = 'none';
            dishes_div.style.display = 'block';
            starter_div.style.display = 'none';
            pizza_button.style.backgroundColor = 'black';
            dishes_button.style.backgroundColor = 'red';
            starter_button.style.backgroundColor = 'black';
        } else if (e.target.textContent === 'STARTER') {
            pizza_div.style.display = 'none';
            dishes_div.style.display = 'none';
            starter_div.style.display = 'block';
            pizza_button.style.backgroundColor = 'black';
            dishes_button.style.backgroundColor = 'black';
            starter_button.style.backgroundColor = 'red';
        }
    });
    
    const menu_content = document.createElement('div');
    menu_content.classList.add('menu-content');

    pizzaMenu(menu_content);
    dishesMenu(menu_content);
    starterMenu(menu_content);

    menu_container.appendChild(menu_content);

    menu_page.appendChild(menu_container);
    
    document.body.appendChild(menu_page);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);

function pizzaMenu (menu_content) {
    const pizza_menu = [
        {name: 'Margherita', ingredient: 'Fresh tomatoes, fresh mozzarella, fresh basil', price: '$12.50'},
        {name: 'Formaggio', ingredient: 'Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)', price: '$15.50'},
        {name: 'Chicken', ingredient: 'Fresh tomatoes, mozzarella, chicken, onions', price: '$17.00'},
        {name: 'Pineapple O clock', ingredient: 'Fresh tomatoes, mozzarella, pineapple, bacon, basil', price: '$16.50'},
        {name: 'Meat town', ingredient: 'Fresh tomatoes, mozzarella, hot pepperoni, hot sausage, beef, chicken', price: '$20.00'},
        {name: 'Parma', ingredient: 'Fresh tomatoes, mozzarella, parma, bacon, arugula', price: '$21.50'}
    ];

    const pizza_container = document.createElement('div');
    pizza_container.classList.add('menues', 'pizza');

    pizza_menu.forEach((dish) => {
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        const menu_dish = document.createElement('div');
        menu_dish.classList.add('menu-dish'); 

        const dish_info = document.createElement('div');
        dish_info.classList.add('dish-info');

        const dish_name = document.createElement('h3');
        dish_name.textContent = dish.name;

        const dish_price = document.createElement('span');
        dish_price.textContent = dish.price;

        dish_info.appendChild(dish_name);
        dish_info.appendChild(dish_price);

        const dish_ingredient = document.createElement('p');
        dish_ingredient.textContent = dish.ingredient;

        const hr = document.createElement('hr');

        menu_dish.appendChild(dish_info);
        menu_dish.appendChild(dish_ingredient);
        menu_dish.appendChild(hr);

        menu_item.appendChild(menu_dish);
        pizza_container.appendChild(menu_item);
    });

    menu_content.appendChild(pizza_container);
}

function dishesMenu (menu_content) {
    const dishes_menu = [
        {name: 'Lasagna', ingredient: 'Special sauce, mozzarella, parmesan, ground beef', price: '$13.50'},
        {name: 'Ravioli', ingredient: 'Ravioli filled with cheese', price: '$14.50'},
        {name: 'Spahetti classica', ingredient: 'Fresh tomatoes, onions, ground beef', price: '$11.00'},
        {name: 'Seafood pasta', ingredient: 'Salmon, shrimp, lobster, garlic', price: '$25.50'}
    ];

    const dishes_container = document.createElement('div');
    dishes_container.classList.add('menues', 'dishes');

    dishes_menu.forEach((dish) => {
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        const menu_dish = document.createElement('div');
        menu_dish.classList.add('menu-dish'); 

        const dish_info = document.createElement('div');
        dish_info.classList.add('dish-info');

        const dish_name = document.createElement('h3');
        dish_name.textContent = dish.name;

        const dish_price = document.createElement('span');
        dish_price.textContent = dish.price;

        dish_info.appendChild(dish_name);
        dish_info.appendChild(dish_price);

        const dish_ingredient = document.createElement('p');
        dish_ingredient.textContent = dish.ingredient;

        const hr = document.createElement('hr');

        menu_dish.appendChild(dish_info);
        menu_dish.appendChild(dish_ingredient);
        menu_dish.appendChild(hr);

        menu_item.appendChild(menu_dish);
        dishes_container.appendChild(menu_item);
    });

    dishes_container.style.display = 'none';

    menu_content.appendChild(dishes_container);
}

function starterMenu (menu_content) {
    const starter_menu = [
        {name: 'Todays soup', ingredient: 'Ask the waiter', price: '$5.50'},
        {name: 'Bruschetta', ingredient: 'Bread with pesto, tomatoes, onion, garlic', price: '$8.50'},
        {name: 'Garlic bread', ingredient: 'Grilled ciabatta, garlic butter, onions', price: '$9.50'},
        {name: 'Tomozzarella', ingredient: 'Tomotoes and mozzarella', price: '$10.50'},
    ];

    const starter_container = document.createElement('div');
    starter_container.classList.add('menues', 'starter');

    starter_menu.forEach((dish) => {
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        const menu_dish = document.createElement('div');
        menu_dish.classList.add('menu-dish'); 

        const dish_info = document.createElement('div');
        dish_info.classList.add('dish-info');

        const dish_name = document.createElement('h3');
        dish_name.textContent = dish.name;

        const dish_price = document.createElement('span');
        dish_price.textContent = dish.price;

        dish_info.appendChild(dish_name);
        dish_info.appendChild(dish_price);

        const dish_ingredient = document.createElement('p');
        dish_ingredient.textContent = dish.ingredient;

        const hr = document.createElement('hr');

        menu_dish.appendChild(dish_info);
        menu_dish.appendChild(dish_ingredient);
        menu_dish.appendChild(hr);

        menu_item.appendChild(menu_dish);
        starter_container.appendChild(menu_item);
    });

    starter_container.style.display = 'none';

    menu_content.appendChild(starter_container);
}

/***/ }),

/***/ "./src/Amatic_SC/AmaticSC-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/Amatic_SC/AmaticSC-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f12c1d887cda2131ac83.ttf";

/***/ }),

/***/ "./src/Amatic_SC/AmaticSC-Regular.ttf":
/*!********************************************!*\
  !*** ./src/Amatic_SC/AmaticSC-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd9971162ff94dc53856.ttf";

/***/ }),

/***/ "./src/Images/onepage_restaurant.jpg":
/*!*******************************************!*\
  !*** ./src/Images/onepage_restaurant.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5baccedcf4ced38b6751.jpg";

/***/ }),

/***/ "./src/Images/pizza-pepperoni-944464-pxhere.com.jpg":
/*!**********************************************************!*\
  !*** ./src/Images/pizza-pepperoni-944464-pxhere.com.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe30a370e1ff0a2651e7.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2SUFBbUQ7QUFDL0YsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMseUtBQWlFO0FBQzdHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsWUFBWSxtQ0FBbUM7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZ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Q1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsaUdBQWlHO0FBQzFHLFNBQVMsMkVBQTJFO0FBQ3BGLFNBQVMsOEZBQThGO0FBQ3ZHLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxrRUFBa0U7QUFDM0UsU0FBUyw0RkFBNEY7QUFDckcsU0FBUyw0RkFBNEY7QUFDckcsU0FBUyw2RUFBNkU7QUFDdEY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluX3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVfcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9BbWF0aWNfU0MvQW1hdGljU0MtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0FtYXRpY19TQy9BbWF0aWNTQy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vSW1hZ2VzL3BpenphLXBlcHBlcm9uaS05NDQ0NjQtcHhoZXJlLmNvbS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMtU0MnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYy1TQycsIHNhbnMtc2VyaWY7XG59XG5cbmE6bGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5uYXYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLW1haW4tbWVudSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcGVuLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubWVudS1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLm1lbnUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHdoaXRlO1xufVxuXG4ubWVudS1idXR0b25zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtYnV0dG9ucy5QSVpaQSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubWVudS1idXR0b25zOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubWVudS1idXR0b25zOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5tZW51ZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lbnUtZGlzaCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAmIC5kaXNoLWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgfVxuICAgICYgc3BhbiB7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgfVxuICAgICYgaHIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn1cblxuLmFib3V0LXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzOSw5NSw5MSwyNTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWJvdXQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmFib3V0LWNvbnRlbnQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFib3V0LXRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5vcGVuaW5nLWhvdXJzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaG91cnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgJiBkaXYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICAmIHAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG59XG5cbi5jb250YWN0LXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDgsMTIyLDEyOSwyNTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY29udGFjdC1jb250ZW50IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJiBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LXdyYXA6IHdyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gICAgJiAuY29udGFjdC1wMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG59XG5cbi5jb250YWN0LWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJiBpbnB1dCB7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgICYgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCO2dFQUN5RDtJQUN6RCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0Msc0JBQXNCO0lBQ25CLFNBQVM7SUFDVCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlEQUF1RTtJQUN2RSxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0NBQW9D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ZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMtU0MnO1xcbiAgICBzcmM6IHVybCgnLi9BbWF0aWNfU0MvQW1hdGljU0MtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgICAgdXJsKCcuL0FtYXRpY19TQy9BbWF0aWNTQy1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljLVNDJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYTpsaW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9JbWFnZXMvcGl6emEtcGVwcGVyb25pLTk0NDQ2NC1weGhlcmUuY29tLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5hdi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4tbWFpbi1tZW51IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub3Blbi10ZXh0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLm1lbnUtcGFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLm1lbnUtYnV0dG9ucyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAyMjVweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1idXR0b25zLlBJWlpBIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWVudS1idXR0b25zOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1lbnVlcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1kaXNoIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAmIC5kaXNoLWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgfVxcbiAgICAmIHNwYW4ge1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgfVxcbiAgICAmIGhyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbi5hYm91dC1wYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzksOTUsOTEsMjU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFib3V0LXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtd3JhcDogd3JhcDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ub3BlbmluZy1ob3VycyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICYgZGl2IHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIH1cXG4gICAgJiBwIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIH1cXG59XFxuXFxuLmNvbnRhY3QtcGFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwOCwxMjIsMTI5LDI1NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAmIHAge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgdGV4dC13cmFwOiB3cmFwO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgfVxcbiAgICAmIC5jb250YWN0LXAzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgfVxcbn1cXG5cXG4uY29udGFjdC1mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgJiBpbnB1dCB7XFxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIH1cXG4gICAgJiBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG9uZXBhZ2VfcmVzdGF1cmFudCBmcm9tICcuL0ltYWdlcy9vbmVwYWdlX3Jlc3RhdXJhbnQuanBnJztcblxuY29uc3QgYWJvdXRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFib3V0X3BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dF9wYWdlLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UnKTtcbiAgICBhYm91dF9wYWdlLmlkID0gJ2Fib3V0LXBhZ2UnO1xuXG4gICAgY29uc3QgYWJvdXRfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGFib3V0X3RpdGxlLnRleHRDb250ZW50ID0gJ0FCT1VUJztcbiAgICBhYm91dF90aXRsZS5jbGFzc0xpc3QuYWRkKCdhYm91dC10aXRsZScpO1xuICAgIGFib3V0X3BhZ2UuYXBwZW5kQ2hpbGQoYWJvdXRfdGl0bGUpO1xuXG4gICAgY29uc3QgYWJvdXRfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0X2NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudCcpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGV4dCcpO1xuXG4gICAgcDEudGV4dENvbnRlbnQgPSBcbiAgICAgICAgYFRoZSBQaXp6YSBSZXN0YXVyYW50IHdhcyBmb3VuZGVkIGluIGJsYWJsYSBieSBNci4gSXRhbGlhbm8gaW4gbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIFxuICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgICBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LmA7XG4gICAgXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGV4dCcpO1xuXG4gICAgcDIudGV4dENvbnRlbnQgPSBgVGhlIENoZWY/IE1yLiBJdGFsaWFubyBoaW1zZWxmYDtcblxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAzLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXRleHQnKTtcblxuICAgIHAzLnRleHRDb250ZW50ID0gYFdlIGFyZSBwcm91ZCBvZiBvdXIgaW50ZXJpb3JzLmA7XG5cbiAgICBjb25zdCByZXN0YXVyYW50X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHJlc3RhdXJhbnRfaW1nLnNyYyA9IG9uZXBhZ2VfcmVzdGF1cmFudDtcblxuICAgIGFib3V0X2NvbnRlbnQuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGFib3V0X2NvbnRlbnQuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGFib3V0X2NvbnRlbnQuYXBwZW5kQ2hpbGQocDMpO1xuICAgIGFib3V0X2NvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudF9pbWcpO1xuXG5cbiAgICBjb25zdCBvcGVuaW5nX2hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBvcGVuaW5nX2hvdXJzLmNsYXNzTGlzdC5hZGQoJ29wZW5pbmctaG91cnMnKTtcbiAgICBvcGVuaW5nX2hvdXJzLnRleHRDb250ZW50ID0gJ09wZW5pbmcgSG91cnMnO1xuICAgIGFib3V0X2NvbnRlbnQuYXBwZW5kQ2hpbGQob3BlbmluZ19ob3Vycyk7XG5cbiAgICBjb25zdCBob3Vyc19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc19kaXYuY2xhc3NMaXN0LmFkZCgnaG91cnMtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtb25fdGh1cl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb25fdGh1cl9kaXYuY2xhc3NMaXN0LmFkZCgnaG91cnMtY29udGVudCcpO1xuICAgIGNvbnN0IG1vbl9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1vbl9wLnRleHRDb250ZW50ID0gJ01vbiAmIHR1ZSBjbG9zZWQnO1xuICAgIGNvbnN0IHdlZF9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlZF9wLnRleHRDb250ZW50ID0gJ1dlZG5lc2RheSAxMC4wMCAtIDI0LjAwJztcbiAgICBjb25zdCB0aHVyX3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGh1cl9wLnRleHRDb250ZW50ID0gJ1RodXJzZGF5IDEwOjAwIC0gMjQ6MDAnO1xuXG4gICAgbW9uX3RodXJfZGl2LmFwcGVuZENoaWxkKG1vbl9wKTtcbiAgICBtb25fdGh1cl9kaXYuYXBwZW5kQ2hpbGQod2VkX3ApO1xuICAgIG1vbl90aHVyX2Rpdi5hcHBlbmRDaGlsZCh0aHVyX3ApO1xuICAgIGhvdXJzX2Rpdi5hcHBlbmRDaGlsZChtb25fdGh1cl9kaXYpO1xuICAgIFxuICAgIGNvbnN0IGZyaV9zdW5fZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJpX3N1bl9kaXYuY2xhc3NMaXN0LmFkZCgnaG91cnMtY29udGVudCcpO1xuICAgIGNvbnN0IGZyaV9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZyaV9wLnRleHRDb250ZW50ID0gJ0ZyaWRheSAxMDowMCAtIDEyOjAwJztcbiAgICBjb25zdCBzYXRfcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzYXRfcC50ZXh0Q29udGVudCA9ICdTYXR1cmRheSAxMDowMCAtIDIzOjAwJztcbiAgICBjb25zdCBzdW5fcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdW5fcC50ZXh0Q29udGVudCA9ICdTdW5kYXkgQ2xvc2VkJztcblxuICAgIGZyaV9zdW5fZGl2LmFwcGVuZENoaWxkKGZyaV9wKTtcbiAgICBmcmlfc3VuX2Rpdi5hcHBlbmRDaGlsZChzYXRfcCk7XG4gICAgZnJpX3N1bl9kaXYuYXBwZW5kQ2hpbGQoc3VuX3ApO1xuICAgIGhvdXJzX2Rpdi5hcHBlbmRDaGlsZChmcmlfc3VuX2Rpdik7XG4gICAgXG4gICAgYWJvdXRfY29udGVudC5hcHBlbmRDaGlsZChob3Vyc19kaXYpO1xuXG4gICAgYWJvdXRfcGFnZS5hcHBlbmRDaGlsZChhYm91dF9jb250ZW50KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRfcGFnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0Q29udGVudDsiLCJcblxuY29uc3QgY29udGFjdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFjdF9wYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdF9wYWdlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtcGFnZScpO1xuICAgIGNvbnRhY3RfcGFnZS5pZCA9ICdjb250YWN0LXBhZ2UnO1xuXG4gICAgY29uc3QgY29udGFjdF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29udGFjdF90aXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRpdGxlJyk7XG4gICAgY29udGFjdF90aXRsZS50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcblxuICAgIGNvbnRhY3RfcGFnZS5hcHBlbmRDaGlsZChjb250YWN0X3RpdGxlKTtcblxuXG4gICAgY29uc3QgY29udGFjdF9jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdF9jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGVudCcpO1xuXG4gICAgY29uc3QgY29udGFjdF9wMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0X3AxLnRleHRDb250ZW50ID0gJ0ZpbmQgdXMgYXQgc29tZSBhZGRyZXNzIGF0IHNvbWUgcGxhY2Ugb3IgY2FsbCB1cyBhdCAwNTA1MDUxNS0xMjIzMzAnO1xuICAgIGNvbnN0IGNvbnRhY3RfcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdF9wMi50ZXh0Q29udGVudCA9ICdXZSBvZmZlciBmdWxsLXNlcnZpY2UgY2F0ZXJpbmcgZm9yIGFueSBldmVudCwgbGFyZ2Ugb3Igc21hbGwuIFdlIHVuZGVyc3RhbmQgeW91ciBuZWVkcyBhbmQgd2Ugd2lsbCBjYXRlciB0aGUgZm9vZCB0byBzYXRpc2Z5IHRoZSBiaWdnZXJzdCBjcml0ZXJpYSBvZiB0aGVtIGFsbCwgYm90aCBsb29rIGFuZCB0YXN0ZS4nO1xuICAgIGNvbnN0IGNvbnRhY3RfcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdF9wMy50ZXh0Q29udGVudCA9ICdSZXNlcnZlIGEgdGFibGUsIGFzayBmb3IgdG9kYXlcXCdzIHNwZWNpYWwgb3IganVzdCBzZW5kIHVzIGEgbWVzc2FnZTonXG4gICAgY29udGFjdF9wMy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXAzJyk7XG4gICAgY29udGFjdF9jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RfcDEpO1xuICAgIGNvbnRhY3RfY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0X3AyKTtcbiAgICBjb250YWN0X2NvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdF9wMyk7XG4gICAgXG5cbiAgICBjb25zdCBjb250YWN0X2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29udGFjdF9mb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9ybScpO1xuXG4gICAgY29uc3QgZm9ybV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmb3JtX25hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBmb3JtX25hbWUucGxhY2Vob2xkZXIgPSAnTkFNRSc7XG5cbiAgICBjb25zdCBmb3JtX3Blb3BsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZm9ybV9wZW9wbGUudHlwZSA9ICdudW1iZXInO1xuICAgIGZvcm1fcGVvcGxlLnBsYWNlaG9sZGVyID0gJ0hvdyBtYW55IHBlb3BsZT8nO1xuXG4gICAgY29uc3QgZm9ybV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmb3JtX2RhdGUudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgZm9ybV9kYXRlLnBsYWNlaG9sZGVyID0gJ0RhdGUgYW5kIHRpbWUnO1xuICAgIGZvcm1fZGF0ZS52YWx1ZSA9ICcyMDIwLTExLTE2VDIwOjAwJztcblxuICAgIGNvbnN0IGZvcm1fbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZm9ybV9ub3RlLnR5cGUgPSAndGV4dCc7XG4gICAgZm9ybV9ub3RlLnBsYWNlaG9sZGVyID0gJ01lc3NhZ2UgXFwgU3BlY2lhbCByZXF1aXJlbWVudHMnO1xuXG4gICAgY29uc3QgZm9ybV9zdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBmb3JtX3N1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgZm9ybV9zdWJtaXQudGV4dENvbnRlbnQgPSAnU0VORCBNRVNTQUdFJztcblxuICAgIGNvbnRhY3RfZm9ybS5hcHBlbmRDaGlsZChmb3JtX25hbWUpO1xuICAgIGNvbnRhY3RfZm9ybS5hcHBlbmRDaGlsZChmb3JtX3Blb3BsZSk7XG4gICAgY29udGFjdF9mb3JtLmFwcGVuZENoaWxkKGZvcm1fZGF0ZSk7XG4gICAgY29udGFjdF9mb3JtLmFwcGVuZENoaWxkKGZvcm1fbm90ZSk7XG4gICAgY29udGFjdF9mb3JtLmFwcGVuZENoaWxkKGZvcm1fc3VibWl0KTtcbiAgICBjb250YWN0X2NvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdF9mb3JtKTtcblxuICAgIGNvbnRhY3RfcGFnZS5hcHBlbmRDaGlsZChjb250YWN0X2NvbnRlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdF9wYWdlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbnRlbnQ7IiwiaW1wb3J0IG1haW5Db250ZW50IGZyb20gJy4vbWFpbl9wYWdlLmpzJztcbmltcG9ydCBtZW51Q29udGVudCBmcm9tICcuL21lbnVfcGFnZS5qcyc7XG5pbXBvcnQgYWJvdXRDb250ZW50IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IGNvbnRhY3RDb250ZW50IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5tYWluQ29udGVudCgpO1xubWVudUNvbnRlbnQoKTtcbmFib3V0Q29udGVudCgpO1xuY29udGFjdENvbnRlbnQoKTtcblxuIiwiXG5cbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtYWluX3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgbWFpbl9tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgbWFpbl90ZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2hpdGUtc3BhY2U6IHByZTsnKTtcbiAgICBtYWluX3RleHQudGV4dENvbnRlbnQgPSAnSXRhbGlhblxcclxcbic7XG4gICAgbWFpbl90ZXh0LnRleHRDb250ZW50ICs9ICdQaXp6YSc7XG4gICAgbWFpbl90ZXh0LmNsYXNzTGlzdC5hZGQoJ21haW4tdGV4dCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbl90ZXh0KTtcblxuICAgIG1haW5fbWVudS50ZXh0Q29udGVudCA9ICdMRVQgTUUgU0VFIFRIRSBNRU5VJztcbiAgICBtYWluX21lbnUuY2xhc3NMaXN0LmFkZCgnYnRuLW1haW4tbWVudScpO1xuICAgIG1haW5fbWVudS5ocmVmID0gJyNtZW51LXBhZ2UnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbl9tZW51KTtcblxuICAgIGNvbnN0IG9wZW5fdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBvcGVuX3RleHQudGV4dENvbnRlbnQgPSAnT3BlbiBmcm9tIDEwYW0gLSAxMnBtJztcbiAgICBvcGVuX3RleHQuY2xhc3NMaXN0LmFkZCgnb3Blbi10ZXh0Jyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3Blbl90ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRlbnQ7XG4iLCJcblxuY29uc3QgbWVudUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudV9wYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudV9wYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZScpO1xuICAgIG1lbnVfcGFnZS5pZCA9ICdtZW51LXBhZ2UnO1xuXG4gICAgY29uc3QgbWVudV90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudV90aXRsZS50ZXh0Q29udGVudCA9ICdUSEUgTUVOVSc7XG4gICAgbWVudV90aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG4gICAgbWVudV9wYWdlLmFwcGVuZENoaWxkKG1lbnVfdGl0bGUpO1xuXG4gICAgY29uc3QgbWVudV9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudV9vcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51X29wdGlvbnMuY2xhc3NMaXN0LmFkZCgnbWVudS1vcHRpb25zJyk7XG5cbiAgICBbJ1BJWlpBJywgJ0RJU0hFUycsICdTVEFSVEVSJ10uZm9yRWFjaCgodGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9ucycsIHRleHQpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBtZW51X29wdGlvbnMuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9KTtcblxuICAgIG1lbnVfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVfb3B0aW9ucyk7XG5cbiAgICBtZW51X29wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwaXp6YV9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudWVzLnBpenphJyk7XG4gICAgICAgIGNvbnN0IGRpc2hlc19kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudWVzLmRpc2hlcycpO1xuICAgICAgICBjb25zdCBzdGFydGVyX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51ZXMuc3RhcnRlcicpO1xuICAgICAgICBjb25zdCBwaXp6YV9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b25zLlBJWlpBJyk7XG4gICAgICAgIGNvbnN0IGRpc2hlc19idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b25zLkRJU0hFUycpO1xuICAgICAgICBjb25zdCBzdGFydGVyX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbnMuU1RBUlRFUicpO1xuICAgICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdQSVpaQScpIHtcbiAgICAgICAgICAgIHBpenphX2Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRpc2hlc19kaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHN0YXJ0ZXJfZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBwaXp6YV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICBkaXNoZXNfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICBzdGFydGVyX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnRElTSEVTJykge1xuICAgICAgICAgICAgcGl6emFfZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBkaXNoZXNfZGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgc3RhcnRlcl9kaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHBpenphX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgZGlzaGVzX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIHN0YXJ0ZXJfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdTVEFSVEVSJykge1xuICAgICAgICAgICAgcGl6emFfZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBkaXNoZXNfZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBzdGFydGVyX2Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHBpenphX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgZGlzaGVzX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgc3RhcnRlcl9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBtZW51X2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51X2NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50Jyk7XG5cbiAgICBwaXp6YU1lbnUobWVudV9jb250ZW50KTtcbiAgICBkaXNoZXNNZW51KG1lbnVfY29udGVudCk7XG4gICAgc3RhcnRlck1lbnUobWVudV9jb250ZW50KTtcblxuICAgIG1lbnVfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVfY29udGVudCk7XG5cbiAgICBtZW51X3BhZ2UuYXBwZW5kQ2hpbGQobWVudV9jb250YWluZXIpO1xuICAgIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudV9wYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVDb250ZW50O1xuXG5mdW5jdGlvbiBwaXp6YU1lbnUgKG1lbnVfY29udGVudCkge1xuICAgIGNvbnN0IHBpenphX21lbnUgPSBbXG4gICAgICAgIHtuYW1lOiAnTWFyZ2hlcml0YScsIGluZ3JlZGllbnQ6ICdGcmVzaCB0b21hdG9lcywgZnJlc2ggbW96emFyZWxsYSwgZnJlc2ggYmFzaWwnLCBwcmljZTogJyQxMi41MCd9LFxuICAgICAgICB7bmFtZTogJ0Zvcm1hZ2dpbycsIGluZ3JlZGllbnQ6ICdGb3VyIGNoZWVzZXMgKG1venphcmVsbGEsIHBhcm1lc2FuLCBwZWNvcmlubywgamFybHNiZXJnKScsIHByaWNlOiAnJDE1LjUwJ30sXG4gICAgICAgIHtuYW1lOiAnQ2hpY2tlbicsIGluZ3JlZGllbnQ6ICdGcmVzaCB0b21hdG9lcywgbW96emFyZWxsYSwgY2hpY2tlbiwgb25pb25zJywgcHJpY2U6ICckMTcuMDAnfSxcbiAgICAgICAge25hbWU6ICdQaW5lYXBwbGUgTyBjbG9jaycsIGluZ3JlZGllbnQ6ICdGcmVzaCB0b21hdG9lcywgbW96emFyZWxsYSwgcGluZWFwcGxlLCBiYWNvbiwgYmFzaWwnLCBwcmljZTogJyQxNi41MCd9LFxuICAgICAgICB7bmFtZTogJ01lYXQgdG93bicsIGluZ3JlZGllbnQ6ICdGcmVzaCB0b21hdG9lcywgbW96emFyZWxsYSwgaG90IHBlcHBlcm9uaSwgaG90IHNhdXNhZ2UsIGJlZWYsIGNoaWNrZW4nLCBwcmljZTogJyQyMC4wMCd9LFxuICAgICAgICB7bmFtZTogJ1Bhcm1hJywgaW5ncmVkaWVudDogJ0ZyZXNoIHRvbWF0b2VzLCBtb3p6YXJlbGxhLCBwYXJtYSwgYmFjb24sIGFydWd1bGEnLCBwcmljZTogJyQyMS41MCd9XG4gICAgXTtcblxuICAgIGNvbnN0IHBpenphX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51ZXMnLCAncGl6emEnKTtcblxuICAgIHBpenphX21lbnUuZm9yRWFjaCgoZGlzaCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudV9pdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVfZGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51X2Rpc2guY2xhc3NMaXN0LmFkZCgnbWVudS1kaXNoJyk7IFxuXG4gICAgICAgIGNvbnN0IGRpc2hfaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXNoX2luZm8uY2xhc3NMaXN0LmFkZCgnZGlzaC1pbmZvJyk7XG5cbiAgICAgICAgY29uc3QgZGlzaF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZGlzaF9uYW1lLnRleHRDb250ZW50ID0gZGlzaC5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGRpc2hfcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRpc2hfcHJpY2UudGV4dENvbnRlbnQgPSBkaXNoLnByaWNlO1xuXG4gICAgICAgIGRpc2hfaW5mby5hcHBlbmRDaGlsZChkaXNoX25hbWUpO1xuICAgICAgICBkaXNoX2luZm8uYXBwZW5kQ2hpbGQoZGlzaF9wcmljZSk7XG5cbiAgICAgICAgY29uc3QgZGlzaF9pbmdyZWRpZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkaXNoX2luZ3JlZGllbnQudGV4dENvbnRlbnQgPSBkaXNoLmluZ3JlZGllbnQ7XG5cbiAgICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuXG4gICAgICAgIG1lbnVfZGlzaC5hcHBlbmRDaGlsZChkaXNoX2luZm8pO1xuICAgICAgICBtZW51X2Rpc2guYXBwZW5kQ2hpbGQoZGlzaF9pbmdyZWRpZW50KTtcbiAgICAgICAgbWVudV9kaXNoLmFwcGVuZENoaWxkKGhyKTtcblxuICAgICAgICBtZW51X2l0ZW0uYXBwZW5kQ2hpbGQobWVudV9kaXNoKTtcbiAgICAgICAgcGl6emFfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVfaXRlbSk7XG4gICAgfSk7XG5cbiAgICBtZW51X2NvbnRlbnQuYXBwZW5kQ2hpbGQocGl6emFfY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZGlzaGVzTWVudSAobWVudV9jb250ZW50KSB7XG4gICAgY29uc3QgZGlzaGVzX21lbnUgPSBbXG4gICAgICAgIHtuYW1lOiAnTGFzYWduYScsIGluZ3JlZGllbnQ6ICdTcGVjaWFsIHNhdWNlLCBtb3p6YXJlbGxhLCBwYXJtZXNhbiwgZ3JvdW5kIGJlZWYnLCBwcmljZTogJyQxMy41MCd9LFxuICAgICAgICB7bmFtZTogJ1JhdmlvbGknLCBpbmdyZWRpZW50OiAnUmF2aW9saSBmaWxsZWQgd2l0aCBjaGVlc2UnLCBwcmljZTogJyQxNC41MCd9LFxuICAgICAgICB7bmFtZTogJ1NwYWhldHRpIGNsYXNzaWNhJywgaW5ncmVkaWVudDogJ0ZyZXNoIHRvbWF0b2VzLCBvbmlvbnMsIGdyb3VuZCBiZWVmJywgcHJpY2U6ICckMTEuMDAnfSxcbiAgICAgICAge25hbWU6ICdTZWFmb29kIHBhc3RhJywgaW5ncmVkaWVudDogJ1NhbG1vbiwgc2hyaW1wLCBsb2JzdGVyLCBnYXJsaWMnLCBwcmljZTogJyQyNS41MCd9XG4gICAgXTtcblxuICAgIGNvbnN0IGRpc2hlc19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNoZXNfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVlcycsICdkaXNoZXMnKTtcblxuICAgIGRpc2hlc19tZW51LmZvckVhY2goKGRpc2gpID0+IHtcbiAgICAgICAgY29uc3QgbWVudV9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVfaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICBjb25zdCBtZW51X2Rpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudV9kaXNoLmNsYXNzTGlzdC5hZGQoJ21lbnUtZGlzaCcpOyBcblxuICAgICAgICBjb25zdCBkaXNoX2luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGlzaF9pbmZvLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtaW5mbycpO1xuXG4gICAgICAgIGNvbnN0IGRpc2hfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGRpc2hfbmFtZS50ZXh0Q29udGVudCA9IGRpc2gubmFtZTtcblxuICAgICAgICBjb25zdCBkaXNoX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkaXNoX3ByaWNlLnRleHRDb250ZW50ID0gZGlzaC5wcmljZTtcblxuICAgICAgICBkaXNoX2luZm8uYXBwZW5kQ2hpbGQoZGlzaF9uYW1lKTtcbiAgICAgICAgZGlzaF9pbmZvLmFwcGVuZENoaWxkKGRpc2hfcHJpY2UpO1xuXG4gICAgICAgIGNvbnN0IGRpc2hfaW5ncmVkaWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGlzaF9pbmdyZWRpZW50LnRleHRDb250ZW50ID0gZGlzaC5pbmdyZWRpZW50O1xuXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICAgICAgICBtZW51X2Rpc2guYXBwZW5kQ2hpbGQoZGlzaF9pbmZvKTtcbiAgICAgICAgbWVudV9kaXNoLmFwcGVuZENoaWxkKGRpc2hfaW5ncmVkaWVudCk7XG4gICAgICAgIG1lbnVfZGlzaC5hcHBlbmRDaGlsZChocik7XG5cbiAgICAgICAgbWVudV9pdGVtLmFwcGVuZENoaWxkKG1lbnVfZGlzaCk7XG4gICAgICAgIGRpc2hlc19jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudV9pdGVtKTtcbiAgICB9KTtcblxuICAgIGRpc2hlc19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIG1lbnVfY29udGVudC5hcHBlbmRDaGlsZChkaXNoZXNfY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRlck1lbnUgKG1lbnVfY29udGVudCkge1xuICAgIGNvbnN0IHN0YXJ0ZXJfbWVudSA9IFtcbiAgICAgICAge25hbWU6ICdUb2RheXMgc291cCcsIGluZ3JlZGllbnQ6ICdBc2sgdGhlIHdhaXRlcicsIHByaWNlOiAnJDUuNTAnfSxcbiAgICAgICAge25hbWU6ICdCcnVzY2hldHRhJywgaW5ncmVkaWVudDogJ0JyZWFkIHdpdGggcGVzdG8sIHRvbWF0b2VzLCBvbmlvbiwgZ2FybGljJywgcHJpY2U6ICckOC41MCd9LFxuICAgICAgICB7bmFtZTogJ0dhcmxpYyBicmVhZCcsIGluZ3JlZGllbnQ6ICdHcmlsbGVkIGNpYWJhdHRhLCBnYXJsaWMgYnV0dGVyLCBvbmlvbnMnLCBwcmljZTogJyQ5LjUwJ30sXG4gICAgICAgIHtuYW1lOiAnVG9tb3p6YXJlbGxhJywgaW5ncmVkaWVudDogJ1RvbW90b2VzIGFuZCBtb3p6YXJlbGxhJywgcHJpY2U6ICckMTAuNTAnfSxcbiAgICBdO1xuXG4gICAgY29uc3Qgc3RhcnRlcl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGFydGVyX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51ZXMnLCAnc3RhcnRlcicpO1xuXG4gICAgc3RhcnRlcl9tZW51LmZvckVhY2goKGRpc2gpID0+IHtcbiAgICAgICAgY29uc3QgbWVudV9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVfaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICBjb25zdCBtZW51X2Rpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudV9kaXNoLmNsYXNzTGlzdC5hZGQoJ21lbnUtZGlzaCcpOyBcblxuICAgICAgICBjb25zdCBkaXNoX2luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGlzaF9pbmZvLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtaW5mbycpO1xuXG4gICAgICAgIGNvbnN0IGRpc2hfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGRpc2hfbmFtZS50ZXh0Q29udGVudCA9IGRpc2gubmFtZTtcblxuICAgICAgICBjb25zdCBkaXNoX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkaXNoX3ByaWNlLnRleHRDb250ZW50ID0gZGlzaC5wcmljZTtcblxuICAgICAgICBkaXNoX2luZm8uYXBwZW5kQ2hpbGQoZGlzaF9uYW1lKTtcbiAgICAgICAgZGlzaF9pbmZvLmFwcGVuZENoaWxkKGRpc2hfcHJpY2UpO1xuXG4gICAgICAgIGNvbnN0IGRpc2hfaW5ncmVkaWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGlzaF9pbmdyZWRpZW50LnRleHRDb250ZW50ID0gZGlzaC5pbmdyZWRpZW50O1xuXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICAgICAgICBtZW51X2Rpc2guYXBwZW5kQ2hpbGQoZGlzaF9pbmZvKTtcbiAgICAgICAgbWVudV9kaXNoLmFwcGVuZENoaWxkKGRpc2hfaW5ncmVkaWVudCk7XG4gICAgICAgIG1lbnVfZGlzaC5hcHBlbmRDaGlsZChocik7XG5cbiAgICAgICAgbWVudV9pdGVtLmFwcGVuZENoaWxkKG1lbnVfZGlzaCk7XG4gICAgICAgIHN0YXJ0ZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVfaXRlbSk7XG4gICAgfSk7XG5cbiAgICBzdGFydGVyX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbWVudV9jb250ZW50LmFwcGVuZENoaWxkKHN0YXJ0ZXJfY29udGFpbmVyKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=