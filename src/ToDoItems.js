import React, { Component } from 'react';
import './App.css';


class ToDoItems extends Component {
  render() {
    //create a new variable to store our passed array of taasks
    let todoEntries = this.props.entries;

    this.handleRemove = this.handleRemove.bind(this);

    handleRemove (key) {
      this.setState({ todoEntries: this.state.todoEntries.filter((i, rkey) => key !== rkey)});
    }
    //create the HTML element to display data
    function createTasks (item) {
      console.log(item)
      return (
        <div>
          <li key={item.key}>{item.text}</li>
          <button type="button" onClick={this.handleRemove(item.key)}>x</button>
        </div>
     )
    }

    let listItems = todoEntries.map(createTasks);
    console.log(listItems)

    return (
      //the list
        <ul className="the-list">{listItems}</ul>
    );
  }
}

export default ToDoItems;
