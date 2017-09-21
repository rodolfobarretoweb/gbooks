import store from 'store2';
import values from 'lodash.values';

export const GET_ALL_FAVORITE = 'GET_ALL_FAVORITE';
export const SAVE_FAVORITE    = 'SAVE_FAVORITE';
export const REMOVE_FAVORITE  = 'REMOVE_FAVORITE';

export function save(id, data) {
  return dispatch => {
    if(!store.has(id)) {
      store.set(id, data);

      dispatch({ type : SAVE_FAVORITE });
    }
  };
}

export function getAll() {
  return dispatch => {
    dispatch({ type : GET_ALL_FAVORITE, payload : values(store.getAll()) });
  }
}

export function removeById(id) {
  return dispatch => {
    if(store.has(id)) {
      store.remove(id);

      dispatch({ type : REMOVE_FAVORITE });
      dispatch(getAll());
    }
  }
}
