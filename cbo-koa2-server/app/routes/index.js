'use strict';exports.__esModule = true;var _koaRouter = require('koa-router');var _koaRouter2 = _interopRequireDefault(_koaRouter);
var _indexCtrl = require('../controllers/indexCtrl');var _indexCtrl2 = _interopRequireDefault(_indexCtrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var router = (0, _koaRouter2.default)();

router.post('/', _indexCtrl2.default);

/**
                                        * 游记路由
                                        */
var travelNote = require('./travelNoteRouter');
router.use('/travelNote', travelNote.routes(), travelNote.allowedMethods());
/**
                                                                              * 活动路由
                                                                              */
var activity = require('./activityRouter');
router.use('/activity', activity.routes(), activity.allowedMethods());

/**
                                                                        * 报名路由
                                                                        */
var join = require('./joinRouter');
router.use('/join', join.routes(), join.allowedMethods());

/**
                                                            * 管理员路由
                                                            */
var admin = require('./adminRouter');
router.use('/admin', admin.routes(), admin.allowedMethods());

/**
                                                               * 保单路由
                                                               */
var insurance = require('./insuranceRouter');
router.use('/insurance', insurance.routes(), insurance.allowedMethods());




/**
                                                                           * 保单路由
                                                                           */
var cbo = require('./cboRouter');
router.use('/cbo', cbo.routes(), cbo.allowedMethods());


/**
                                                         * 总路由 hw
                                                         */
// const routers = Router()
// routers.use('/cbo', router.routes(), router.allowedMethods())
exports.default = router;module.exports = exports['default'];
//# sourceMappingURL=index.js.map