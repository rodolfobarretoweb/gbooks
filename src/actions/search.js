import { get as getApi } from '../utils/api';

export const GET_SEARCH = 'GET_SEARCH';

export function search(params) {
  return (dispatch, getState) => {
    return getApi(`/volumes?q=${params}`).then((response) => {
      dispatch({ type : GET_SEARCH, payload : response.data || [] });
    });
  }
}
