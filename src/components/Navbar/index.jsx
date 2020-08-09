import React, {Component} from 'react';
import './index.css';

import logo from '../../images/logo.png';

import {Link} from "react-router-dom";

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
                          <a className="navbar-brand" href="/">
                              <img className='nav-logo' src={logo} alt=""/>
                          </a>
                      </div>

                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <form className="navbar-form navbar-left">
                              <div className="form-group">
                                  <input type="text" className="navbar-search form-control" placeholder="搜索" />
                              </div>
                              <button type="submit" className="navbar-searchbtn btn btn-default"><i className='glyphicon glyphicon-search'></i></button>
                          </form>
                          <ul className="nav navbar-nav navbar-right">
                              <li><Link to='/'>首页</Link></li>
                              <li><Link to='/about'>关于我们</Link></li>
                              <li><Link to='/chaoshi'>基金超市</Link></li>
                              {/*<li><Link to='/news'>资讯中心</Link></li>*/}
                              <li><Link to='/contactus'>联系我们</Link></li>
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
