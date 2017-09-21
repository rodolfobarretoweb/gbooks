import axios from 'axios';

export function get(uri) {
  return axios.get(process.env.REACT_APP_API_BASE_URL + uri);
}

export function post(uri, data) {
  return axios.post(process.env.REACT_APP_API_BASE_URL + uri, data);
}
