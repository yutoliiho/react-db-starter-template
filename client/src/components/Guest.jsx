import React from 'react';

class Guest extends React.Component {
  constructor(props, prevProps) {
    super(props, prevProps);
    this.state = {
      data: this.props.data
    }
  }

  render() {
    console.log(this.props.data);
    console.log(this.state);
    console.log(this.state.data);
    return (
      <div>
        <h2>Guests</h2>
        {/* // <div key={this.props}>{this.props.name}</div> */}
      </div>
    )
  }
}

export default Guest;
