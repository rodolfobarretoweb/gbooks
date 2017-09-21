import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { search } from '../../src/actions/api';
import apiSearchResponse from '../../src/resources/apiSearchResponse.json';

const middlewares = [ thunk ];
const mockStore   = configureMockStore(middlewares);
const store       = mockStore({});

const axiosMock = new AxiosMockAdapter(axios);

describe('Api actions', () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/volumes?q=havard';

  it('search', () => {
    axiosMock.onGet(BASE_URL).reply(200, { data : apiSearchResponse });

    return store.dispatch(search('havard')).then((response) => {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('items');
      expect(response.data.totalItems).toEqual(603);
    });
  });
});
