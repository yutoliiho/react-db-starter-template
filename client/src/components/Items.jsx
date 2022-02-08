import React, { Component } from 'react';
import Item from './Item.jsx';
import uuid from 'react-uuid'

const axios = require('axios')

class Items extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>From items</h4>
        {
          this.props.data.map((item) => (
            <Item data={item} key={uuid()} addItemQuantity={this.props.addItemQuantity}
              minusItemQuantity={this.props.minusItemQuantity}
              deleteItem={this.props.deleteItem}
              updateItemName={this.props.updateItemName}
            />
          ))
        }

      </div>
    )
  }
}

export default Items;