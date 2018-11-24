import { SELECT_PROVIDER, LOAD_PROVIDERS_REQUEST, LOAD_PROVIDERS_SUCCESS } from '../actions';

const selectedProvider = (state = { }, action) => {
  switch (action.type) {
    case SELECT_PROVIDER:
      return action.provider;
    default:
      return state;
  }
};

const initialState = {
  isFetching: false,
  items: [],
};

const providers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROVIDERS_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_PROVIDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.providers,
      };
    default:
      return state;
  }
};

export default {
  selectedProvider,
  providers,
};
