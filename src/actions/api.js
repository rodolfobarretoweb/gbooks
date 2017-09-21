import { get as getApi } from '../utils/api';

export const SEARCH_API    = 'SEARCH_API';
export const GET_BY_ID_API = 'GET_BY_ID_API';

export function search(params) {
  return dispatch => {
    return getApi(`/volumes?q=${params}`).then((response) => {
      dispatch({ type : SEARCH_API, payload : response.data || [] });
    });
  }
}

export function getById(id) {
  return dispatch => {
    return getApi(`/volumes/${id}`).then((response) => {
      dispatch({ type : GET_BY_ID_API, payload : response.data || [] });
    });
  };
}
