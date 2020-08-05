import React, {Component} from 'react';

import './index.css';

import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.png';
import img8 from '../../images/8.png';
import img9 from '../../images/9.png';
import img10 from '../../images/10.png';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="cooperation-layout container">
          <h2>合作单位</h2>
          <div className="icons row">
            <div className="icon">
              <img className='' src={img2} alt=""/>
            </div>
            <div className="icon">
              <img className='' src={img3} alt=""/>
            </div>
            <div className="icon">
              <img className='' src={img4} alt=""/>
            </div>
            <div className="icon">
              <img className='' src={img5} alt=""/>
            </div>
            <div className="icon">
              <img className='' src={img6} alt=""/>
            </div>
          </div>
          <div className="icons row">
            <div className="icon">
              <img className='' src={img7} alt=""/>
            </div>
            <div className="icon">
              <img className='' src={img8} alt=""/>
            </div>
            <div className="icon">
              <img className='' src={img9} alt=""/>
            </div>
            <div className="icon">
              <img className='' src={img10} alt=""/>
            </div>
            <div className="icon">
              <img className='' src={img1} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;