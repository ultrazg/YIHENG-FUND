import React, {Component} from 'react';

import './index.css';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [
        {
          date: '2020-08-09',
          title: '新闻标题1',
          link: 'https://www.baidu.com'
        },
        {
          date: '2020-08-10',
          title: '新闻标题2',
          link: 'https://www.baidu.com'
        },
        {
          date: '2020-08-11',
          title: '新闻标题3',
          link: 'https://www.baidu.com'
        },
        {
          date: '2020-08-12',
          title: '新闻标题4',
          link: 'https://www.baidu.com'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="news-layout container">
          <h3>毅恒新闻</h3>
          <p>这里发布毅恒内的新鲜事</p>
          <div className="content">

            {/*列表循环 start*/}
            {
              this.state.news.map((item, index) => (
                <div className="box" key={index}>
                  <div className="date">{item.date}</div>
                  <div className="title">
                    <a href={item.link}>
                      {item.title}
                    </a>
                  </div>
                </div>
              ))
            }
            {/*列表循环 end*/}

          </div>
        </div>
      </div>
    );
  }
}

export default Index;