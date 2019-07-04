import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = { text: '' };
  }

  onInputChange = event => {
    this.setState({ text: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        <input
          className="input"
          name="text"
          value={this.state.text}
          onChange={this.onInputChange}
          placeholder="Enter new task..."
        />
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
