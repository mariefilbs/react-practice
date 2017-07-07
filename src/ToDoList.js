import React, { Component } from 'react';
import './App.css';
import ToDoItems from './ToDoItems';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: '',
      isCompleted: false,
      isEditing: false
    };

    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.toggleEdit = this.toggleEdit.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange (event) {
    this.setState({
      newItem: event.target.value
    })
  }

  addItem (event) {
    event.preventDefault();
    let itemArray = this.state.items;
    //console.log(this.state)

    itemArray.push (
      {
        text: this.state.newItem,
        key: Date.now()
      }
    )
    this.setState({ itemArray })
    this.state.newItem = '';
  }

 render () {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input type="text" onChange={this.handleChange} value={this.state.newItem} placeholder="Add a task.."/>
          <button type="submit" className="add-button">Add</button>
        </form>
        <ToDoItems entries={this.state.items} completed={this.state.isCompleted} remove={this.removeItem}/>
      </div>
   );
 }
}

export default ToDoList;
