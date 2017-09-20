import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger }  from 'redux-logger';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import { DEVELOPMENT, EN } from './constants';
import { langs } from '../langs';
import * as reducers from '../reducers';

const logger = createLogger({
  level     : 'info',
  collapsed : true
});

export function configureStore() {
  const middlewares = [thunk];

  if(process.env.NODE_ENV === DEVELOPMENT) {
    middlewares.push(logger);
  }

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const reducer = combineReducers({ ...reducers, i18n : i18nReducer });
  const store = createStoreWithMiddleware(reducer);

  // Configure the i18n system
  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(langs));
  store.dispatch(setLocale(EN));

  return store;
}
