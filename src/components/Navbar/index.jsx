import React, {Component} from 'react';
import './index.css';

import logo from '../../images/logo.png';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">
                                <img className='nav-logo' src={logo} alt=""/>
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">首页</a></li>
                                <li><a href="#">关于我们</a></li>
                                <li><a href="#">基金超市</a></li>
                                <li><a href="#">资讯中心</a></li>
                                <li><a href="#">联系我们</a></li>
                                <li><a href='#'>登录</a></li>
                                <li><a className='signup' href='#'>注册</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;