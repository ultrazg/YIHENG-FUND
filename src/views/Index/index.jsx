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


class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hots: [
        {
          pic: 'http://www.ipoinchina.com/images/202006/goods_img/76_G_1592130985668.jpg',
          name: '港股打新5号',
          guimo: '5000万元',
          hangye: '生物制药、5G、通信',
          guanliren: '毅恒基金',
          qixian: '12个月+6个月',
          shouyi: '年化8%+浮动',
          qigou: '10万元+',
          link: 'https://www.baidu.com'
        }
      ],
      lists: [
        {
          title: '中烟香港',
          num: '06055'
        },
        {
          title: '中国医疗',
          num: '08225'
        },
        {
          title: '自动系统',
          num: '00771'
        },
        {
          title: '集友股份',
          num: '603429'
        },
        {
          title: '济民制药',
          num: '603222'
        },
        {
          title: '毛记葵涌',
          num: '01716'
        },
        {
          title: '管道工程',
          num: '01865'
        },
        {
          title: '信基沙溪',
          num: '03603'
        }
      ]
    }
  }

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
          <span>我要开户</span><input placeholder='手机号码' type="text"/>
          <button>开户</button>
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

            {/*成功案例循环 start*/}
            {
              this.state.lists.map((item, index) => (
                <div className="col-xs-6 col-md-3" key={index}>{item.title}<span>{item.num}</span></div>
              ))
            }
            {/*成功案例循环 end*/}
            {/*<div className="col-xs-6 col-md-3">中国医疗<span>08225</span></div>*/}
            {/*<div className="col-xs-6 col-md-3">自动系统<span>00771</span></div>*/}
            {/*<div className="col-xs-6 col-md-3">集友股份<span>603429</span></div>*/}
            {/*<div className="col-xs-6 col-md-3">济民制药<span>603222</span></div>*/}
            {/*<div className="col-xs-6 col-md-3">毛记葵涌<span>01716</span></div>*/}
            {/*<div className="col-xs-6 col-md-3">管道工程<span>01865</span></div>*/}
            {/*<div className="col-xs-6 col-md-3">信基沙溪<span>03603</span></div>*/}
            <div className="col-xs-6 col-md-3">...</div>
          </div>
        </div>
        {/*成功案例组件 end*/}

        {/*热销 start*/}
        <div className="hot-layout container">
          <h2>热销基金</h2>
          <div className="content">
            {/*IPO打新基金列表循环 start*/}
            {
              this.state.hots.map((item, index) => (
                <table className="table table-striped" key={index}>
                  <thead>
                  <tr>
                    <th>基金名称</th>
                    <th>募集规模</th>
                    <th>投资行业</th>
                    <th>管理人</th>
                    <th>投资期限</th>
                    <th>预期收益</th>
                    <th>起购金额</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.guimo}</td>
                    <td>{item.hangye}</td>
                    <td>{item.guanliren}</td>
                    <td>{item.qixian}</td>
                    <td>{item.shouyi}</td>
                    <td>{item.qigou}</td>
                    <td><a href={item.link}>购买</a></td>
                  </tr>
                  </tbody>
                </table>
              ))
            }
            {/*IPO打新基金列表循环 end*/}
          </div>
        </div>
        {/*热销 end*/}

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


      </div>
    );
  }
}

export default Index;