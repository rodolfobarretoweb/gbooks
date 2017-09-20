import { combineReducers } from 'redux';
import { GET_SEARCH } from '../actions/search';

function listReducer(state = [], action) {
  if(action.type === GET_SEARCH) {
    return action.payload;
  }

  return state;
}

export default combineReducers({
  list : listReducer
});
