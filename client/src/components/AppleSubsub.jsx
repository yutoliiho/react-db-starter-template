import React from 'react';

class AppleSub extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("AppleSub!");
    console.log(this.props);
    return (
      <div>
        <h3>Hello from AppleSub</h3>
        <h2>{this.props.data}</h2>
      </div>
    )
  }
}
export default AppleSub;

// var Cucumbers = (props) => (
//   <li>{props.cucumbers}</li>
// )