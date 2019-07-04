import axios from 'axios';
import {
  GETALL_TODO,
  ADDNEW_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TAB
} from './types';

export const getAllTodo = () => async dispatch => {
  const res = await axios.get('/api/todos');

  dispatch({ type: GETALL_TODO, payload: res.data });
};

export const addNewTodo = name => async dispatch => {
  const res = await axios.post('/api/todos', { name });

  dispatch({ type: ADDNEW_TODO, payload: res.data });
};

export const toggleTodo = id => async dispatch => {
  const res = await axios.post(`/api/todos/${id}`);

  dispatch({ type: TOGGLE_TODO, payload: res.data });
};

export const updateTodo = (id, name) => async dispatch => {
  const res = await axios.patch(`/api/todos/${id}`, { name });

  dispatch({ type: UPDATE_TODO, payload: { ...res.data, name } });
};

export const deleteTodo = id => async dispatch => {
  const res = await axios.delete(`/api/todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: res.data });
};

export const toggleTab = tab => async dispatch => {
  dispatch({ type: TOGGLE_TAB, filter: tab });
};
