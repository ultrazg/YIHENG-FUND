import React, {Component} from 'react';
import './index.css';

import imgURL from '../../images/indexbigimg.jpg';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <div className='indexbigimg-layout'>
          <img className='img-responsive' src={imgURL} alt=""/>
          <div className="mask">
            <h3 className='container'>HELLO WORLD</h3>
          </div>
        </div>
        <div className="kaihu">
          <span>我要开户</span><input placeholder='手机号码' type="text"/><button>开户</button>
        </div>
      </div>
    );
  }
}

export default Index;