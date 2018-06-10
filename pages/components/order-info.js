/**
 * Created by pdd on 2018/6/11.
 */

import './order-info.scss';

export default (props) => {

    const {
        order_date,
        order_path,
        order_station,
        order_class,
        order_ticket_count,
        order_owner,
        order_mobile
    } = props;
    return (
        <div className="content">
            <div className="title">预订信息</div>
            <div>选择日期：{order_date}</div>
            <div>选择线路：{order_path}</div>
            <div>选择站点：{order_station}</div>
            <div>选择班次：{order_class}</div>
            <div>选择张数：{order_ticket_count}</div>
            <div>预订人：{order_owner}</div>
            <div>手机号：{order_mobile}</div>
        </div>
    )
}