import React, { Component } from 'react';
import ReactModal from 'react-modal';
import UpdateNameForm from './UpdateNameForm.jsx';
const axios = require('axios')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

// ReactModal.setAppElement('#item');

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.delete = this.delete.bind(this);
    this.patch = this.patch.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  add(e) {
    e.preventDefault();
    this.props.addItemQuantity(this.props.data);
  }
  minus(e) {
    e.preventDefault();
    this.props.minusItemQuantity(this.props.data);
  }
  delete(e) {
    e.preventDefault();
    this.props.deleteItem(this.props.data);
  }
  patch(e) {
    e.preventDefault();
    // modal for editing, eidt name, pass it on;
    this.props.updateItemName(this.props.data);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className="oneItem" style={{
        padding: '5px', borderTop: '1px solid #eee', display: 'flex'
      }}>

        <div style={{ justifyContent: 'center' }}>
          <div>
            item name:
            <h2>{this.props.data.itemName}</h2>
          </div>
        </div>

        <div className="quantity" style={{ justifyContent: 'center' }}>
        </div>

        <div style={{ justifyContent: 'center' }}><h4>quantity needed: {this.props.data.quantity}</h4></div>
        <button style={{ justifyContent: 'center' }} onClick={this.add}>+</button>
        <button style={{ justifyContent: 'center' }} onClick={this.minus}>-</button>
        <button style={{ justifyContent: 'center' }} onClick={this.delete}>Delete Item</button>
        <div>
          <button onClick={this.handleOpenModal}>Update Name</button>
          <ReactModal
            className="reactModelMin"
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <div>
              Update Name:
              <UpdateNameForm />
            </div>
            {/* <button onClick={this.patch}>Update Name</button> */}
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
        {/* <button onClick={this.patch}>Update</button> */}

      </div >
    )
  }
}

export default Item;