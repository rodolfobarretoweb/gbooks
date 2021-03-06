import { get as getApi } from '../utils/api';

export const SEARCH_API    = 'SEARCH_API';
export const GET_BY_ID_API = 'GET_BY_ID_API';

export function search(query, startIndex = 0) {
  return dispatch => {
    return getApi(
      `/volumes?q=${query}&startIndex=${startIndex}&maxResults=10`
    ).then((response) => {
      const payload = response.data;

      dispatch({ type : SEARCH_API, payload });

      return payload;
    });
  }
}

export function getById(id) {
  return dispatch => {
    return getApi(`/volumes/${id}`).then((response) => {
      const payload = response.data;

      dispatch({ type : GET_BY_ID_API, payload });

      return payload;
    });
  };
}
