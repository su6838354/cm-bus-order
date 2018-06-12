/**
 * Created by pdd on 2018/6/11.
 */

import React from 'react';
import './path-info.scss';

export default class PathInfo extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        window.document.title = '旅游巴士公告线路'
    }

    render () {
        return (
            <div>
                <div className="path-image">

                </div>
            </div>
        )
    }
}

