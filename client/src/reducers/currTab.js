import { SHOW_ALL, TOGGLE_TAB } from '../actions/types';

const currTab = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      return action.filter;
    default:
      return state;
  }
};

export default currTab;
