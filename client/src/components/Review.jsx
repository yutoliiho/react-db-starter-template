import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
const axios = require('axios')

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.review)
    return (
      <div style={{ padding: '10', borderTop: '1px solid #eee' }}>
        <div>{this.props.data}</div>
      </div>
    )
  }
}

export default Review;