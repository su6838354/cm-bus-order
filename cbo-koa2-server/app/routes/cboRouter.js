'use strict';exports.__esModule = true;




var _koaRouter = require('koa-router');var _koaRouter2 = _interopRequireDefault(_koaRouter);
var _cboCtrl = require('../controllers/cboCtrl');var _cboCtrl2 = _interopRequireDefault(_cboCtrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                                                 * Created by pdd on 2018/6/10.
                                                                                                                                                                                                 */var router = (0, _koaRouter2.default)();

/**
                                                                                                                                                                                                                                             * 登录
                                                                                                                                                                                                                                             *
                                                                                                                                                                                                                                             *
                                                                                                                                                                                                                                             *
                                                                                                                                                                                                                                             */
router.post('/addOrder', _cboCtrl2.default.addOrder);

router.post('/sendCode', _cboCtrl2.default.sendCode);

router.post('/login', _cboCtrl2.default.login);

router.post('/list_search', _cboCtrl2.default.list_search);

router.post('/list_by_mobile', _cboCtrl2.default.list_by_mobile);exports.default =


router;module.exports = exports['default'];
//# sourceMappingURL=cboRouter.js.map