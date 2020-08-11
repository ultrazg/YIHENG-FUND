import React, {Component} from 'react';

import './index.css';

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
        <div className="userorder-layout container">
          <h3>全部订单</h3>
        </div>
      </div>
    );
  }
}

export default Index;