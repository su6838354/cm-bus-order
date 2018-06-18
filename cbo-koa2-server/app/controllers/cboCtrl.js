'use strict';exports.__esModule = true;var _assign = require('babel-runtime/core-js/object/assign');var _assign2 = _interopRequireDefault(_assign);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);



var _db_connection = require('../models/db_connection');
var _uitil = require('../uitil');

var _sms = require('../sms');var _sms2 = _interopRequireDefault(_sms);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                     * 添加报名
                                                                                                                                                                     * @param {*} ctx
                                                                                                                                                                     * @param {*} next
                                                                                                                                                                     */
var addOrder = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {var params, order_date, order_path, order_station, order_class, order_ticket_count, order_owner, order_mobile, order_schedules_id, status, count, create_time, sql, res;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        params = ctx.request.body;

                        order_date =








                        params.order_date, order_path = params.order_path, order_station = params.order_station, order_class = params.order_class, order_ticket_count = params.order_ticket_count, order_owner = params.order_owner, order_mobile = params.order_mobile, order_schedules_id = params.order_schedules_id, status = params.status;_context.next = 4;return (
                            _query_count(order_date, order_path, order_station, order_class));case 4:count = _context.sent;if (!(
                        count >= 20)) {_context.next = 9;break;}
                        ctx.body = { code: 1003, message: '\u62B1\u6B49\uFF0C' + order_date + '\u7684\u7968\u5DF2\u9884\u8BA2\u5B8C!', data: count };_context.next = 16;break;case 9:

                        create_time = Date.now() / 1000;
                        sql = 'INSERT INTO cbo_order VALUES (NULL, \'' + order_owner + '\', \'' + order_mobile + '\', \'' + order_date + '\',\n              \'' +
                        order_path + '\', \'' + order_station + '\', \'' + create_time + '\', \'' + order_ticket_count + '\', \'' + order_class + '\', \n              \'' +
                        order_schedules_id + '\', \'' + status + '\')';
                        console.log('add cbo_order sql:', sql);_context.next = 14;return (
                            (0, _db_connection.query)(sql));case 14:res = _context.sent;
                        ctx.body = { code: 0, message: 'success', data: res };case 16:case 'end':return _context.stop();}}}, _callee, undefined);}));return function addOrder(_x, _x2) {return _ref.apply(this, arguments);};}(); /**
                                                                                                                                                                                                                                   * Created by pdd on 2018/6/10.
                                                                                                                                                                                                                                   */

var sendCode = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {var params, mobile;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                        params = ctx.request.body;
                        mobile = params.mobile;
                        _sms2.default.sendSms(mobile);
                        ctx.body = { code: 0, message: 'success', data: '验证码发生成功' };case 4:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function sendCode(_x3, _x4) {return _ref2.apply(this, arguments);};}();



var login = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx, next) {var params, mobile, username, yanzhema;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                        params = ctx.request.body;
                        mobile = params.mobile, username = params.username, yanzhema = params.yanzhema;
                        if (_sms2.default.checkOk(mobile, yanzhema)) {
                            ctx.body = { code: 0, message: '登录成功', data: '登录成功' };
                        } else {
                            ctx.body = { code: 1001, message: '验证码错误', data: '验证码错误' };
                        }case 3:case 'end':return _context3.stop();}}}, _callee3, undefined);}));return function login(_x5, _x6) {return _ref3.apply(this, arguments);};}();


/**
                                                                                                                                                                              * 获取活动列表
                                                                                                                                                                              * @param {*} ctx
                                                                                                                                                                              * @param {*} next
                                                                                                                                                                              */
// const list = async (ctx, next) => {
//     const params = ctx.request.body;
//     const {order_path, order_date, order_station, order_class} = params;
//     const sql = 'select * from cbo_order where admin_id=? and is_show=1 ORDER BY seq desc limit ?,?';
//     let data = await query(sql, [admin_id, (pageIndex-1)*limit, limit]);
//     let count = await query('select count(*) as count from hw_activity where admin_id=? and is_show=1', [admin_id]);
//     // let join_count = await query('select count(*) as count from hw_join where activity_id=?', [data])
//     data = data.map(item=>{
//         if(item.registrate_end_time < moment().unix()){
//             item.status = 'time_out';
//         }
//         if(item.limit_num<=item.cur_num){
//             item.status = 'full';
//         }
//         return item;
//     });
//
//     ctx.body = Object.assign({code: 0, message: 'success', 'data': data}, pagination(limit, pageIndex, count[0].count));
// }


