import {
  GETALL_TODO,
  ADDNEW_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GETALL_TODO:
      return action.payload;
    case ADDNEW_TODO:
      return [action.payload, ...state];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    case UPDATE_TODO:
      return state.map(todo =>
        todo._id === action.payload._id
          ? { ...todo, name: action.payload.name }
          : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo._id !== action.payload._id);
    default:
      return state;
  }
}
