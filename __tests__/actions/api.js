import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { search, getById } from '../../src/actions/api';
import apiSearchResponse from '../../src/resources/api/search-response.json';
import apiVolumeResponse from '../../src/resources/api/volume-response.json';

const middlewares = [ thunk ];
const mockStore   = configureMockStore(middlewares);
const store       = mockStore({});

const axiosMock = new AxiosMockAdapter(axios);

// Define the base url of api (Google books)
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

beforeEach(() => {
  axiosMock.reset();
});

describe('Search action', () => {
  test('Search successfully', () => {
    axiosMock.onGet(BASE_URL + '/volumes?q=havard').reply(200, { data : apiSearchResponse });

    return store.dispatch(search('havard')).then((response) => {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('items');
    });
  });

  test('Search without items', () => {
    axiosMock.onGet(BASE_URL + '/volumes?q=havard').reply(200, {
      data : { kind : 'books#volumes', totalItems : 0 }
    });

    return store.dispatch(search('havard')).then((response) => {
      expect(response).toHaveProperty('data');
      expect(response.data.totalItems).toEqual(0);
    });
  });

  test('When fail', () => {
    axiosMock.onGet(BASE_URL + '/volumes?q=').reply(400, { });

    return expect(store.dispatch(search(''))).rejects.toBeDefined();
  });
});

describe('getById action', () => {
  test('Get successfully', () => {
    const id = 'zGhd2Xp7zLwC';

    axiosMock.onGet(BASE_URL + `/volumes/${id}`).reply(200, { data : apiVolumeResponse });

    return store.dispatch(getById(id)).then((response) => {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('id');
      expect(response.data.id).toEqual(id);
    });
  });

  test('Fail without id', () => {
    axiosMock.onGet(BASE_URL + '/volumes/').reply(400, { });

    return expect(store.dispatch(getById(''))).rejects.toBeDefined();
  });

  test('Fail with wrong id', () => {
    axiosMock.onGet(BASE_URL + '/volumes/').reply(503, { });

    return expect(store.dispatch(getById('433kkd'))).rejects.toBeDefined();
  });
});
