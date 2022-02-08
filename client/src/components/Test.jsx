import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);

    // this.function = this.function.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Test</h1>
        <h1>{this.props.key}</h1>
      </div>
    )
  }
}

export default Test;