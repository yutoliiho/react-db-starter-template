import React from 'react';
import Review from './Review.jsx';
const axios = require('axios')

class Reviews extends React.Component {
  constructor(props, prevProps) {
    super(props, prevProps);
  }
  render() {
    console.log(this.props.onDelete(this.props.data.itemName));
    return (
      <div>
        {
          this.props.data.slice(0, 400).map(data => (
            <Review data={data} key={data.id} />
          ))
        }
      </div>
    )
  }
}

export default Reviews;