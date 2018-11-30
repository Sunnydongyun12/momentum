export const ADD_BOOKING = 'ADD_BOOKING';
export const LOAD_BOOKINGS_REQUEST = 'LOAD_BOOKINGS_REQUEST';
export const LOAD_RATINGS_SUCCESS = 'LOAD_RATINGS_SUCCESS';

// user_id, provider_id, rating
const bookings = [{ userId: 0, providerId: 0, startDate: 4, endDate: 10 }];

export const addBooking = (userId, providerId, rating) => ({
  type: ADD_BOOKING,
  booking: { userId, providerId, rating },
});

export const loadBookingsRequest = () => ({
  type: LOAD_BOOKINGS_REQUEST,
});

export const loadBookingsSucess = (json) => ({
  type: LOAD_RATINGS_SUCCESS,
  bookings: json,
});

export const fetchBookings = () => (dispatch) => {
  dispatch(loadBookingsRequest());

  return dispatch(loadBookingsSucess(bookings));
  
  // return fetch('http://localhost:5000/providers')
  //   .then(
  //     response => response.json(),
  //     error => console.log('An error occurred.', error),
  //   )
  //   .then(
  //     json => dispatch(loadProvidersSucess(json)),
  //   );
};
