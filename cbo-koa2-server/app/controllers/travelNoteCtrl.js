'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _assign = require('babel-runtime/core-js/object/assign');var _assign2 = _interopRequireDefault(_assign);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _db_connection = require('../models/db_connection');
var _uitil = require('../uitil');
var _moment = require('moment');var _moment2 = _interopRequireDefault(_moment);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                              * 获取游记列表
                                                                                                                                                                              * @param {*} ctx 
                                                                                                                                                                              * @param {*} next 
                                                                                                                                                                              */
var list = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {var params, limit, pageIndex, type, admin_id, sql, data, count;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            params = ctx.request.body;
            limit = params.limit, pageIndex = params.pageIndex, type = params.type, admin_id = params.admin_id;
            sql = 'select * from hw_travel_note where type=? and admin_id=? and is_show=1 ORDER BY id desc limit ?,?';_context.next = 5;return (
              (0, _db_connection.query)(sql, [type, admin_id, (pageIndex - 1) * limit, limit]));case 5:data = _context.sent;_context.next = 8;return (
              (0, _db_connection.query)('select count(*) as count from hw_travel_note where type=? and admin_id=? and is_show=1', [type, admin_id]));case 8:count = _context.sent;
            ctx.body = (0, _assign2.default)({ code: 0, message: 'success', 'data': data }, (0, _uitil.pagination)(limit, pageIndex, count[0].count));case 10:case 'end':return _context.stop();}}}, _callee, undefined);}));return function list(_x, _x2) {return _ref.apply(this, arguments);};}();


/**
                                                                                                                                                                                                                                                                                                       * 添加， 后台
                                                                                                                                                                                                                                                                                                       * @param {*} ctx
                                                                                                                                                                                                                                                                                                       * @param {*} next
                                                                                                                                                                                                                                                                                                       */
var add = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {var params, title, desc, link_url, image_url, author, view_count, start_date, type, admin_id, sql, data;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            params = ctx.request.body;
            title = params.title, desc = params.desc, link_url = params.link_url, image_url = params.image_url, author = params.author, view_count = params.view_count, start_date = params.start_date, type = params.type, admin_id = params.admin_id;

            sql = 'INSERT into hw_travel_note VALUES(\n              NULL,\'' +
            title + '\',\'' + desc + '\', \'' + link_url + '\', \'' + image_url + '\', \'' + author + '\', \'' + view_count + '\', \'' + start_date + '\', \n              \'' +
            type + '\', \'' + admin_id + '\', \'' + (0, _uitil.getLinuxTimeStamp)() + '\', 1\n          )';

            console.log('add hw_travel_note sql', sql);_context2.next = 6;return (
              (0, _db_connection.query)(sql));case 6:data = _context2.sent;
            // console.log('insert hw_travel_note:', data);
            ctx.body = { code: 0, message: '保存成功', data: data };case 8:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function add(_x3, _x4) {return _ref2.apply(this, arguments);};}();




/**
                                                                                                                                                                                                                   * 更新 管理后台使用
                                                                                                                                                                                                                   * @param {*} ctx
                                                                                                                                                                                                                   * @param {*} next
                                                                                                                                                                                                                   */
var update = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx, next) {var params, id, title, desc, link_url, image_url, author, view_count, start_date, type, admin_id, created_at, sql, res;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
            params = ctx.request.body;
            id =
            params.id, title = params.title, desc = params.desc, link_url = params.link_url, image_url = params.image_url, author = params.author, view_count = params.view_count, start_date = params.start_date, type = params.type, admin_id = params.admin_id, created_at = params.created_at;
            sql = 'update hw_travel_note set title=\'' + title + '\', `desc`=\'' + desc + '\', link_url=\'' + link_url + '\', image_url=\'' + image_url + '\',\n  author=\'' +
            author + '\', view_count=\'' + view_count + '\',\n              start_date=\'' +
            start_date + '\', type=\'' + type + '\', admin_id=' + admin_id + ', created_at=\'' + created_at + '\' where id=' + id;
            console.log('update hw_travel_note sql:', sql);_context3.next = 6;return (
              (0, _db_connection.query)(sql));case 6:res = _context3.sent;
            ctx.body = { code: 0, message: 'success', data: res };case 8:case 'end':return _context3.stop();}}}, _callee3, undefined);}));return function update(_x5, _x6) {return _ref3.apply(this, arguments);};}();





/**
                                                                                                                                                                                                                        * 获取列表,管理后台使用
                                                                                                                                                                                                                        * @param {*} ctx
                                                                                                                                                                                                                        * @param {*} next
                                                                                                                                                                                                                        */
var list_search = function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(ctx, next) {var params, admin_id, id, title, author, limit, pageIndex, type, where, where_sql, first, item, value, activities, sql, data, count;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
            params = ctx.request.body;
            admin_id = params.admin_id, id = params.id, title = params.title, author = params.author, limit = params.limit, pageIndex = params.pageIndex, type = params.type;
            where = {};

            if (id) {
              where['id'] = id;
            }

            if (title) {
              where['title'] = title;
            }

            if (author) {
              where['author'] = author;
            }
            if (type) {
              where['type'] = type;
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

            activities = [];
            if (admin_id && admin_id != 0) {
              if (first) {
                where_sql = 'where admin_id=' + admin_id;
                first = false;
              } else
              {
                where_sql = where_sql + ' and admin_id=' + admin_id;
              }
            }

            sql = 'select A.*, B.club_name from hw_travel_note as A join hw_admin as B \n    on A.admin_id=B.id ' +
            where_sql + ' limit ' + (pageIndex - 1) * limit + ',' + limit;

            console.log('hw_travel_note list sql:', sql);_context4.next = 16;return (
              (0, _db_connection.query)(sql));case 16:data = _context4.sent;_context4.next = 19;return (
              (0, _db_connection.query)('select count(*) as count from hw_travel_note as A ' + where_sql));case 19:count = _context4.sent;

            ctx.body = (0, _assign2.default)({ code: 0, message: 'success', 'data': data }, (0, _uitil.pagination)(limit, pageIndex, count[0].count));case 21:case 'end':return _context4.stop();}}}, _callee4, undefined);}));return function list_search(_x7, _x8) {return _ref4.apply(this, arguments);};}();



/***
                                                                                                                                                                                                                                                                                                                  * 隐藏 展示
                                                                                                                                                                                                                                                                                                                  * @param ctx
                                                                                                                                                                                                                                                                                                                  * @param next
                                                                                                                                                                                                                                                                                                                  * @returns {Promise.<void>}
                                                                                                                                                                                                                                                                                                                  */
var update_show = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ctx, next) {var params, id, is_show, sql, res;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
            params = ctx.request.body;
            id = params.id, is_show = params.is_show;
            sql = 'update hw_travel_note set is_show=\'' + is_show + '\' where id=' + id;
            console.log('update hw_travel_note sql:', sql);_context5.next = 6;return (
              (0, _db_connection.query)(sql));case 6:res = _context5.sent;
            ctx.body = { code: 0, message: 'success', data: res };case 8:case 'end':return _context5.stop();}}}, _callee5, undefined);}));return function update_show(_x9, _x10) {return _ref5.apply(this, arguments);};}();exports.default =




{
  list: list,
  add: add,
  list_search: list_search,
  update: update,
  update_show: update_show };module.exports = exports['default'];
//# sourceMappingURL=travelNoteCtrl.js.map