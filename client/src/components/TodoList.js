import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <article>
        <TodoForm />
        <ul style={{ paddingLeft: 10 }} className="list">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </ul>
      </article>
    );
  }
}

export default TodoList;
