module.exports=__NEXT_REGISTER_PAGE("/main",function(){var e=webpackJsonp([5],{134:function(e,n){e.exports=function e(n){if("string"!==typeof n)return n;/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1));if(/["'() \t\n]/.test(n))return'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"';return n}},232:function(e,n){e.exports="/_next/static/images/logobus-42a381e9b6f12263f0ac59ab9da66a29.png"},233:function(e,n,t){e.exports=t(234)},234:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:true});t.d(n,"default",function(){return x});var r=t(25);var o=t.n(r);var a=t(235);var s=t.n(a);var c=t(133);var i=t.n(c);var u=t(5);var f=t.n(u);var l=t(66);var p=t.n(l);var C=t(65);var d=t.n(C);function m(e){m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(n){return typeof n}:function e(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};return m(e)}function h(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function s(e,n){try{var t=a[e](n);var s=t.value}catch(e){o(e);return}t.done?r(s):Promise.resolve(s).then(c,i)}function c(e){s("next",e)}function i(e){s("throw",e)}c()})}}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}function y(e,n,t){n&&g(e.prototype,n);t&&g(e,t);return e}function F(e,n){if(n&&("object"===m(n)||"function"===typeof n))return n;return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var x=function(e){w(n,e);function n(){v(this,n);return F(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}y(n,[{key:"render",value:function e(){var n=this.props,t=n.mobile,r=n.username;return f.a.createElement("div",{className:"main-page"},f.a.createElement("button",{className:"btn",onClick:function e(){d.a.push("/order")}},"在线预订"),f.a.createElement("button",{className:"btn",onClick:function e(){d.a.push("/order-history")}},"预订查询"),f.a.createElement("button",{className:"btn",onClick:function e(){d.a.push("/path-info")}},"公交线路"),t?f.a.createElement("button",{className:"btn",onClick:function e(){d.a.push("/person")}},"个人中心"):f.a.createElement("button",{className:"btn login",onClick:function e(){d.a.push("/login")}},"登录"))}}],[{key:"getInitialProps",value:function(){var e=h(o.a.mark(function e(n){var t,r,a,s;return o.a.wrap(function e(o){while(1)switch(o.prev=o.next){case 0:t=p()(n),r=t.mobile,a=t.username;console.log("mobile:",r);s=n.res;s,!r;return o.abrupt("return",{mobile:r,username:a});case 5:case"end":return o.stop()}},e,this)}));return function n(t){return e.apply(this,arguments)}}()}]);return n}(f.a.Component)},270:function(e,n){e.exports="/_next/static/images/main-bk-76fb8639f59d6c81d34d1785b5d1a0dc.jpg"},65:function(e,n,t){e.exports=t(49)},66:function(e,n,t){const r=t(67);e.exports=o;function o(e,n){n=n||{};if(e.req){const t=e.req.headers.cookie;if(!t)return{};return r.parse(t,n)}return t(68)()}},67:function(e,n){},68:function(e,n,t){var r=t(69)("cookie");e.exports=function(e,n,t){switch(arguments.length){case 3:case 2:return o(e,n,t);case 1:return s(e);default:return a()}};function o(e,n,t){t=t||{};var r=i(e)+"="+i(n);null==n&&(t.maxage=-1);t.maxage&&(t.expires=new Date(+new Date+t.maxage));t.path&&(r+="; path="+t.path);t.domain&&(r+="; domain="+t.domain);t.expires&&(r+="; expires="+t.expires.toUTCString());t.secure&&(r+="; secure");document.cookie=r}function a(){var e;try{e=document.cookie}catch(e){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(e.stack||e);return{}}return c(e)}function s(e){return a()[e]}function c(e){var n={};var t=e.split(/ *; */);var r;if(""==t[0])return n;for(var o=0;o<t.length;++o){r=t[o].split("=");n[u(r[0])]=u(r[1])}return n}function i(e){try{return encodeURIComponent(e)}catch(n){r("error `encode(%o)` - %o",e,n)}}function u(e){try{return decodeURIComponent(e)}catch(n){r("error `decode(%o)` - %o",e,n)}}},69:function(e,n,t){(function(r){n=e.exports=t(70);n.log=s;n.formatArgs=a;n.save=c;n.load=i;n.useColors=o;n.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u();n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function o(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return true;if("undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return false;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}n.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}};function a(e){var t=this.useColors;e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff);if(!t)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0;var a=0;e[0].replace(/%[a-zA-Z%]/g,function(e){if("%%"===e)return;o++;"%c"===e&&(a=o)});e.splice(a,0,r)}function s(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function c(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(e){}}function i(){var e;try{e=n.storage.debug}catch(e){}!e&&"undefined"!==typeof r&&"env"in r&&(e=r.env.DEBUG);return e}n.enable(i());function u(){try{return window.localStorage}catch(e){}}}).call(n,t(21))},70:function(e,n,t){n=e.exports=o.debug=o["default"]=o;n.coerce=u;n.disable=c;n.enable=s;n.enabled=i;n.humanize=t(71);n.instances=[];n.names=[];n.skips=[];n.formatters={};function r(e){var t=0,r;for(r in e){t=(t<<5)-t+e.charCodeAt(r);t|=0}return n.colors[Math.abs(t)%n.colors.length]}function o(e){var t;function o(){if(!o.enabled)return;var e=o;var r=+new Date;var a=r-(t||r);e.diff=a;e.prev=t;e.curr=r;t=r;var s=new Array(arguments.length);for(var c=0;c<s.length;c++)s[c]=arguments[c];s[0]=n.coerce(s[0]);"string"!==typeof s[0]&&s.unshift("%O");var i=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(t,r){if("%%"===t)return t;i++;var o=n.formatters[r];if("function"===typeof o){var a=s[i];t=o.call(e,a);s.splice(i,1);i--}return t});n.formatArgs.call(e,s);var u=o.log||n.log||console.log.bind(console);u.apply(e,s)}o.namespace=e;o.enabled=n.enabled(e);o.useColors=n.useColors();o.color=r(e);o.destroy=a;"function"===typeof n.init&&n.init(o);n.instances.push(o);return o}function a(){var e=n.instances.indexOf(this);if(-1!==e){n.instances.splice(e,1);return true}return false}function s(e){n.save(e);n.names=[];n.skips=[];var t;var r=("string"===typeof e?e:"").split(/[\s,]+/);var o=r.length;for(t=0;t<o;t++){if(!r[t])continue;e=r[t].replace(/\*/g,".*?");"-"===e[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$"))}for(t=0;t<n.instances.length;t++){var a=n.instances[t];a.enabled=n.enabled(a.namespace)}}function c(){n.enable("")}function i(e){if("*"===e[e.length-1])return true;var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return false;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return true;return false}function u(e){if(e instanceof Error)return e.stack||e.message;return e}},71:function(e,n){var t=1e3;var r=60*t;var o=60*r;var a=24*o;var s=365.25*a;e.exports=function(e,n){n=n||{};var t=typeof e;if("string"===t&&e.length>0)return c(e);if("number"===t&&false===isNaN(e))return n.long?u(e):i(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function c(e){e=String(e);if(e.length>100)return;var n=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!n)return;var c=parseFloat(n[1]);var i=(n[2]||"ms").toLowerCase();switch(i){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"days":case"day":case"d":return c*a;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}function i(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}function u(e){return f(e,a,"day")||f(e,o,"hour")||f(e,r,"minute")||f(e,t,"second")||e+" ms"}function f(e,n,t){if(e<n)return;if(e<1.5*n)return Math.floor(e/n)+" "+t;return Math.ceil(e/n)+" "+t+"s"}}},[233]);return{page:e.default}});