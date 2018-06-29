/**
 * Created by pdd on 2018/6/9.
 */

import React from 'react';
import './order.scss';
import request from './request';
// import { getCookie } from './util';
import cookies from 'next-cookies';
import Router from 'next/router';
import data  from '../data';
const { orderData } = data;
import OrderInfo from './components/order-info';
import moment from 'moment';

function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); return null;
};

export default class Order extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            orderInfo: {
                // order_date: '2018.6.7',
                // order_path: '旅游1线',
                // order_station: '南门换乘车站',
                // order_class: '9:00',
                // order_ticket_count: 2,
                // order_owner: '曾超',
                // order_mobile: '13636672480',
                order_date: '',
                order_path: '',
                order_station: '',
                order_class: '',
                order_ticket_count: 1,
                // order_owner: getCookie('username'),
                // order_mobile: getCookie('mobile'),

            },
            status: 0,
        }
    }

    static async getInitialProps (ctx) {
        let { mobile, username } = cookies(ctx);
        username = unescape(username);
        if (mobile && username == "undefined") {
            username = getCookie('username');
        }
        const { res } = ctx;
        if (res) {
            if (!mobile) {
                res.writeHead(302, {
                    Location: '/login'
                })
                res.end()
                res.finished = true
            }
        } else {
            if (!mobile) {
                Router.push('/login');
            }
        }
        console.log(mobile, username)
        return {
            mobile, username
        }
    }

    componentDidMount () {
        window.document.title = "旅游巴士在线预订";



    }

    renderSuccess = () => {

        const {
            order_date,
            order_path,
            order_station,
            order_class,
            order_ticket_count,

        } = this.state.orderInfo;
        const { username: order_owner, mobile: order_mobile } = this.props;
        return (
            <div className="order-success-page">
                <div className="log"/>
                <div className="success-title">提交成功</div>
                <OrderInfo {...this.state.orderInfo} order_owner={order_owner} order_mobile={order_mobile}  />
                {/*<div className="content">*/}
                    {/*<div className="title">预订信息</div>*/}
                    {/*<div>选择日期：{order_date}</div>*/}
                    {/*<div>选择线路：{order_path}</div>*/}
                    {/*<div>选择站点：{order_station}</div>*/}
                    {/*<div>选择班次：{order_class}</div>*/}
                    {/*<div>选择张数：{order_ticket_count}</div>*/}
                    {/*<div>预订人：{order_owner}</div>*/}
                    {/*<div>手机号：{order_mobile}</div>*/}
                {/*</div>*/}
                <div className="success-go-btn" onClick={() => {
                    window.open('http://quyou.weichongming.com/#/trip');
                }}></div>
            </div>
        )
    }

    submit = () => {
        for (let item in this.state.orderInfo) {
            if (!this.state.orderInfo[item]) {
                alert('信息不能有空');
                return
            }
        }
        const { username: order_owner, mobile: order_mobile } = this.props;
        request.post('/cbo/addOrder', {...this.state.orderInfo, order_owner, order_mobile, order_schedules_id: 0, status: 'new' }).then(response => {
            if (response.data.code === 0) {
                this.setState({ status: 1 });
            } else {
                alert(response.data.message);
            }
        }).catch(error => {

        });
    }

    // selectPath = (order_path) => {
    //     const orderInfo = {...this.state.orderInfo, order_path}
    //     this.setState({ orderInfo });
    // }
    //
    // selectStation = (order_station) => {
    //     const orderInfo = {...this.state.orderInfo, order_station}
    //     this.setState({ orderInfo });
    // }

    renderStationsSelect = () => {
        const selectPath = orderData.filter(path => path.name === this.state.orderInfo.order_path );
        if (selectPath && selectPath.length > 0) {
            return selectPath[0].stations.map(station => {
                return <option key={station.name} value={station.name}>{station.name}</option>
            })
        }
        return null
    }

    renderClsSelect = () => {
        const selectPath = orderData.filter(path => path.name === this.state.orderInfo.order_path );
        if (selectPath && selectPath.length > 0) {
            const stations = selectPath[0].stations;
            // console.log(selectPath, '1112')
            // console.log(stations, '111')
            const selectStations = stations.filter(station => station.name === this.state.orderInfo.order_station);
            if (selectStations && selectStations.length > 0) {
                const classes = selectStations[0].classes;
                return classes.map(cls => {
                    return <option key={cls.time} value={cls.time}>{cls.time}</option>
                })
            }

        }
        return null
    }

    renderOrder = () => {
        const {
            order_date,
            order_path,
            order_station,
            order_class,
            order_ticket_count,
            // order_owner,
            // order_mobile

        } = this.state.orderInfo;



        let dateOptions = null;

        const tom4 = moment().add(4, 'd').format('YYYY-MM-DD');
        const tom3 = moment().add(3, 'd').format('YYYY-MM-DD');
        const tom2 = moment().add(2, 'd').format('YYYY-MM-DD');
        const tomorrow = moment().add(1, 'd').format('YYYY-MM-DD');
        const today = moment().format('YYYY-MM-DD');
        if (moment().hour() > 6) {
            dateOptions = (
                <select value={order_date} onChange={(e) => {
                    this.setState({ orderInfo: {...this.state.orderInfo, order_date: e.target.value }});
                }}>
                    <option key={'null'} value={''}>{'请选择'}</option>
                    <option key={tomorrow} value={tomorrow}>{`${tomorrow}  明天`}</option>
                    <option key={tom2} value={tom2}>{`${tom2} 后天`}</option>
                    <option key={tom3} value={tom3}>{`${tom3}`}</option>
                    <option key={tom4} value={tom4}>{`${tom4}`}</option>
                </select>
            );
        } else {
            dateOptions = (
                <select value={order_date} onChange={(e) => {
                    this.setState({ orderInfo: {...this.state.orderInfo, order_date: e.target.value }});
                }}>
                    <option key={'null'} value={''}>{'请选择'}</option>
                    <option key={today} value={today}>{`${today}  今天`}</option>
                    <option key={tomorrow} value={tomorrow}>{`${tomorrow}  明天`}</option>
                    <option key={tom2} value={tom2}>{`${tom2} 后天`}</option>
                    <option key={tom3} value={tom3}>{`${tom3}`}</option>
                </select>
            );
        }


        return (
            <div className="order-page">
                <div className="form-content">
                    <div className="item">
                        <span>选择日期</span>
                        {dateOptions}
                        {/*<input type='date' value={order_date} onChange={(e) => {*/}
                            {/*this.setState({ orderInfo: {...this.state.orderInfo, order_date: e.target.value }});*/}
                        {/*}} />*/}
                    </div>

                    <div className="item">
                        <span>选择路线</span>
                        <select value={order_path} onChange={(e) => {
                            this.setState({ orderInfo: {...this.state.orderInfo, order_path: e.target.value }});
                        }}>
                            <option key={'null'} value={''}>{'请选择'}</option>
                            {
                                orderData.map(path => {
                                    return (
                                        <option key={path.name} value={path.name}>{path.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="item">
                        <span>选择站点</span>
                        <select value={order_station} onChange={(e) => {
                            this.setState({ orderInfo: {...this.state.orderInfo, order_station: e.target.value }});
                        }}>
                            <option key={'null'} value={''}>{'请选择'}</option>
                            {
                                this.renderStationsSelect()
                            }
                        </select>
                    </div>

                    <div className="item">
                        <span>选择班次</span>
                        <select value={order_class} onChange={(e) => {
                            this.setState({ orderInfo: {...this.state.orderInfo, order_class: e.target.value }});
                        }}>
                            <option key={'null'} value={''}>{'请选择'}</option>
                            {
                                this.renderClsSelect()
                            }
                        </select>
                    </div>

                    <div className="item">
                        <span>座位预订</span>
                        <select value={order_ticket_count} onChange={(e) => {
                            this.setState({ orderInfo: {...this.state.orderInfo, order_ticket_count: e.target.value }});
                        }}>
                            <option value="1">1人</option>
                            <option value="2">2人</option>
                            <option value="3">3人</option>
                            <option value="4">4人</option>
                        </select>
                    </div>

                    <div className="tip">请仔细核对预约信息</div>

                    <button className="submit" onClick={this.submit}>提交</button>
                    <div className={1}>


                    </div>

                </div>
            </div>
        )
    }

    render () {
        if (this.state.status === 1) {
            return this.renderSuccess();
        }
        return this.renderOrder();
    }
}