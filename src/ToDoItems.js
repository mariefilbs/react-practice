import React, { Component } from 'react';
import './App.css';


class ToDoItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.state;
    this.removeItem = this.removeItem.bind(this);
    //console.log(this)
    this.createTask = this.createTask.bind(this);
  }

    removeItem () {
      console.log('clicked')
    }

    createTask (item) {
      console.log(item)
      return (
          <li key={item.key}>
            <input type="checkbox" className="checkbox"/>
            {item.text}
            <button type="button" className="remove-button" onClick={this.removeItem}>x</button>
          </li>

     )
    }

  render() {
    let todoEntries = this.props.entries;
    let completedTask = this.props.completed;
    let listItems = todoEntries.map(this.createTask);

    return (
      //the list
        <ul className="the-list">{listItems}</ul>
    );
  }
}

export default ToDoItems;
