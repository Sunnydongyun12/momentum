import { RATE_PROVIDER, LOAD_RATINGS_REQUEST, LOAD_RATINGS_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  items: [],
};

const ratings = (state = initialState, action) => {
  switch (action.type) {
    case RATE_PROVIDER:
      return { ...state, items: [...state.items, action.rating] };
    case LOAD_RATINGS_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_RATINGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.ratings,
      };
    default:
      return state;
  }
};

export default ratings;
