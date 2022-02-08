import React from 'react';
import Guest from './Guest.jsx';
import Test from './Test.jsx';

class GuestList extends React.Component {
  constructor(props, prevProps) {
    super(props, prevProps);
  }

  render() {
    console.log(this.props);
    console.log(this.props.data);

    return (
      <div>
        <h1>Guestlist rendering</h1>
        <ul>
          {
            this.props.data.map(data => {
              (
                <Guest key={data} data={data} value={data} />
              )

            })
          }
        </ul>
      </div>
    )
  }
}

export default GuestList;