/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/app.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/helpers.js */ \"./src/js/components/helpers.js\");\n/* harmony import */ var _components_navigationHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigationHandler.js */ \"./src/js/components/navigationHandler.js\");\n\n/*\n* Polyfills\n*/\n\nif (window.NodeList && !NodeList.prototype.forEach) {\n  NodeList.prototype.forEach = Array.prototype.forEach;\n}\n\nif (!Object.entries) {\n  var root = document.getElementsByTagName('html')[0];\n  root.setAttribute('class', 'ie11');\n\n  Object.entries = function (obj) {\n    var ownProps = Object.keys(obj),\n        i = ownProps.length,\n        resArray = new Array(i); // preallocate the Array\n\n    while (i--) {\n      resArray[i] = [ownProps[i], obj[ownProps[i]]];\n    }\n\n    return resArray;\n  };\n} // Helpers\n\n\n // Navigation module\n\n\nvar app = {\n  settings: {},\n  init: function init() {\n    // Handles all logic needed for navigation\n    _components_navigationHandler_js__WEBPACK_IMPORTED_MODULE_2__[\"navHandler\"].init();\n    var download = document.querySelector('.js-generate-save');\n\n    if (download) {\n      download.addEventListener('click', function () {\n        fetch('https://archvalerandomizer.herokuapp.com').then(function (res) {\n          return res.blob();\n        }).then(function (blob) {\n          var url = window.URL.createObjectURL(blob);\n          var link = document.createElement('a');\n          link.href = url;\n          link.download = 'worldX.avsv';\n          link.click();\n        });\n      });\n    } // Converts <img>-tags containing svg-files to inline <svg>\n\n\n    _components_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"helperFuncs\"].convertSVG();\n  }\n};\ndocument.addEventListener('DOMContentLoaded', function () {\n  app.init();\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/helpers.js":
/*!**************************************!*\
  !*** ./src/js/components/helpers.js ***!
  \**************************************/
/*! exports provided: helperFuncs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"helperFuncs\", function() { return helperFuncs; });\n/*\n * Helper functions\n */\nvar helperFuncs = {\n  /*\n   * Loads .svg files from img-elements with class 'js-convert-svg'\n   * and inserts them into DOM as <svg>-elements replacing the <img>-tag.\n   */\n  convertSVG: function convertSVG() {\n    // If SVG isn't supported, abort.\n    if (typeof SVGRect == 'undefined') return;\n    var convertElems = document.querySelectorAll('img.js-convert-svg[src$=\".svg\"]');\n    convertElems.forEach(function (el) {\n      var imgUrl = el.src;\n      var attributes = el.attributes;\n      var ajax = new XMLHttpRequest();\n      ajax.open('GET', imgUrl, true);\n      ajax.send();\n\n      ajax.onload = function (e) {\n        var svgString = ajax.responseText;\n        var svgEl = helperFuncs.stringToHTML(svgString);\n        var attributeEntries = Object.entries(attributes); // Add attributes from the img-element to the new svg-element\n\n        attributeEntries.forEach(function (attr) {\n          var attrObj = attr[1]; // If object isn't available or the attribute is 'src' don't run any logic\n\n          if (!attrObj || attrObj.name == 'src') return;\n          svgEl.setAttribute(attrObj.name, attrObj.value); // Add a class indicating the object has been loaded\n          //svgEl.classList.add('js-converted');\n        });\n        el.replaceWith(svgEl);\n      };\n    });\n  },\n\n  /*\n  * Turn array into string for PHP-usage\n  * https://stackoverflow.com/a/19429400/1166965\n  */\n  arrayToKeyValueString: function arrayToKeyValueString(name, arr) {\n    var str = name + '[]=';\n\n    for (var i = 0; i < arr.length; i++) {\n      arr[i] = encodeURIComponent(arr[i]);\n    }\n\n    str += arr.join('&' + name + '[]=');\n    return str;\n  },\n\n  /*\n   * Takes string and parses it into a HTML-object\n   */\n  stringToHTML: function stringToHTML(str) {\n    var parser = new DOMParser();\n    var doc = parser.parseFromString(str, 'text/html');\n    return doc.body.childNodes[0];\n  },\n\n  /*\n     * Makes sure the child element is the same height as nearest parent\n     */\n  setElHeightFromParent: function setElHeightFromParent() {\n    window.addEventListener('load', function (event) {\n      var elements = document.querySelectorAll('.js-set-height-parent');\n\n      if (elements) {\n        elements.forEach(function (el, index) {\n          var parentHeight = el.parentElement.offsetHeight;\n          el.style.height = parentHeight + 'px';\n        });\n      }\n    });\n  },\n\n  /*\n  * Sets equal heights on all elements matching class\n  */\n  setEqualHeight: function setEqualHeight() {\n    window.addEventListener('load', function (event) {\n      var wrappers = document.querySelectorAll('.js-set-eq-height-wrapper');\n\n      if (wrappers) {\n        wrappers.forEach(function (el, index) {\n          var currHeight = 0;\n          var children = el.children;\n\n          if (children) {\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n              for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                var child = _step.value;\n\n                if (child.offsetHeight > currHeight) {\n                  currHeight = child.offsetHeight;\n                }\n              }\n            } catch (err) {\n              _didIteratorError = true;\n              _iteratorError = err;\n            } finally {\n              try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                  _iterator.return();\n                }\n              } finally {\n                if (_didIteratorError) {\n                  throw _iteratorError;\n                }\n              }\n            }\n\n            var _iteratorNormalCompletion2 = true;\n            var _didIteratorError2 = false;\n            var _iteratorError2 = undefined;\n\n            try {\n              for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                var _child = _step2.value;\n                _child.style.height = currHeight + 'px';\n              }\n            } catch (err) {\n              _didIteratorError2 = true;\n              _iteratorError2 = err;\n            } finally {\n              try {\n                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n                  _iterator2.return();\n                }\n              } finally {\n                if (_didIteratorError2) {\n                  throw _iteratorError2;\n                }\n              }\n            }\n          }\n        });\n      }\n    });\n  },\n\n  /*\n  * Looks if value is in array\n  */\n  checkArray: function checkArray(val, arr) {\n    if (arr.indexOf(val) !== -1) {\n      return arr.indexOf(val);\n    } else {\n      return false;\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./src/js/components/helpers.js?");

/***/ }),

