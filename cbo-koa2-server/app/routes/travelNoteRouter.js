'use strict';exports.__esModule = true;var _koaRouter = require('koa-router');var _koaRouter2 = _interopRequireDefault(_koaRouter);
var _travelNoteCtrl = require('../controllers/travelNoteCtrl');var _travelNoteCtrl2 = _interopRequireDefault(_travelNoteCtrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var router = (0, _koaRouter2.default)();

router.post('/list', _travelNoteCtrl2.default.list);

router.post('/add', _travelNoteCtrl2.default.add);

router.post('/list_search', _travelNoteCtrl2.default.list_search);

router.post('/update', _travelNoteCtrl2.default.update);

router.post('/update_show', _travelNoteCtrl2.default.update_show);exports.default =
router;module.exports = exports['default'];
//# sourceMappingURL=travelNoteRouter.js.map