import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            todo<span>List</span>
          </h1>
          <h2> A MERN (MongoDB + Express.js + React.js + Node.js) Stack Todo-List App </h2>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
