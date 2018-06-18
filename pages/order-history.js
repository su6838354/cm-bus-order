/**
 * Created by pdd on 2018/6/10.
 */

import React from 'react';
import './order-history.scss';
import OrderInfo from './components/order-info';
import cookies from 'next-cookies';
import request from './request';
import Router from 'next/router';

export default class OrderHistory extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            list: []
        }
    }

    static async getInitialProps (ctx) {
        const { mobile, username } = cookies(ctx);
        console.log('mobile:', mobile);
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


        return {
            mobile, username
        }
    }

    componentDidMount () {
        window.document.title = '旅游巴士预订信息'
        request.post('/cbo/list_by_mobile', {mobile: this.props.mobile}).then(response => {
            console.log('--', response.data.data)
            if (response.data.code === 0) {
                this.setState({
                    list: response.data.data
                })
            }
        });
    }


    renderList = () => {
        const { username, mobile } = this.props;
        return this.state.list.map(item => {
            return (
                <div key={item.id}>
                    <OrderInfo {...item}  order_mobile={mobile}  />
                </div>
            )
        })
    }


    render () {
        return (
            <div className="order-history-page">
                {this.renderList()}
            </div>
        )
    }
}
