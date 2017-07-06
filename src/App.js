import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import ToDoList from './ToDoList';
// import AddItem from './AddItem';


class App extends Component {
  render() {
    return (
      <div>
        <Title />
        {/* <AddItem /> */}
        <ToDoList />
     </div>
    )
  }
}

export default App;
