webpackHotUpdate(5,{

/***/ "./node_modules/css-loader/lib/url/escape.js":
false,

/***/ "./pages/components/order-info.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_info_scss__ = __webpack_require__("./pages/components/order-info.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_info_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__order_info_scss__);
var _jsxFileName = "/Users/suyuan/workspace/cbo/cm-bus-order/pages/components/order-info.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * Created by pdd on 2018/6/11.
 */


var _default = function _default(props) {
  var order_date = props.order_date,
      order_path = props.order_path,
      order_station = props.order_station,
      order_class = props.order_class,
      order_ticket_count = props.order_ticket_count,
      order_owner = props.order_owner,
      order_mobile = props.order_mobile;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "\u9884\u8BA2\u4FE1\u606F"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "\u9009\u62E9\u65E5\u671F\uFF1A", order_date), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "\u9009\u62E9\u7EBF\u8DEF\uFF1A", order_path), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "\u9009\u62E9\u7AD9\u70B9\uFF1A", order_station), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "\u9009\u62E9\u73ED\u6B21\uFF1A", order_class), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "\u9009\u62E9\u5F20\u6570\uFF1A", order_ticket_count), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "\u9884\u8BA2\u4EBA\uFF1A", order_owner), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "\u624B\u673A\u53F7\uFF1A", order_mobile));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/suyuan/workspace/cbo/cm-bus-order/pages/components/order-info.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/order-info")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/order.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Order; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_scss__ = __webpack_require__("./pages/order.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__order_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request__ = __webpack_require__("./pages/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_cookies__ = __webpack_require__("./node_modules/next-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data__ = __webpack_require__("./data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_order_info__ = __webpack_require__("./pages/components/order-info.js");

var _jsxFileName = "/Users/suyuan/workspace/cbo/cm-bus-order/pages/order.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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




var orderData = __WEBPACK_IMPORTED_MODULE_6__data__["a" /* default */].orderData;


var Order =
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
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "order-success-page",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "log",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "success-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, "\u63D0\u4EA4\u6210\u529F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_order_info__["a" /* default */], _extends({}, _this.state.orderInfo, {
          order_owner: order_owner,
          order_mobile: order_mobile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
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
        __WEBPACK_IMPORTED_MODULE_3__request__["a" /* default */].post('/cbo/addOrder', _objectSpread({}, _this.state.orderInfo, {
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
        var selectPath = orderData.filter(function (path) {
          return path.name === _this.state.orderInfo.order_path;
        });

        if (selectPath && selectPath.length > 0) {
          return selectPath[0].stations.map(function (station) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
              key: station.name,
              value: station.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              }
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
        var selectPath = orderData.filter(function (path) {
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
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
                key: cls.time,
                value: cls.time,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 145
                }
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
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "order-page",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "form-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }, "\u9009\u62E9\u65E5\u671F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
          type: "date",
          value: order_date,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_date: e.target.value
              })
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          }
        }, "\u9009\u62E9\u8DEF\u7EBF"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
          value: order_path,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_path: e.target.value
              })
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          key: 'null',
          value: '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }, '请选择'), orderData.map(function (path) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
            key: path.name,
            value: path.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            }
          }, path.name);
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          }
        }, "\u9009\u62E9\u7AD9\u70B9"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
          value: order_station,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_station: e.target.value
              })
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          key: 'null',
          value: '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          }
        }, '请选择'), _this.renderStationsSelect())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          }
        }, "\u9009\u62E9\u73ED\u6B21"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
          value: order_class,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_class: e.target.value
              })
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          key: 'null',
          value: '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        }, '请选择'), _this.renderClsSelect())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          }
        }, "\u5EA7\u4F4D\u9884\u8BA2"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
          value: order_ticket_count,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_ticket_count: e.target.value
              })
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          }
        }, "1\u4EBA"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          }
        }, "2\u4EBA"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: "3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          }
        }, "3\u4EBA"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: "4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          }
        }, "4\u4EBA"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "tip",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          }
        }, "\u8BF7\u4ED4\u7EC6\u6838\u5BF9\u9884\u7EA6\u4FE1\u606F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          className: "submit",
          onClick: _this.submit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          }
        }, "\u63D0\u4EA4"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          }
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
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
                    __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/login');
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
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(orderData, "orderData", "/Users/suyuan/workspace/cbo/cm-bus-order/pages/order.js");
  reactHotLoader.register(Order, "Order", "/Users/suyuan/workspace/cbo/cm-bus-order/pages/order.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/order")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./static/bingobus.png":
false

})
//# sourceMappingURL=5.1671ffd902b715429277.hot-update.js.map