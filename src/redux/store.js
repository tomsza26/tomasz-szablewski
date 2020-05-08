/* eslint-disable import/no-named-as-default */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import langReducers from './actions/langReducers';

// eslint-disable-next-line max-len
const store = createStore(langReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
