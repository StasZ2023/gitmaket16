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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/brands.js":
/*!**************************!*\
  !*** ./src/js/brands.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var swiper = document.querySelector(".slider");
var swiper_slide = document.querySelector(".swiper-slide");

if (document.documentElement.clientWidth < 768) {
  swiper.classList.add("swiper");
  swiper_slide.style.width = "230px";
}

var mySwiper = new Swiper(".swiper", {
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      breakpointsBase: "container"
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var all = document.querySelector(".all");
var slider = document.querySelector(".slider__items");
all.addEventListener("click", function (evt) {
  evt.preventDefault();
  all.classList.toggle('arrow__bottom');
  all.classList.toggle('arrow__top');

  if (all.textContent == "Скрыть") {
    all.textContent = "Показать все";
    slider.style.height = "180px";
  } else if (all.textContent == "Показать все") {
    all.textContent = "Скрыть";
    slider.style.height = "auto";
  }
});

/***/ }),

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var burger = document.querySelector('.burger');
var search = document.querySelector('.header__item');
var itemNone = document.querySelector('.header__item-none');
var linkNone = document.querySelector('.header__link');
var header = document.querySelector('.header');
var decor = document.querySelector('.header__decorative');
burger.addEventListener('click', function (evt) {
  evt.preventDefault();
  burger.classList.toggle('open__burger');
  search.classList.toggle('open__search');
  itemNone.classList.toggle('header__link--none');
  linkNone.classList.toggle('header__link--none');
  header.classList.toggle('open');
  decor.classList.toggle('header__decorative--none');
});

if (document.documentElement.clientWidth > 1440) {
  header.classList.toggle("open");
}

/***/ }),

/***/ "./src/js/connection.js":
/*!******************************!*\
  !*** ./src/js/connection.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var message = document.querySelectorAll('.contact__message');
var Open = document.querySelector('.connection');
var close = document.querySelector('.connection__btn');

var _iterator = _createForOfIteratorHelper(message),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var btn = _step.value;
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      Open.classList.add('open');
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  Open.classList.remove('open');
});

/***/ }),

/***/ "./src/js/dell.js":
/*!************************!*\
  !*** ./src/js/dell.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var message = document.querySelectorAll('.contact__phone');
var Open = document.querySelector('.dell');
var close = document.querySelector('.dell__btn');

var _iterator = _createForOfIteratorHelper(message),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var btn = _step.value;
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      Open.classList.add('open');
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  Open.classList.remove('open');
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/header.scss */ "./src/scss/header.scss");
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/menu.scss */ "./src/scss/menu.scss");
/* harmony import */ var _scss_menu_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_menu_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_services_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/services.scss */ "./src/scss/services.scss");
/* harmony import */ var _scss_services_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_services_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_brands_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/brands.scss */ "./src/scss/brands.scss");
/* harmony import */ var _scss_brands_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_brands_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scss_types_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/types.scss */ "./src/scss/types.scss");
/* harmony import */ var _scss_types_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_types_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scss_price_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/price.scss */ "./src/scss/price.scss");
/* harmony import */ var _scss_price_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_price_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/footer.scss */ "./src/scss/footer.scss");
/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_footer_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scss_connection_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/connection.scss */ "./src/scss/connection.scss");
/* harmony import */ var _scss_connection_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_connection_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scss_dell_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scss/dell.scss */ "./src/scss/dell.scss");
/* harmony import */ var _scss_dell_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_dell_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../js/burger */ "./src/js/burger.js");
/* harmony import */ var _js_burger__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_burger__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _js_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../js/services */ "./src/js/services.js");
/* harmony import */ var _js_services__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_js_services__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _js_brands__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../js/brands */ "./src/js/brands.js");
/* harmony import */ var _js_brands__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_brands__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _js_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../js/types */ "./src/js/types.js");
/* harmony import */ var _js_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_js_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _js_price__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../js/price */ "./src/js/price.js");
/* harmony import */ var _js_price__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_js_price__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _js_connection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../js/connection */ "./src/js/connection.js");
/* harmony import */ var _js_connection__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_js_connection__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _js_dell__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../js/dell */ "./src/js/dell.js");
/* harmony import */ var _js_dell__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_js_dell__WEBPACK_IMPORTED_MODULE_16__);


















/***/ }),

/***/ "./src/js/price.js":
/*!*************************!*\
  !*** ./src/js/price.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var price__swiper = document.querySelector('.price__swiper');

if (document.documentElement.clientWidth < 768) {
  price__swiper.classList.add("swiper");
}

var mySwiper3 = new Swiper(".swiper", {
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      breakpointsBase: "container"
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/***/ }),

/***/ "./src/js/services.js":
/*!****************************!*\
  !*** ./src/js/services.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var servicBtn = document.querySelector('.services__button');
var servicText = document.querySelector('.services__text');
var servisBtnText = document.querySelector('.services__button--text');
servicBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  servicText.classList.toggle('open--text');

  if (servisBtnText.textContent == 'Читать далее') {
    servisBtnText.textContent = 'Скрыть';
  } else if (servisBtnText.textContent == 'Скрыть') {
    servisBtnText.textContent = 'Читать далее';
  }
});

/***/ }),

/***/ "./src/js/types.js":
/*!*************************!*\
  !*** ./src/js/types.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var types__swiper = document.querySelector('.types__swiper');

if (document.documentElement.clientWidth < 768) {
  types__swiper.classList.add("swiper");
}

var mySwiper2 = new Swiper(".swiper", {
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      breakpointsBase: "container"
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/***/ }),

/***/ "./src/scss/brands.scss":
/*!******************************!*\
  !*** ./src/scss/brands.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/connection.scss":
/*!**********************************!*\
  !*** ./src/scss/connection.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/dell.scss":
/*!****************************!*\
  !*** ./src/scss/dell.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/footer.scss":
/*!******************************!*\
  !*** ./src/scss/footer.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/menu.scss":
/*!****************************!*\
  !*** ./src/scss/menu.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/price.scss":
/*!*****************************!*\
  !*** ./src/scss/price.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/services.scss":
/*!********************************!*\
  !*** ./src/scss/services.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/types.scss":
/*!*****************************!*\
  !*** ./src/scss/types.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map