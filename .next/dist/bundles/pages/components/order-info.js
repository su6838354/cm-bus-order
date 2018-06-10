module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_info_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_info_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__order_info_scss__);


/**
 * Created by pdd on 2018/6/11.
 */

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var order_date = props.order_date,
      order_path = props.order_path,
      order_station = props.order_station,
      order_class = props.order_class,
      order_ticket_count = props.order_ticket_count,
      order_owner = props.order_owner,
      order_mobile = props.order_mobile;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "title"
  }, "\u9884\u8BA2\u4FE1\u606F"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "\u9009\u62E9\u65E5\u671F\uFF1A", order_date), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "\u9009\u62E9\u7EBF\u8DEF\uFF1A", order_path), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "\u9009\u62E9\u7AD9\u70B9\uFF1A", order_station), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "\u9009\u62E9\u73ED\u6B21\uFF1A", order_class), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "\u9009\u62E9\u5F20\u6570\uFF1A", order_ticket_count), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "\u9884\u8BA2\u4EBA\uFF1A", order_owner), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "\u624B\u673A\u53F7\uFF1A", order_mobile));
});

/***/ }),

/***/ 4:
/***/ (function(module, exports) {



/***/ })

/******/ });