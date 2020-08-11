import React, {Component} from 'react';

import './index.css';

import headerImg from '../../images/me.jpg';

import {Link} from "react-router-dom";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: [
        {
          name: '港股打新5号',
          username: '测试',
          num: '123123123',
          time: '2020-08-11 14:37',
          status: '提交成功',
          link: 'https://www.baidu.com'
        },
        {
          name: '港股打新5号',
          username: '测试',
          num: '123123123',
          time: '2020-08-11 14:37',
          status: '提交成功',
          link: 'https://www.baidu.com'
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="user-layout">
          <div className="background-img">
            <div className="header-layout container">
              <img className='img-responsive' src={headerImg} alt=""/>
              <p className='username'>unknonw</p>
              <hr/>
              <h4>最近交易<p className='pull-right'><Link to='/user/order'>查看全部交易</Link></p></h4>


              <table className="table table-striped">
                <thead>
                <tr>
                  <th>基金名称</th>
                  <th>用户名</th>
                  <th>号码</th>
                  <th>购买时间</th>
                  <th>状态</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>


                {/*IPO打新基金列表循环 start*/}
                {
                  this.state.order.map((item, index) => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.num}</td>
                      <td>{item.time}</td>
                      <td>{item.status}</td>
                      <td><a href={item.link}>购买</a></td>
                    </tr>
                  ))
                }
                {/*IPO打新基金列表循环 end*/}
                </tbody>
              </table>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;