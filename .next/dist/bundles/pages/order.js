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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./pages/order.scss
var order = __webpack_require__(23);
var order_default = /*#__PURE__*/__webpack_require__.n(order);

// EXTERNAL MODULE: ./pages/request.js
var request = __webpack_require__(1);

// EXTERNAL MODULE: external "next-cookies"
var external__next_cookies_ = __webpack_require__(7);
var external__next_cookies__default = /*#__PURE__*/__webpack_require__.n(external__next_cookies_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(5);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./data.js
/**
 * Created by pdd on 2018/6/10.
 */
var orderData = [{
  name: "旅游1线",
  stations: [{
    name: "南门水陆换乘中心",
    classes: [{
      time: "9:00"
    }, {
      time: "13:20"
    }]
  }, {
    name: "前卫村",
    classes: [{
      time: "11:00"
    }, {
      time: "15:40"
    }]
  }]
}, {
  name: "旅游2线",
  stations: [{
    name: "南门水陆换乘中心",
    classes: [{
      id: "path_2,point_nanmen,9:00",
      // 代码按规则自动生成
      time: "9:00"
    }, {
      time: "13:20"
    }]
  }, {
    name: "明珠湖公园",
    classes: [{
      time: "11:00"
    }, {
      time: "15:40"
    }]
  }]
}];
var pathData = [{
  id: "path_1",
  name: "旅游1线",
  stations: [{
    id: "point_nanmen",
    name: "南门水陆换乘中心",
    type: 'up',
    classes: [{
      id: "path_1,point_nanmen,9:00",
      // 代码按规则自动生成
      time: "9:00"
    }, {
      time: "13:20"
    }]
  }, {
    id: "point_gaojia",
    name: "高家庄园",
    type: 'up',
    classes: [{
      time: "9:00"
    }, {
      time: "13:20"
    }]
  }, {
    id: "point_qianwei",
    name: "前卫村",
    type: 'down',
    classes: [{
      time: "11:00"
    }, {
      time: "15:40"
    }]
  }]
}, {
  id: "path_2",
  name: "旅游2线",
  stations: [{
    id: "point_nanmen",
    name: "南门水陆换乘中心",
    type: 'up',
    classes: [{
      id: "path_2,point_nanmen,9:00",
      // 代码按规则自动生成
      time: "9:00"
    }, {
      time: "13:20"
    }]
  }, {
    id: "point_mingzhuhu",
    name: "明珠湖公园",
    type: 'up',
    classes: [{
      time: "9:45"
    }, {
      time: "14:05"
    }]
  }, {
    id: "point_mingzhuhu_down",
    name: "明珠湖公园",
    type: 'down',
    classes: [{
      time: "11:00"
    }, {
      time: "15:40"
    }]
  }, {
    id: "point_nanmen_down",
    name: "南门水陆换乘中心",
    type: 'down',
    classes: [{
      time: "11:45"
    }, {
      time: "16:25"
    }]
  }]
}];
pathData.map(function (path) {
  var pathId = path.id;
  path.stations.map(function (station) {
    var stationId = station.id;
    station.classes.map(function (cls) {
      var clsTime = cls.time;
      cls.id = "".concat(pathId, "@").concat(stationId, "@").concat(clsTime);
    });
  });
});
console.log(pathData);
/* harmony default export */ var data = ({
  pathData: pathData,
  orderData: orderData
});
// EXTERNAL MODULE: ./pages/components/order-info.js
var order_info = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/order.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return order_Order; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Created by pdd on 2018/6/9.
 */


 // import { getCookie } from './util';




var order_orderData = data.orderData;


var order_Order =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Order, _React$Component);

  function Order(props) {
    var _this;

    _classCallCheck(this, Order);

    _this = _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "renderSuccess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state$orderInfo = _this.state.orderInfo,
            order_date = _this$state$orderInfo.order_date,
            order_path = _this$state$orderInfo.order_path,
            order_station = _this$state$orderInfo.order_station,
            order_class = _this$state$orderInfo.order_class,
            order_ticket_count = _this$state$orderInfo.order_ticket_count;
        var _this$props = _this.props,
            order_owner = _this$props.username,
            order_mobile = _this$props.mobile;
        return external__react__default.a.createElement("div", {
          className: "order-success-page"
        }, external__react__default.a.createElement("div", {
          className: "log"
        }), external__react__default.a.createElement("div", {
          className: "success-title"
        }, "\u63D0\u4EA4\u6210\u529F"), external__react__default.a.createElement(order_info["default"], _extends({}, _this.state.orderInfo, {
          order_owner: order_owner,
          order_mobile: order_mobile
        })));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "submit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        for (var item in _this.state.orderInfo) {
          if (!_this.state.orderInfo[item]) {
            alert('信息不能有空');
            return;
          }
        }

        var _this$props2 = _this.props,
            order_owner = _this$props2.username,
            order_mobile = _this$props2.mobile;
        request["default"].post('/cbo/addOrder', _objectSpread({}, _this.state.orderInfo, {
          order_owner: order_owner,
          order_mobile: order_mobile,
          order_schedules_id: 0,
          status: 'new'
        })).then(function (response) {
          console.log(response);

          if (response.data.code === 0) {
            _this.setState({
              status: 1
            });
          }
        }).catch(function (error) {});
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "renderStationsSelect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var selectPath = order_orderData.filter(function (path) {
          return path.name === _this.state.orderInfo.order_path;
        });

        if (selectPath && selectPath.length > 0) {
          return selectPath[0].stations.map(function (station) {
            return external__react__default.a.createElement("option", {
              key: station.name,
              value: station.name
            }, station.name);
          });
        }

        return null;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "renderClsSelect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var selectPath = order_orderData.filter(function (path) {
          return path.name === _this.state.orderInfo.order_path;
        });

        if (selectPath && selectPath.length > 0) {
          var stations = selectPath[0].stations; // console.log(selectPath, '1112')
          // console.log(stations, '111')

          var selectStations = stations.filter(function (station) {
            return station.name === _this.state.orderInfo.order_station;
          });

          if (selectStations && selectStations.length > 0) {
            var classes = selectStations[0].classes;
            return classes.map(function (cls) {
              return external__react__default.a.createElement("option", {
                key: cls.time,
                value: cls.time
              }, cls.time);
            });
          }
        }

        return null;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "renderOrder", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state$orderInfo2 = _this.state.orderInfo,
            order_date = _this$state$orderInfo2.order_date,
            order_path = _this$state$orderInfo2.order_path,
            order_station = _this$state$orderInfo2.order_station,
            order_class = _this$state$orderInfo2.order_class,
            order_ticket_count = _this$state$orderInfo2.order_ticket_count;
        return external__react__default.a.createElement("div", {
          className: "order-page"
        }, external__react__default.a.createElement("div", {
          className: "form-content"
        }, external__react__default.a.createElement("div", {
          className: "item"
        }, external__react__default.a.createElement("span", null, "\u9009\u62E9\u65E5\u671F"), external__react__default.a.createElement("input", {
          type: "date",
          value: order_date,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_date: e.target.value
              })
            });
          }
        })), external__react__default.a.createElement("div", {
          className: "item"
        }, external__react__default.a.createElement("span", null, "\u9009\u62E9\u8DEF\u7EBF"), external__react__default.a.createElement("select", {
          value: order_path,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_path: e.target.value
              })
            });
          }
        }, external__react__default.a.createElement("option", {
          key: 'null',
          value: ''
        }, '请选择'), order_orderData.map(function (path) {
          return external__react__default.a.createElement("option", {
            key: path.name,
            value: path.name
          }, path.name);
        }))), external__react__default.a.createElement("div", {
          className: "item"
        }, external__react__default.a.createElement("span", null, "\u9009\u62E9\u7AD9\u70B9"), external__react__default.a.createElement("select", {
          value: order_station,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_station: e.target.value
              })
            });
          }
        }, external__react__default.a.createElement("option", {
          key: 'null',
          value: ''
        }, '请选择'), _this.renderStationsSelect())), external__react__default.a.createElement("div", {
          className: "item"
        }, external__react__default.a.createElement("span", null, "\u9009\u62E9\u73ED\u6B21"), external__react__default.a.createElement("select", {
          value: order_class,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_class: e.target.value
              })
            });
          }
        }, external__react__default.a.createElement("option", {
          key: 'null',
          value: ''
        }, '请选择'), _this.renderClsSelect())), external__react__default.a.createElement("div", {
          className: "item"
        }, external__react__default.a.createElement("span", null, "\u5EA7\u4F4D\u9884\u8BA2"), external__react__default.a.createElement("select", {
          value: order_ticket_count,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_ticket_count: e.target.value
              })
            });
          }
        }, external__react__default.a.createElement("option", {
          value: "1"
        }, "1\u4EBA"), external__react__default.a.createElement("option", {
          value: "2"
        }, "2\u4EBA"), external__react__default.a.createElement("option", {
          value: "3"
        }, "3\u4EBA"), external__react__default.a.createElement("option", {
          value: "4"
        }, "4\u4EBA"))), external__react__default.a.createElement("div", {
          className: "tip"
        }, "\u8BF7\u4ED4\u7EC6\u6838\u5BF9\u9884\u7EA6\u4FE1\u606F"), external__react__default.a.createElement("button", {
          className: "submit",
          onClick: _this.submit
        }, "\u63D0\u4EA4"), external__react__default.a.createElement("div", {
          className: 1
        })));
      }
    });
    _this.state = {
      orderInfo: {
        // order_date: '2018.6.7',
        // order_path: '旅游1线',
        // order_station: '南门换乘车站',
        // order_class: '9:00',
        // order_ticket_count: 2,
        // order_owner: '曾超',
        // order_mobile: '13636672480',
        order_date: '',
        order_path: '',
        order_station: '',
        order_class: '',
        order_ticket_count: 1 // order_owner: getCookie('username'),
        // order_mobile: getCookie('mobile'),

      },
      status: 0
    };
    return _this;
  }

  _createClass(Order, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.document.title = "旅游巴士在线预订";
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.status === 1) {
        return this.renderSuccess();
      }

      return this.renderOrder();
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(ctx) {
        var _cookies, mobile, username, res;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _cookies = external__next_cookies__default()(ctx), mobile = _cookies.mobile, username = _cookies.username;
                console.log('mobile:', mobile);
                res = ctx.res;

                if (res) {
                  if (!mobile) {
                    res.writeHead(302, {
                      Location: '/login'
                    });
                    res.end();
                    res.finished = true;
                  }
                } else {
                  if (!mobile) {
                    router__default.a.push('/login');
                  }
                }

                return _context.abrupt("return", {
                  mobile: mobile,
                  username: username
                });

              case 5:
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

  return Order;
}(external__react__default.a.Component);



/***/ }),
/* 23 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);