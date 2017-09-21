import { GET_ALL_FAVORITE } from '../actions/favorite';

export default function(state = [], action) {
  if(action.type === GET_ALL_FAVORITE) {
    return action.payload;
  }

  return state;
}
