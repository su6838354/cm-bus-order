/**
 * Created by pdd on 2018/6/9.
 */

import React from 'react';
import Router from 'next/router';
import request from './request';
import './login.scss';


function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            mobile: '',
            yanzhema: '',
            reSecond: 0,
            msg: '',
        }
    }


    login = () => {
        const {
            username,
            mobile,
            yanzhema,
        } = this.state;

        request.post('/cbo/login', {
            username,
            mobile,
            yanzhema,
        }).then(response => {
            const code = response.data.code;
            if (code === 0) {
                setCookie('mobile', mobile, 7);
                setCookie('username', username, 7);
                this.setState({
                  msg: '登录成功'
                });
                window.setTimeout(() => {
                    Router.push('/main');
                }, 300);
            } else if (code === 1001) {
                alert('验证码错误');
            }
        }).catch(error => {
            console.log(error);
        });
    }

    sendCode = () => {
        const { mobile, username } = this.state;
        const reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则

        if (!username) {
            alert('姓名不能为空');
            return;
        }
        const flag = reg.test(mobile); //true
        if (flag) {
            request.post('/cbo/sendCode', {
                mobile
            })
                .then((response) => {
                    console.log(response);
                    if (response.data.code === 0) {
                        let i = 60;
                        const start = () => {
                            if (i === 0) {
                                return;
                            }
                            i = i - 1;
                            this.setState({ reSecond: i });
                            window.setTimeout(() => {
                                start();
                            }, 1000);
                        };

                        start()

                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else  {
            alert('请输入正确手机号码');
        }

    }

    render () {
        return (
            <div className="login-page">
                <div className="log" />

                <input className="btn" onChange={e => {
                    this.setState({username: e.target.value})
                }} placeholder="预订姓名" />
                <input className="btn mobile" onChange={e => {
                    this.setState({mobile: e.target.value})
                }}  placeholder="预订手机号" />
                <div className="yanzhengma">
                    <input className="input-yanzhengma" onChange={e => {
                        this.setState({yanzhema: e.target.value})
                    }} placeholder="输入验证码"/>
                    <button disabled={this.state.reSecond !== 0} className="btn getyanzhengma" onClick={this.sendCode}>
                        {
                            this.state.reSecond === 0 ?
                                <span>获取验证码</span>
                                :
                                <span>{this.state.reSecond}s</span>
                        }
                    </button>
                </div>
                <button className="login-btn" onClick={this.login}>登录</button>

                <div className='msg'>{this.state.msg}</div>
            </div>
        )
    }
}
