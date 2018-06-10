webpackHotUpdate(5,{

/***/ "./data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/**
 * Created by pdd on 2018/6/10.
 */
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
    }, {
      time: "11:45"
    }, {
      time: "16:25"
    }]
  }, {
    id: "point_mingzhuhu",
    name: "明珠湖公园",
    type: 'up',
    classes: [{
      time: "9:45"
    }, {
      time: "14:05"
    }, {
      time: "11:00"
    }, {
      time: "15:40"
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
var _default = {
  pathData: pathData
};
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(pathData, "pathData", "/Users/suyuan/workspace/cbo/cm-bus-order/data.js");
  reactHotLoader.register(_default, "default", "/Users/suyuan/workspace/cbo/cm-bus-order/data.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.3c48bca57accb7da9f4a.hot-update.js.map