import {
  combineReducers, createStore, compose, applyMiddleware,
} from 'redux';
// importing reducers
import sideNavShown from './SideNavShown/reducer';
import query from './query/reducer';

const initialState = {
  sideNavShown: false,
  query: '',
};
// combined reducer
const reducer = combineReducers({
  sideNavShown,
  query,
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