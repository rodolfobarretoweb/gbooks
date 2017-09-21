import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import localStore from 'store2';
import { save, getAll, removeById } from '../../src/actions/favorite';
import apiVolumeResponse from '../../src/resources/api/volume-response.json';

const middlewares = [ thunk ];
const mockStore   = configureMockStore(middlewares);
const store       = mockStore({});

beforeAll(() => {
  localStore.clearAll();
});

describe('Favorite action', () => {
  test('Save successfully', () => {
    store.dispatch(save(apiVolumeResponse.id, apiVolumeResponse));

    // Get all books storage
    const response = store.dispatch(getAll());

    return expect(response).toEqual([apiVolumeResponse]);
  });

  test('Get all saved', () => {
    // Get all books storage
    const response = store.dispatch(getAll());

    return expect(response).toEqual([apiVolumeResponse]);
  });

  test('Remove by id', () => {
    store.dispatch(removeById(apiVolumeResponse.id));

    // Get all books storage
    const response = store.dispatch(getAll());

    return expect(response).toEqual([]);
  });
});