/**
 * 管理后台使用
 * @param {*} ctx
 * @param {*} next
 */
var list_search = function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(ctx, next) {var params, order_path, order_date, order_station, order_class, _params$limit, limit, _params$pageIndex, pageIndex, where, where_sql, first, item, value, sql, data, count;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                        params = ctx.request.body;
                        order_path = params.order_path, order_date = params.order_date, order_station = params.order_station, order_class = params.order_class;_params$limit =
                        params.limit, limit = _params$limit === undefined ? 1000 : _params$limit, _params$pageIndex = params.pageIndex, pageIndex = _params$pageIndex === undefined ? 1 : _params$pageIndex;
                        where = {};

                        if (order_path) {
                            where['order_path'] = order_path;
                        }

                        if (order_date) {
                            where['order_date'] = order_date;
                        }

                        if (order_station) {
                            where['order_station'] = order_station;
                        }

                        if (order_class) {
                            where['order_class'] = order_class;
                        }


                        where_sql = '';
                        first = true;
                        for (item in where) {
                            value = where[item];
                            if (first) {
                                where_sql = 'where A.' + item + ' like "%' + value + '%"';
                                first = false;
                            } else
                            {
                                where_sql = where_sql + ' and A.' + item + ' like "%' + value + '%"';
                            }
                        }

                        sql = 'select * from cbo_order as A ' + where_sql + ' order by create_time desc limit ' + (pageIndex - 1) * limit + ',' + limit;

                        console.log('cbo_order list sql:', sql);_context4.next = 15;return (
                            (0, _db_connection.query)(sql));case 15:data = _context4.sent;_context4.next = 18;return (
                            (0, _db_connection.query)('select count(*) as count from cbo_order as A ' + where_sql));case 18:count = _context4.sent;

                        ctx.body = (0, _assign2.default)({ code: 0, message: 'success', 'data': data }, (0, _uitil.pagination)(limit, pageIndex, count[0].count));case 20:case 'end':return _context4.stop();}}}, _callee4, undefined);}));return function list_search(_x7, _x8) {return _ref4.apply(this, arguments);};}();



var list_by_mobile = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ctx, next) {var params, mobile, sql, res;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                        params = ctx.request.body;
                        mobile = params.mobile;
                        sql = 'select * from cbo_order where order_mobile="' + mobile + '" order by create_time desc';_context5.next = 5;return (
                            (0, _db_connection.query)(sql));case 5:res = _context5.sent;
                        ctx.body = { code: 0, message: 'success', data: res };case 7:case 'end':return _context5.stop();}}}, _callee5, undefined);}));return function list_by_mobile(_x9, _x10) {return _ref5.apply(this, arguments);};}();


var _query_count = function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(order_date, order_path, order_station, order_class) {var sql, res, count;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                        sql = 'select * from cbo_order where \n    order_date="' +
                        order_date + '" and \n    order_path="' +
                        order_path + '" and \n    order_station="' +
                        order_station + '" and \n    order_class="' +
                        order_class + '"';_context6.next = 3;return (
                            (0, _db_connection.query)(sql));case 3:res = _context6.sent;
                        count = 0;
                        res.map(function (item) {
                            count = count + item.order_ticket_count;
                        });return _context6.abrupt('return',
                        count);case 7:case 'end':return _context6.stop();}}}, _callee6, undefined);}));return function _query_count(_x11, _x12, _x13, _x14) {return _ref6.apply(this, arguments);};}();


var query_count = function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(ctx, next) {var params, order_date, order_path, order_station, order_class, count;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                        params = ctx.request.body;
                        order_date = params.order_date, order_path = params.order_path, order_station = params.order_station, order_class = params.order_class;
                        count = _query_count(order_date, order_path, order_station, order_class);
                        ctx.body = { code: 0, message: 'success', data: count };case 4:case 'end':return _context7.stop();}}}, _callee7, undefined);}));return function query_count(_x15, _x16) {return _ref7.apply(this, arguments);};}();exports.default =


{
    addOrder: addOrder,
    sendCode: sendCode,
    login: login,
    list_search: list_search,
    list_by_mobile: list_by_mobile,
    query_count: query_count };module.exports = exports['default'];
//# sourceMappingURL=cboCtrl.js.map