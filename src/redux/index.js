import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
// importing reducers
import query from './query/reducer';
import loggedIn from './loggedIn/reducer';
import user from './user/reducer';
import providerFilters from './providerFilters/reducer';
import providersReducers from './providers/reducer';

const initialState = {
  query: '',
  loggedIn: false,
  user: {},
  providerFilters: [],
};
// combined reducer
const reducer = combineReducers({
  query,
  loggedIn,
  user,
  providerFilters,
  ...providersReducers,
});

const thunk = store => next => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  
  return next(action);
};

// store
// TODO: remove this for production / somehow see which environment we're running on
// https://stackoverflow.com/questions/37298559/getting-redux-devtools-to-work
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(reducer, initialState, enhancers);

export default store;
