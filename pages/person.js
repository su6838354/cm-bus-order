/**
 * Created by pdd on 2018/6/12.
 */



import React from 'react';

export default class Person extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        window.document.title = '个人中心'
    }

    render() {
        return <div>
            个人中心
        </div>
    }

}