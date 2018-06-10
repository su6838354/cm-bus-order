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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
 // import store from '@/store'
// import { getToken } from '@/utils/auth'
// 创建axios实例

var service = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: 'http://139.196.243.147:3002',
  // api的base_url
  timeout: 10000 // 请求超时时间

}); // request拦截器

service.interceptors.request.use(function (config) {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config;
}, function (error) {
  console.log(error); // for debug

  message.error(error.message);
  Promise.reject(error);
}); // respone拦截器
// service.interceptors.response.use(
//   ({ data, config, status }) => {
//     if (config.method === 'delete' && status === 204) {
//       return {data, code: 0, message: 'delete success'}
//     } else if (data.code !== 0) {
//       message.error(data.message)
//       return Promise.reject(new Error(data))
//     } else {
//       return data
//     }
//   },
//   /**
//   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
//   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
//   */
//   //  const res = response.data;
//   //     if (res.code !== 20000) {
//   //       Message({
//   //         message: res.message,
//   //         type: 'error',
//   //         duration: 5 * 1000
//   //       });
//   //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//   //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//   //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//   //           confirmButtonText: '重新登录',
//   //           cancelButtonText: '取消',
//   //           type: 'warning'
//   //         }).then(() => {
//   //           store.dispatch('FedLogOut').then(() => {
//   //             location.reload();// 为了重新实例化vue-router对象 避免bug
//   //           });
//   //         })
//   //       }
//   //       return Promise.reject('error');
//   //     } else {
//   //       return response.data;
//   //     }
//   error => {
//     console.log('err' + error)// for debug
//     message.error(error.message)
//     return Promise.reject(error)
//   })

/* harmony default export */ __webpack_exports__["default"] = (service);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderHistory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_history_scss__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_history_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__order_history_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_order_info__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_cookies__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request__ = __webpack_require__(1);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Created by pdd on 2018/6/10.
 */






var OrderHistory =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OrderHistory, _React$Component);

  function OrderHistory(props) {
    var _this;

    _classCallCheck(this, OrderHistory);

    _this = _possibleConstructorReturn(this, (OrderHistory.__proto__ || Object.getPrototypeOf(OrderHistory)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "renderList", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            username = _this$props.username,
            mobile = _this$props.mobile;
        return _this.state.list.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_order_info__["default"], _extends({}, item, {
            order_owner: username,
            order_mobile: mobile
          })));
        });
      }
    });
    _this.state = {
      list: []
    };
    return _this;
  }

  _createClass(OrderHistory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.document.title = '旅游巴士预订信息';
      __WEBPACK_IMPORTED_MODULE_5__request__["default"].post('/cbo/list_by_mobile', {
        mobile: this.props.mobile
      }).then(function (response) {
        console.log('--', response.data.data);

        if (response.data.code === 0) {
          _this2.setState({
            list: response.data.data
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "order-history-page"
      }, this.renderList());
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var _cookies, mobile, username, res;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _cookies = __WEBPACK_IMPORTED_MODULE_4_next_cookies___default()(ctx), mobile = _cookies.mobile, username = _cookies.username;
                console.log('mobile:', mobile);
                res = ctx.res;

                if (!res) {
                  _context.next = 11;
                  break;
                }

                if (mobile) {
                  _context.next = 9;
                  break;
                }

                res.writeHead(302, {
                  Location: '/login'
                });
                res.end();
                res.finished = true;
                return _context.abrupt("return");

              case 9:
                _context.next = 14;
                break;

              case 11:
                if (mobile) {
                  _context.next = 14;
                  break;
                }

                Router.push('/login');
                return _context.abrupt("return");

              case 14:
                return _context.abrupt("return", {
                  mobile: mobile,
                  username: username
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return OrderHistory;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),
/* 20 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);