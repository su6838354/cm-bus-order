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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__("./pages/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_scss__ = __webpack_require__("./pages/login.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__login_scss__);
var _jsxFileName = "/Users/suyuan/workspace/cbo/cm-bus-order/pages/login.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Created by pdd on 2018/6/9.
 */





function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
}

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "login", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state = _this.state,
            username = _this$state.username,
            mobile = _this$state.mobile,
            yanzhema = _this$state.yanzhema;
        __WEBPACK_IMPORTED_MODULE_2__request__["a" /* default */].post('/cbo/login', {
          username: username,
          mobile: mobile,
          yanzhema: yanzhema
        }).then(function (response) {
          var code = response.data.code;

          if (code === 0) {
            setCookie('mobile', mobile, 7);
            setCookie('username', username, 7);

            _this.setState({
              msg: '登录成功'
            });

            window.setTimeout(function () {
              __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/main');
            }, 300);
          } else if (code === 1001) {
            alert('验证码错误');
          }
        }).catch(function (error) {
          console.log(error);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "sendCode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state2 = _this.state,
            mobile = _this$state2.mobile,
            username = _this$state2.username;
        var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则

        if (!username) {
          alert('姓名不能为空');
          return;
        }

        var flag = reg.test(mobile); //true

        if (flag) {
          __WEBPACK_IMPORTED_MODULE_2__request__["a" /* default */].post('/cbo/sendCode', {
            mobile: mobile
          }).then(function (response) {
            console.log(response);

            if (response.data.code === 0) {
              var i = 10;

              var start = function start() {
                if (i === 0) {
                  return;
                }

                i = i - 1;

                _this.setState({
                  reSecond: i
                });

                window.setTimeout(function () {
                  start();
                }, 1000);
              };

              start();
            }
          }).catch(function (error) {
            console.log(error);
          });
        } else {
          alert('请输入正确手机号码');
        }
      }
    });
    _this.state = {
      username: '',
      mobile: '',
      yanzhema: '',
      reSecond: 0,
      msg: ''
    };
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "login-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "log",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        className: "btn",
        onChange: function onChange(e) {
          _this2.setState({
            username: e.target.value
          });
        },
        placeholder: "\u9884\u8BA2\u59D3\u540D",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        className: "btn mobile",
        onChange: function onChange(e) {
          _this2.setState({
            mobile: e.target.value
          });
        },
        placeholder: "\u9884\u8BA2\u624B\u673A\u53F7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "yanzhengma",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        className: "input-yanzhengma",
        onChange: function onChange(e) {
          _this2.setState({
            yanzhema: e.target.value
          });
        },
        placeholder: "\u8F93\u5165\u9A8C\u8BC1\u7801",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        disabled: this.state.reSecond !== 0,
        className: "btn getyanzhengma",
        onClick: this.sendCode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, this.state.reSecond === 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "\u83B7\u53D6\u9A8C\u8BC1\u7801") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, this.state.reSecond, "s"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "login-btn",
        onClick: this.login,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "\u767B\u5F55"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "msg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, this.state.msg));
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./pages/login.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
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

/* harmony default export */ __webpack_exports__["a"] = (service);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/login.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map