/***/ "./src/js/components/navigationHandler.js":
/*!************************************************!*\
  !*** ./src/js/components/navigationHandler.js ***!
  \************************************************/
/*! exports provided: navHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navHandler\", function() { return navHandler; });\nvar navHandler = {\n  settings: {\n    elements: {\n      nav: '.js-navbar'\n    },\n    vars: {\n      didScroll: false,\n      navbarHeight: 0,\n      lastScrollTop: 0,\n      delta: 10\n    }\n  },\n  init: function init() {//this.toggleStickyNavState();\n  },\n\n  /*\n   * Updates state of navbar depending on scroll\n   */\n  toggleStickyNavState: function toggleStickyNavState() {\n    var _this = this;\n\n    // Hide Header on on scroll down\n    this.settings.vars.navbarHeight = document.querySelector(this.settings.elements.nav).offsetHeight;\n    window.addEventListener('scroll', function () {\n      _this.settings.vars.didScroll = true;\n    });\n    setInterval(function () {\n      if (_this.settings.vars.didScroll) {\n        _this.hasScrolled();\n\n        _this.settings.vars.didScroll = false;\n      }\n    }, 250);\n  },\n\n  /* \n   * Updates sticky nav state depending on scrolling\n   * Modified from: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c\n   */\n  hasScrolled: function hasScrolled() {\n    var scrollTopValue = window.pageYOffset;\n    var navEl = document.querySelector(this.settings.elements.nav); // Make sure they scroll more than delta\n\n    if (Math.abs(this.settings.vars.lastScrollTop - scrollTopValue) <= this.settings.vars.delta) return; // If they scrolled down and are past the navbar, add class .nav-up.\n    // This is necessary so you never see what is \"behind\" the navbar.\n\n    if (scrollTopValue > this.settings.vars.lastScrollTop && scrollTopValue > this.settings.vars.navbarHeight) {\n      // Scroll Down\n      navEl.classList.remove('nav-down');\n      navEl.classList.add('nav-up');\n    } else {\n      // Scroll Up\n      if (scrollTopValue + window.outerHeight < document.body.clientHeight) {\n        navEl.classList.remove('nav-up');\n        navEl.classList.add('nav-down');\n      }\n    }\n\n    if (window.pageYOffset < 200) {\n      navEl.classList.remove('nav-down');\n    }\n\n    this.settings.vars.lastScrollTop = scrollTopValue;\n  }\n};\n\n\n//# sourceURL=webpack:///./src/js/components/navigationHandler.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ })

/******/ });