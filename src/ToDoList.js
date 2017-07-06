import React, { Component } from 'react';
import './App.css';
import ToDoItems from './ToDoItems';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: ''
    };

    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ newItem: event.target.value })
    console.log(this.state)
  }

  addItem (event) {
    let itemArray = this.state.items;
    console.log(this.state)
    //add inputElement from <form>
    itemArray.push (
      {
        text: this.state.newItem,
        key: Date.now()
      }
    )

    this.setState({ itemArray })
    //override the broswer default of onSubmit
    event.preventDefault();
  }

 render () {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input type="text" onChange={this.handleChange} value={this.state.newItem} placeholder="Add a task.."/>
          <button type="submit">Add</button>
        </form>
        <ToDoItems entries={this.state.items} />
      </div>
   );
 }
}

export default ToDoList;
