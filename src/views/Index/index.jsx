import React, {Component} from 'react';

import './index.css';

import viderURL from '../../images/daytime.mp4';

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

import Footer from '../../components/Footer';

class Index extends Component {
  render() {
    return (
      <div>
        {/*首页视频/图片 start*/}
        <div className='indexbigimg-layout'>
          {/*<img className='img-responsive' src={imgURL} alt=""/>*/}
          <video className='img-responsive' src={viderURL} autoPlay={true} loop={true}></video>
          <div className="mask">
            <h3 className='container'>士不可以不弘毅，任重而道远。</h3>
          </div>
        </div>
        <div className="kaihu">
          <span>我要开户</span><input placeholder='手机号码' type="text"/><button>开户</button>
        </div>
        {/*首页视频/图片 end*/}

        {/*pro start*/}
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
        {/*pro end*/}

        {/*成功案例组件 start*/}
        <div className="case-layout container">
          <h2>成功案例</h2>

          <div className="lists row">
            <div className="col-xs-6 col-md-3">中烟香港<span>06055</span></div>
            <div className="col-xs-6 col-md-3">中国医疗<span>08225</span></div>
            <div className="col-xs-6 col-md-3">自动系统<span>00771</span></div>
            <div className="col-xs-6 col-md-3">集友股份<span>603429</span></div>
            <div className="col-xs-6 col-md-3">济民制药<span>603222</span></div>
            <div className="col-xs-6 col-md-3">毛记葵涌<span>01716</span></div>
            <div className="col-xs-6 col-md-3">管道工程<span>01865</span></div>
            <div className="col-xs-6 col-md-3">信基沙溪<span>03603</span></div>
            <div className="col-xs-6 col-md-3">...</div>
          </div>
        </div>
        {/*成功案例组件 end*/}

        {/*合作单位组件 start*/}
        <div className="cooperation-layout container">
          <h2>合作单位</h2>
          <div className="icons row">
            <div className="icon">
              <img className='' src={img2} alt=""/>
              <p>中国北方证券</p>
            </div>
            <div className="icon">
              <img className='' src={img3} alt=""/>
              <p>邦盟汇骏证券</p>
            </div>
            <div className="icon">
              <img className='' src={img4} alt=""/>
              <p>海通证券</p>
            </div>
            <div className="icon">
              <img className='' src={img5} alt=""/>
              <p>兴业证券</p>
            </div>
            <div className="icon">
              <img className='' src={img6} alt=""/>
              <p>渣打银行</p>
            </div>
          </div>
          <div className="icons row">
            <div className="icon">
              <img className='' src={img7} alt=""/>
              <p>招商银行</p>
            </div>
            <div className="icon">
              <img className='' src={img8} alt=""/>
              <p>汇丰银行</p>
            </div>
            <div className="icon">
              <img className='' src={img9} alt=""/>
              <p>普华永道</p>
            </div>
            <div className="icon">
              <img className='' src={img10} alt=""/>
              <p>盈科</p>
            </div>
            <div className="icon">
              <img className='' src={img1} alt=""/>
              <p>摩根</p>
            </div>
          </div>
        </div>
        {/*合作单位组件 end*/}

        {/*Footer component start*/}
        <Footer/>
        {/*Footer component end*/}

      </div>
    );
  }
}

export default Index;