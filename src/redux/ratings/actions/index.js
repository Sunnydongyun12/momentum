export const RATE_PROVIDER = 'RATE_PROVIDER';
export const LOAD_RATINGS_REQUEST = 'LOAD_RATINGS_REQUEST';
export const LOAD_RATINGS_SUCCESS = 'LOAD_RATINGS_SUCCESS';

// user_id, provider_id, rating
const ratings = [{ userId: 0, providerId: 0, rating: 4 }];

export const rateProvider = (userId, providerId, rating) => ({
  type: RATE_PROVIDER,
  rating: { userId, providerId, rating },
});

export const loadRatingsRequest = () => ({
  type: LOAD_RATINGS_REQUEST,
});

export const loadRatingsSucess = (json) => ({
  type: LOAD_RATINGS_SUCCESS,
  ratings: json,
});

export const fetchRatings = () => (dispatch) => {
  dispatch(loadRatingsRequest());

  return dispatch(loadRatingsSucess(ratings));
  
  // return fetch('http://localhost:5000/providers')
  //   .then(
  //     response => response.json(),
  //     error => console.log('An error occurred.', error),
  //   )
  //   .then(
  //     json => dispatch(loadProvidersSucess(json)),
  //   );
};
