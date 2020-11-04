import React from 'react';
import Reviews from './Bundles.jsx';

const axios = require('axios')

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{ name: 'tong' }, { name: 'alex' }]
    }
  }

  componentDidMount() {
    console.log('componentDidMount is working');
  }
  render() {
    return (
      <div>
        <Reviews data={this.state.data} />
      </div>
    )
  }
}

export default App;