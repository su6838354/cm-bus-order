'use strict';exports.__esModule = true;var _stringify = require('babel-runtime/core-js/json/stringify');var _stringify2 = _interopRequireDefault(_stringify);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var http = require('http');
var urlencode = require('urlencode');

//参数的配置 请登录zz.253.com 获取以下API信息 ↓↓↓↓↓↓↓
// API账号
var account = "shoukaihu8";
// API密码
var password = "Dengmixx253";
//接口域名
var sms_host = 'sapi.253.com';

//手机号码
var phone = "";

// 设置您要发送的内容：其中“【】”中括号为运营商签名符号，多签名内容前置添加提交

var msg = "【趣游崇明】您的登录验证码为: 4472, 请注意保密, 十五分钟内有效。";



// 普通短信发送URL
var send_sms_uri = '/msg/HttpBatchSendSM';

//余额查询的URL
var query_balance_uri = '/msg/balance/json';

// send_sms(send_sms_uri,account,password,phone,msg);

// query_blance(query_balance_uri,account,password);

var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

function PostCode(uri, params) {
    // Build the post string from an object
    var post_data = querystring.stringify(params);

    // An object of options to indicate where to post to
    var post_options = {
        host: sms_host,
        port: '80',
        path: uri,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data) } };



    // Set up the request
    var post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(post_data);
    post_req.end();

}

// 发送短信方法
function send_sms(uri, account, password, phone, msg) {

    var post_data = { // 这是需要提交的数据 
        'account': account,
        'pswd': password,
        'mobile': phone,
        'msg': msg,
        'needstatus': 'false', 'extno': '' };


    console.log(uri);
    PostCode(uri, post_data);

    // var content =  JSON.stringify(post_data);
    // content = urlencode.stringify(post_data);
    // // headers = {"Content-type": "application/x-www-form-urlencoded", "Accept": "text/plain"}
    // post(uri,content,sms_host);

}

// 查询余额方法
function query_blance(uri, content, host) {

    var post_data = { // 这是需要提交的数据 
        'account': account,
        'password': password };

    var content = (0, _stringify2.default)(post_data);
    post(uri, content, sms_host);
}

function post(uri, content, host) {
    var options = {
        hostname: host,
        port: 80,
        path: uri,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8' } };


    var req = http.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);

        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    req.write(content);

    req.end();
}


var codes = {};



function sendSms(phone) {
    var code = Math.floor(Math.random() * 1000);
    codes[phone] = '3' + code;
    var msg = '\u60A8\u7684\u767B\u5F55\u9A8C\u8BC1\u7801\u4E3A: 3' + code + ', \u8BF7\u6CE8\u610F\u4FDD\u5BC6, \u5341\u4E94\u5206\u949F\u5185\u6709\u6548\u3002';
    console.log(phone, msg);
    send_sms(send_sms_uri, account, password, phone, msg);
}

// sendSms('13636672480');

function checkOk(phone, code) {
    if (codes[phone] && codes[phone] == code) {
        return true;
    } else {
        return false;
    }
}exports.default =


{
    sendSms: sendSms,
    checkOk: checkOk };module.exports = exports['default'];
//# sourceMappingURL=sms.js.map