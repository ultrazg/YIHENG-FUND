import React, {Component} from 'react';

import './index.css';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      funds1: [
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
      funds2: [
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
        },
        {
          pic: 'http://www.ipoinchina.com/images/202006/goods_img/76_G_1592130985668.jpg',
          name: '港股打新5号',
          guimo: '6000万元',
          hangye: '生物制药、5G、通信',
          guanliren: '毅恒基金',
          qixian: '12个月+6个月',
          shouyi: '年化8%+浮动',
          qigou: '10万元+',
          link: 'https://www.baidu.com'
        }
      ],
      funds3: [
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
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="chaoshi-layout">
          <div className="backgroundImg">
            <h3 className='container'>基金超市</h3>
          </div>

          <div className="content container">
            <p className="title">IPO打新基金<small className='pull-right'><a>更多<i className='glyphicon glyphicon-menu-right'></i></a></small></p>

            {/*IPO打新基金列表循环 start*/}
            {
              this.state.funds1.map((item,index)=>(
                <div className="row fund" key={index}>
                  <div className="col-md-4">
                    <img className='img-responsive fund_pic' src={item.pic} alt=""/>
                  </div>
                  <div className="col-md-8">
                    <table className="table table-bordered">
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
                  </div>
                </div>
              ))
            }
            {/*IPO打新基金列表循环 end*/}

            <hr/>

            <p className="title">股权投资<small className='pull-right'><a>更多<i className='glyphicon glyphicon-menu-right'></i></a></small></p>

            {/*股权投资列表循环 start*/}
            {
              this.state.funds2.map((item,index)=>(
                <div className="row fund" key={index}>
                  <div className="col-md-4">
                    <img className='img-responsive fund_pic' src={this.state.funds1[0].pic} alt=""/>
                  </div>
                  <div className="col-md-8">
                    <table className="table table-bordered">
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
                  </div>
                </div>
              ))
            }
            {/*股权投资列表循环 end*/}

            <hr/>

            <p className="title">IPO全球配售<small className='pull-right'><a>更多<i className='glyphicon glyphicon-menu-right'></i></a></small></p>

            {/*IPO全球配售列表循环 start*/}
            {
              this.state.funds3.map((item,index)=>(
                <div className="row fund" key={index}>
                  <div className="col-md-4">
                    <img className='img-responsive fund_pic' src={this.state.funds1[0].pic} alt=""/>
                  </div>
                  <div className="col-md-8">
                    <table className="table table-bordered">
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
                  </div>
                </div>
              ))
            }
            {/*IPO全球配售列表循环 end*/}

          </div>
        </div>
      </div>
    );
  }
}

export default Index;