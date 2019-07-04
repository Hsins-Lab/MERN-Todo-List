import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <form className="form">
        <input className="input" name="text" placeholder="Enter new task..." />
      </form>
    );
  }
}

export default TodoForm;
