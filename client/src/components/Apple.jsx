import React from 'react';
import AppleSub from './AppleSubsub.jsx';

class Apple extends React.Component {
  constructor() {
    super();
    this.state = {
      fruits: [
        { name: "banana" },
        { name: "pear" },
        { name: "apple" }
      ]
    }
  }
  render() {
    console.log("apple!");
    return (
      <div>
        <h3>Hello from apple</h3>
        {
          this.state.fruits.map((fruit) => (
            <AppleSub data={fruit.name} key={fruit.name} />
          ))
        }
      </div>
    )
  }
}
export default Apple;
