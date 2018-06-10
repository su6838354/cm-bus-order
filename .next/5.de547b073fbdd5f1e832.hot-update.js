webpackHotUpdate(5,{

/***/ "./node_modules/component-cookie/index.js":
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var debug = __webpack_require__("./node_modules/debug/src/browser.js")('cookie');

/**
 * Set or get cookie `name` with `value` and `options` object.
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {Mixed}
 * @api public
 */

module.exports = function(name, value, options){
  switch (arguments.length) {
    case 3:
    case 2:
      return set(name, value, options);
    case 1:
      return get(name);
    default:
      return all();
  }
};

/**
 * Set cookie `name` to `value`.
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @api private
 */

function set(name, value, options) {
  options = options || {};
  var str = encode(name) + '=' + encode(value);

  if (null == value) options.maxage = -1;

  if (options.maxage) {
    options.expires = new Date(+new Date + options.maxage);
  }

  if (options.path) str += '; path=' + options.path;
  if (options.domain) str += '; domain=' + options.domain;
  if (options.expires) str += '; expires=' + options.expires.toUTCString();
  if (options.secure) str += '; secure';

  document.cookie = str;
}

/**
 * Return all cookies.
 *
 * @return {Object}
 * @api private
 */

function all() {
  var str;
  try {
    str = document.cookie;
  } catch (err) {
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(err.stack || err);
    }
    return {};
  }
  return parse(str);
}

/**
 * Get cookie `name`.
 *
 * @param {String} name
 * @return {String}
 * @api private
 */

function get(name) {
  return all()[name];
}

/**
 * Parse cookie `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parse(str) {
  var obj = {};
  var pairs = str.split(/ *; */);
  var pair;
  if ('' == pairs[0]) return obj;
  for (var i = 0; i < pairs.length; ++i) {
    pair = pairs[i].split('=');
    obj[decode(pair[0])] = decode(pair[1]);
  }
  return obj;
}

/**
 * Encode.
 */

function encode(value){
  try {
    return encodeURIComponent(value);
  } catch (e) {
    debug('error `encode(%o)` - %o', value, e)
  }
}

/**
 * Decode.
 */

function decode(value) {
  try {
    return decodeURIComponent(value);
  } catch (e) {
    debug('error `decode(%o)` - %o', value, e)
  }
}


/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__("./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/next-cookies/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

const parser = __webpack_require__(5)

/**
 * Export `Cookies`
 */

module.exports = Cookies

/**
 * Cookies function
 */

function Cookies (ctx, options) {
  options = options || {}
  if (ctx.req) {
    // server
    const cookies = ctx.req.headers.cookie
    if (!cookies) return {}
    return parser.parse(cookies, options)
  } else {
    // browser
    return __webpack_require__("./node_modules/component-cookie/index.js")();
  }
}


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

var _jsxFileName = "/Users/suyuan/workspace/cbo/cm-bus-order/pages/order.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
            order_ticket_count = _this$state$orderInfo.order_ticket_count,
            order_owner = _this$state$orderInfo.order_owner,
            order_mobile = _this$state$orderInfo.order_mobile;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "order-success-page",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "log",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "success-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, "\u63D0\u4EA4\u6210\u529F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, "\u9884\u8BA2\u4FE1\u606F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, "\u9009\u62E9\u65E5\u671F\uFF1A", order_date), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, "\u9009\u62E9\u7EBF\u8DEF\uFF1A", order_path), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, "\u9009\u62E9\u7AD9\u70B9\uFF1A", order_station), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, "\u9009\u62E9\u73ED\u6B21\uFF1A", order_class), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, "\u9009\u62E9\u5F20\u6570\uFF1A", order_ticket_count), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, "\u9884\u8BA2\u4EBA\uFF1A", order_owner), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, "\u624B\u673A\u53F7\uFF1A", order_mobile)));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "submit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_3__request__["a" /* default */].post('/cbo/addOrder', _this.state.orderInfo).then(function (response) {}).catch(function (error) {});
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
                lineNumber: 114
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
                  lineNumber: 130
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
            order_ticket_count = _this$state$orderInfo2.order_ticket_count,
            order_owner = _this$state$orderInfo2.order_owner,
            order_mobile = _this$state$orderInfo2.order_mobile;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "order-page",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, "\u9009\u62E9\u65E5\u671F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
          type: "date",
          value: order_date,
          onChange: function onChange(e) {
            _this.setState({
              orderInfo: _objectSpread({}, _this.state.orderInfo, {
                order_path: e.target.value
              })
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
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
            lineNumber: 160
          }
        }, orderData.map(function (path) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
            key: path.name,
            value: path.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            }
          }, path.name);
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
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
            lineNumber: 174
          }
        }, _this.renderStationsSelect())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
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
            lineNumber: 184
          }
        }, _this.renderClsSelect())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
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
            lineNumber: 194
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }, "1\u4EBA"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        }, "2\u4EBA"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: "3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          }
        }, "3\u4EBA"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: "4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          }
        }, "4\u4EBA"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          }
        }, "\u8BF7\u4ED4\u7EC6\u6838\u5BF9\u9884\u7EA6\u4FE1\u606F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          onClick: _this.submit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        }, "\u63D0\u4EA4")));
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

      }
    };
    return _this;
  }

  _createClass(Order, [{
    key: "render",
    value: function render() {
      // return this.renderSuccess();
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

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

})
//# sourceMappingURL=5.de547b073fbdd5f1e832.hot-update.js.map