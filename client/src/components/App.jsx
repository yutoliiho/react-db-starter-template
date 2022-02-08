// import React from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
import Reviews from './Reviews.jsx';

import GuestForm from './guestForm.jsx';
import GuestList from './GuestList.jsx';
import axios from 'axios/';
import ReactModal from 'react-modal';

import Items from './Items.jsx';
import AddItemForm from './AddItemForm.jsx';
// const api = axios.create({
// baseURL: `http://localhost:3000/listing`
// })

ReactModal.setAppElement('#app');

class App extends React.Component {
  constructor() {

    super();
    this.state = {
      expenses: [],
      items: [],

    }

    this.addGuest = this.addGuest.bind(this);
    this.testingObjArray = this.testingObjArray.bind(this);

    // shopping list methods;
    this.addItemQuantity = this.addItemQuantity.bind(this);
    this.minusItemQuantity = this.minusItemQuantity.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItemName = this.updateItemName.bind(this);
    // HTTP calls;
    this.addItemHTTPCall = this.addItemHTTPCall.bind(this);
    this.deleteItemHTTPCall = this.deleteItemHTTPCall.bind(this);
    this.updateItemNameHTTPCall = this.updateItemNameHTTPCall.bind(this);

  }

  componentDidMount() {
    axios.get('/api/shopping_list')
      .then((res) => {
        this.setState({
          items: res.data
        })
      })
      .catch((err) => {
        console.log('error getting guests', err)
      });
  }
  testingObjArray() {
    var arr = [
      { itemName: "milk", num: 1 },
      { itemName: "cheese", num: 1 },
      { itemName: "tofu", nums: 1 },
      { itemName: "egg", num: 1 }
    ];

    var obj = arr.map((a) => {
      if (a.itemName == "milks") {
        a.num++;
        return;
      }
    })
  }
  addGuest(guest) {
    // console.log(expenses[1]);
    let names = this.state.guests.slice();
    names.push(guest);
    this.setState({ guests: names });
    // this.setState({guests: [...this.state.guests, guest]})
  }
  onDelete(item) {
    console.log("delete this item");
    console.log(item);
  }
  addItemQuantity(item) {
    this.state.items.forEach((e) => {
      if (e.itemName == item.itemName) {
        e.quantity++;
        this.setState({
          items: [...this.state.items]
        })
      }
    })
  }
  minusItemQuantity(item) {
    this.state.items.forEach((e) => {
      if (e.itemName == item.itemName) {
        e.quantity--;
        this.setState({
          items: [...this.state.items]
        })
      }
    })
  }
  addItem(item) {
    console.log(item);
    var newItem = {
      itemName: item,
      quantity: 1
    }
    this.setState({
      items: [newItem, ...this.state.items]
    }, () => {
      this.addItemHTTPCall(newItem);
    });
  }
  deleteItem(item) {
    // console.log(item);
    var i = 0;
    var arr = this.state.items;

    while (i < arr.length) {
      if (arr[i].itemName === item.itemName) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    this.deleteItemHTTPCall(item, arr);
  }
  updateItemName(item) {
    console.log(item);
    this.updateItemNameHTTPCall();
  }

  // HTTP Calls;
  addItemHTTPCall(newItem) {
    axios.post('/api/shopping_list', newItem)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('error posting item', err)
      });
  }
  deleteItemHTTPCall(itemToDelete, arr) {
    // DELETE:
    axios.delete('/api/shopping_list', { data: itemToDelete })
      .then((res) => {
        console.log(res);
        this.setState({ items: arr })
      })
      .catch((err) => {
        console.log('error posting item', err)
      });
  }
  updateItemNameHTTPCall() {
    // axios.patch(...);
  }



  render() {
    return (
      <div>
        <h2>Showing Text From App.jsx (react app)</h2>
        <h2> React Is Working </h2>
        <AddItemForm addItem={this.addItem} />
        <Items data={this.state.items}
          key={this.state.items.itemName}
          addItemQuantity={this.addItemQuantity}
          minusItemQuantity={this.minusItemQuantity}
          deleteItem={this.deleteItem}
          updateItemName={this.updateItemName}
        />



        {/* <GuestForm addGuest={this.addGuest} />
        <GuestList key={this.state.guests.name} data={this.state.guests}></GuestList>

        <Reviews key={this.state.expenses.id} data={this.state.expenses} onDelete={this.onDelete} /> */}
      </div>
    )
  }
}

export default App;