import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Task from './Task';
import { connect } from 'react-redux';
import { getAllTodo, toggleTodo, deleteTodo, toggleTab } from '../actions';
import { TABS } from '../actions/types';

class TodoList extends Component {
  componentDidMount = async () => {
    this.props.getAllTodo();
    try {
      await this.props.getAllTodo();
    } catch (err) {
      console.log('[ERROR]');
      console.log(err.message);
    }
  };

  removeComplete = () => {
    this.props.todos.forEach(({ done, _id }) => {
      if (done) this.props.deleteTodo(_id);
    });
  };

  renderTodos = todos => {
    return todos.map(todo => {
      return (
        <Task
          key={todo._id}
          id={todo._id}
          name={todo.name}
          done={todo.done}
          toggleTodo={() => this.props.toggleTodo(todo._id)}
          deleteTodo={() => this.props.deleteTodo(todo._id)}
        />
      );
    });
  };

  renderTabs = currTab => {
    return TABS.map(tab => {
      return (
        <button
          key={tab}
          className={tab === currTab ? 'button selected' : 'button'}
          onClick={() => this.props.toggleTab(tab)}
        >
          {tab}
        </button>
      );
    });
  };

  render() {
    let todos = [];

    if (this.props.currTab === 'all') {
      todos = this.props.todos;
    } else if (this.props.currTab === 'active') {
      todos = this.props.todos.filter(todo => !todo.done);
    } else if (this.props.currTab === 'done') {
      todos = this.props.todos.filter(todo => todo.done);
    }

    return (
      <article>
        <TodoForm />
        {this.props.todos.length ? (
          <div style={{ marginBottom: 20, marginLeft: 10 }}>
            {this.props.todos.filter(todo => !todo.done).length} todos left
          </div>
        ) : null}

        <div>
          {this.props.todos.length ? this.renderTabs(this.props.currTab) : null}
          {this.props.todos.some(todo => todo.done) ? (
            <button className="button clear" onClick={this.removeComplete}>
              remove done
            </button>
          ) : null}
        </div>

        <ul style={{ paddingLeft: 10 }} className="list">
          {this.renderTodos(todos)}
        </ul>
      </article>
    );
  }
}

const mapStateToProps = ({ todos, currTab }) => {
  return { todos, currTab };
};

export default connect(
  mapStateToProps,
  { getAllTodo, toggleTodo, deleteTodo, toggleTab }
)(TodoList);
