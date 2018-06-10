webpackHotUpdate(6,{

/***/ "./pages/order-history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderHistory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_history_scss__ = __webpack_require__("./pages/order-history.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_history_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__order_history_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_order_info__ = __webpack_require__("./pages/components/order-info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_cookies__ = __webpack_require__("./node_modules/next-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request__ = __webpack_require__("./pages/request.js");

var _jsxFileName = "/Users/suyuan/workspace/cbo/cm-bus-order/pages/order-history.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

        _this.state.list.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_order_info__["a" /* default */], _extends({}, item, {
            order_owner: username,
            order_mobile: mobile,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
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
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "order-history-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, this.renderList());
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
        var _this2 = this;

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
                __WEBPACK_IMPORTED_MODULE_5__request__["a" /* default */].post('/cbo/list_search', {
                  mobile: mobile
                }).then(function (response) {
                  if (response.data.code === 0) {
                    _this2.setState({
                      list: response.data.data
                    });
                  }
                });
                return _context.abrupt("return", {
                  mobile: mobile,
                  username: username
                });

              case 16:
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


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OrderHistory, "OrderHistory", "/Users/suyuan/workspace/cbo/cm-bus-order/pages/order-history.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/order-history")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.00cf16a5e15ae1b30e9f.hot-update.js.map