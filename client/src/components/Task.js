import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions';

class Task extends Component {
  state = { editing: false, text: '' };

  componentDidMount = () => this.setState({ text: this.props.name });

  handleDeleteTodo = e => {
    e.stopPropagation();
    this.props.deleteTodo();
  };

  showEditForm = e => {
    e.stopPropagation();
    this.setState(prevState => ({ editing: !prevState.editing }));
  };

  onInputClick = e => {
    e.stopPropagation();
  };

  onInputChange = e => {
    this.setState({ text: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({ editing: !prevState.editing }));
    this.props.updateTodo(this.props.id, this.state.text);
  };

  render() {
    const { name, done, toggleTodo } = this.props;

    return (
      <li
        className="task"
        style={{
          textDecoration: done ? 'line-through' : '',
          color: done ? '#bdc3c7' : '#34495e'
        }}
        onClick={toggleTodo}
      >
        <span style={{ display: this.state.editing ? 'none' : '' }}>
          {name}
        </span>
        <form
          className="form"
          style={{ display: this.state.editing ? 'inline' : 'none' }}
          onSubmit={this.onFormSubmit}
        >
          <input
            className="edit-todo"
            type="text"
            value={this.state.text}
            onClick={this.onInputClick}
            onChange={this.onInputChange}
          />
        </form>
        <span className="icon" onClick={this.handleDeleteTodo}>
          <i className="fas fa-trash" />
        </span>
        <span className="icon edit" onClick={this.showEditForm}>
          <i className="fas fa-pen" />
        </span>
      </li>
    );
  }
}

export default connect(
  null,
  { updateTodo }
)(Task);
