import { databaseRef } from 'config/firebase';
export const ADD_BOOKING = 'ADD_BOOKING';
export const LOAD_BOOKINGS_REQUEST = 'LOAD_BOOKINGS_REQUEST';
export const LOAD_BOOKINGS_SUCCESS = 'LOAD_BOOKINGS_SUCCESS';

// user_id, provider_id, rating
const bookings = [{ username: 'asdf', providerId: 0, startDate: 4, endDate: 10 }];

export const addBooking = (username, providerId, startDate, endDate) => {
  return ({
    type: ADD_BOOKING,
    booking: { username, providerId, startDate, endDate },
  });};

export const loadBookingsRequest = () => ({
  type: LOAD_BOOKINGS_REQUEST,
});

export const loadBookingsSucess = (json) => ({
  type: LOAD_BOOKINGS_SUCCESS,
  bookings: json,
});

export const fetchBookings = () => (dispatch) => {
  dispatch(loadBookingsRequest());
  var bookinglist = [];
  databaseRef.child('booking').on('value', function(snapshot)
  {
    snapshot.forEach(function(childSnapshot){
      bookinglist.push(childSnapshot.val());
    },
    );
    
  });
  bookings.items = bookinglist;
  
  
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
