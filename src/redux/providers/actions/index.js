import { databaseRef } from '../../../config/firebase';
export const SELECT_PROVIDER = 'SELECT_PROVIDER';
export const LOAD_PROVIDERS_REQUEST = 'LOAD_PROVIDERS_REQUEST';
export const LOAD_PROVIDERS_SUCCESS = 'LOAD_PROVIDERS_SUCCESS';

export const selectProvider = provider => ({
  type: SELECT_PROVIDER,
  provider,
});

export const loadProvidersRequest = () => ({
  type: LOAD_PROVIDERS_REQUEST,
});

export const loadProvidersSucess = json => ({
  type: LOAD_PROVIDERS_SUCCESS,
  providers: json,
});

export const fetchProviders = () => dispatch => {
  let providers = {};
  dispatch(loadProvidersRequest());

  databaseRef.child('providers').on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      providers[childKey] = childData;
    });
    dispatch(loadProvidersSucess(providers));
  });
};
