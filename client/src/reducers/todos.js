import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case ADD_TODO:
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
