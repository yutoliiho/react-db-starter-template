import React from 'react';
const axios = require('axios')

class Review extends React.Component {
  constructor(props, prevProps) {
    super(props, prevProps);


  }


  render() {
    // print(this.props.data);

    var time = this.props.data.tran_time.slice(5, 10);
    // console.log(this.props.data);
    // print(time);
    // if this.props.time same as previous props.time:
    // new div: print props with infos;
    // add that days props together;
    return (
      <div className='rows' style={{ padding: '10', borderTop: '1px solid #eee', display: 'flex' }
      }>


        {/* 交易时间 */}
        < div className="row" style={{ justifyContent: 'center', padding: '10' }}>
          <div key={this.props.data.id}>{time}</div>
        </div >

        {/* 支出/收入 */}
        < div className="row" style={{ justifyContent: 'center', padding: '10' }}>
          <div key={this.props.data.id}>{this.props.data.in_out}</div>
        </div >

        {/* 商店名称 */}
        < div className="row" style={{ justifyContent: 'center', padding: '10' }}>
          <div key={this.props.data.id}>{this.props.data.store}</div>
        </div >

        {/* 金额 */}
        < div className="row" style={{ justifyContent: 'center', padding: '10' }}>
          <div key={this.props.data.id}>{this.props.data.amount}</div>
        </div >

        {/* 支付方式 */}
        < div className="row" style={{ justifyContent: 'center', padding: '10' }}>
          <div key={this.props.data.id}>{this.props.data.method}</div>
        </div >
      </div>
    )
  }
}

export default Review;