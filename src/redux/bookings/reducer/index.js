import { ADD_BOOKING, LOAD_BOOKINGS_REQUEST, LOAD_BOOKINGS_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  items: [],
};

const bookings = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return { ...state, items: [...state.items, action.booking] };
    case LOAD_BOOKINGS_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_BOOKINGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.bookings,
      };
    default:
      return state;
  }
};

export default bookings;
