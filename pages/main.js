/**
 * Created by pdd on 2018/6/8.
 */


import "./main.scss"
import './login.scss';
import React from 'react';
import cookies from 'next-cookies';
import Router from 'next/router'

export default class Main extends React.Component {


    static async getInitialProps (ctx) {
        const { mobile, username } = cookies(ctx);
        console.log('mobile:', mobile);
        const { res } = ctx;
        if (res) {
            if (!mobile) {
                // res.writeHead(302, {
                //     Location: '/login'
                // })
                // res.end()
                // res.finished = true
            }
        } else {
            if (!mobile) {

            }
        }
        return {
            mobile, username
        }
    }

    render () {
        const { mobile, username } = this.props;
        return (
            <div className="main-page">

                <button className="btn">在线预订</button>
                <button className="btn">预订查询</button>
                <button className="btn">公交线路</button>
                {
                    mobile ?
                        <button className="btn" onClick={() => {
                            Router.push('/login');
                        }}>个人中心</button>
                        :
                        <button className="btn login" onClick={() => {
                            Router.push('/login');
                        }}>登录</button>
                }
            </div>
        )
    }
}