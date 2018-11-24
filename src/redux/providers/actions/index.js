export const SELECT_PROVIDER = 'SELECT_PROVIDER';
export const LOAD_PROVIDERS_REQUEST = 'LOAD_PROVIDERS_REQUEST';
export const LOAD_PROVIDERS_SUCCESS = 'LOAD_PROVIDERS_SUCCESS';

// provider in this case is an object of
// TODO: {}
export const selectProvider = (provider) => ({
  type: SELECT_PROVIDER,
  provider,
});

export const loadProvidersRequest = () => ({
  type: LOAD_PROVIDERS_REQUEST,
});

export const loadProvidersSucess = (json) => ({
  type: LOAD_PROVIDERS_SUCCESS,
  providers: json,
});

export const fetchProviders = () => (dispatch) => {
  dispatch(loadProvidersRequest());

  return fetch('http://localhost:5000/providers')
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
    .then(
      json => dispatch(loadProvidersSucess(json)),
    );
};
