/**
 * Created by pdd on 2018/6/10.
 */

import {query} from '../models/db_connection';
import { pagination, getLinuxTimeStamp} from '../uitil';

import sms from '../sms';

/**
 * 添加报名
 * @param {*} ctx
 * @param {*} next
 */
const addOrder = async(ctx, next) => {
    const params = ctx.request.body;
    const {
        order_date,
        order_path,
        order_station,
        order_class,
        order_ticket_count,
        order_owner,
        order_mobile,
        order_schedules_id,
        status
    } = params;
    const create_time = Date.now()/1000;
    const sql = `INSERT INTO cbo_order VALUES (NULL, '${order_owner}', '${order_mobile}', '${order_date}',
              '${order_path}', '${order_station}', '${create_time}', '${order_ticket_count}', '${order_class}', 
              '${order_schedules_id}', '${status}')`;
    console.log('add cbo_order sql:', sql);
    const res = await query(sql);
    ctx.body = {code: 0, message: 'success', data: res}
}

const sendCode = async(ctx, next) => {
    const params = ctx.request.body;
    const { mobile } = params;
    sms.sendSms(mobile);
    ctx.body = {code: 0, message: 'success', data: '验证码发生成功'}
}


const login = async(ctx, next) => {
    const params = ctx.request.body;
    const { mobile, username, yanzhema } = params;
    if (sms.checkOk(mobile, yanzhema)) {
        ctx.body = {code: 0, message: '登录成功', data: '登录成功'}
    } else {
        ctx.body = {code: 1001, message: '验证码错误', data: '验证码错误'}
    }
}

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
const list_search = async (ctx, next) => {
    const params = ctx.request.body
    const {order_path, order_date, order_station, order_class} = params;
    const {limit=1000, pageIndex=1 } = params;
    const where = {}

    if (order_path) {
        where['order_path'] = order_path
    }

    if (order_date) {
        where['order_date'] = order_date
    }

    if (order_station) {
        where['order_station'] = order_station
    }

    if (order_class) {
        where['order_class'] = order_class
    }


    let where_sql = ''
    let first = true
    for (let item in where) {
        const value = where[item]
        if (first) {
            where_sql = `where A.${item} like "%${value}%"`
            first = false
        }
        else {
            where_sql = `${where_sql} and A.${item} like "%${value}%"`
        }
    }

    const sql = `select * from cbo_order as A ${where_sql} limit ${(pageIndex - 1) * limit},${limit}`

    console.log('cbo_order list sql:', sql)
    let data = await query(sql)
    let count = await query(`select count(*) as count from cbo_order as A ${where_sql}`)

    ctx.body = Object.assign({code: 0, message: 'success', 'data': data}, pagination(limit, pageIndex, count[0].count))
}


const list_by_mobile = async (ctx, next) => {
    const params = ctx.request.body
    const {mobile} = params;
    const sql = `select * from cbo_order where order_mobile="${mobile}" order by create_time desc`;
    const res = await query(sql);
    ctx.body = {code: 0, message: 'success', data: res}
}

export default {
    addOrder,
    sendCode,
    login,
    list_search,
    list_by_mobile,
}