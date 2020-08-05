import React, {Component} from 'react';

import './index.css';

class Index extends Component {
  render() {
    return (
      <div>
        <div className="pro-layout container">
          <h2>为什么选择我们</h2>
          <div className="icons row">
            <div className="icon col-md-3 col-xs-3">
              <div className="box">
                <p>15<span>年</span></p>
                <p>投资管理经验</p>
              </div>
            </div>
            <div className="icon col-md-3 col-xs-3">
              <div className="box">
                <p>10<span>亿美元</span></p>
                <p>单只基金规模</p>
              </div>
            </div>
            <div className="icon col-md-3 col-xs-3">
              <div className="box">
                <p>60<span>只</span></p>
                <p>管理过私募基金</p>
              </div>
            </div>
            <div className="icon col-md-3 col-xs-3">
              <div className="box">
                <p>10000<span>人次</span></p>
                <p>已服务客户</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;