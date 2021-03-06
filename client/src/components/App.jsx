import React from 'react';
import styled from 'styled-components';

import Reviews from './Reviews.jsx';

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
        <h2>Showing Text From App.jsx (react app)</h2>
        <Reviews data={this.state.data} />
      </div>
    )
  }
}

export default App;