import { SEARCH_API, GET_BY_ID_API } from '../actions/api';

export default function(state = [], action) {
  if(action.type === SEARCH_API || action.type === GET_BY_ID_API) {
    return action.payload;
  }

  return state;
}
