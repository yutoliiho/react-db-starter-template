import React from 'react';
import Review from './Review.jsx';
const axios = require('axios')

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data)
    return (
      <div>
        {
          this.props.data.slice(0, 2).map(data => (
            <Review data={data} key={data.name} />
          ))
        }
      </div>
    )
  }
}

export default Reviews;