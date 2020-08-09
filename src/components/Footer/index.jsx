import React, {Component} from 'react';

import './index.css';

import logo from '../../images/logo.png';
import {Link} from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div className='footer-layout'>
        <div className="container">
          <div className="list col-xs-6 col-sm-3">
            <img src={logo} alt=""/>
          </div>
          <div className="list col-xs-6 col-sm-3">
            <ul>
              <li><strong>我们的市场</strong></li>
              <li>
                <Link to='#'>链接</Link>
              </li>
            </ul>
          </div>

          <div className="clearfix visible-xs-block"></div>

          <div className="list col-xs-6 col-sm-3">
            <ul>
              <li>
                <strong>资讯中心</strong>
              </li>
              <li>
                <Link to='/news'>行业新闻</Link>
              </li>
              <li>
                <Link to='/yhnews'>毅恒新闻</Link>
              </li>
              <li>
                <Link to='/faq'>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="list col-xs-6 col-sm-3">
            <ul>
              <li>
                <strong>关于我们</strong>
              </li>
              <li>
                <Link to='/about'>关于毅恒</Link>
              </li>
              <li>
                <Link to='/contactus'>联系我们</Link>
              </li>
              <li>
                <Link to='/ourteam'>我们的团队</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="info container">
              <Link to='/risk'>风险揭示书 </Link><label>|</label>
              <Link to='/privacy'> 隐私条款 </Link><label>|</label>
              <Link to='/complaint'> 投诉建议</Link>
        </div>

        <div className="copyright container">
          <p>备案号：<a href='http://www.beian.miit.gov.cn/' target='_blank'>粤ICP备20052211号</a></p>
          <p>版权所有 © 2006-2020 毅恒宏观机会基金有限公司</p>
        </div>
      </div>
    );
  }
}

export default Index;