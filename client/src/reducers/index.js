import { combineReducers } from 'redux';
import todos from './todos';
import currTab from './currTab';

export default combineReducers({ todos, currTab });
