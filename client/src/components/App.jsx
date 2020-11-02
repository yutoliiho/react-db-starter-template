import React from 'react';
const axios = require('axios')

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //
    }
  }

  componentDidMount() {
    console.log('componentDidMount is working');
  }
  render() {
    return (
      <div>
        <h2>Zuumers from App.jsx</h2>
      </div>
    )
  }
}

export default App;