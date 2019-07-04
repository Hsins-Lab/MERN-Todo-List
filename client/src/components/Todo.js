import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li className="task">
        <span>TASK</span>
        <form className="form" style={{ display: 'none' }}>
          <input className="edit-todo" type="text" />
        </form>
        <span className="icon">
          <i className="fas fa-trash" />
        </span>
        <span className="icon edit">
          <i className="fas fa-pen" />
        </span>
      </li>
    );
  }
}

export default Todo;
