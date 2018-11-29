export const SELECT_PROVIDER = 'SELECT_PROVIDER';
export const LOAD_PROVIDERS_REQUEST = 'LOAD_PROVIDERS_REQUEST';
export const LOAD_PROVIDERS_SUCCESS = 'LOAD_PROVIDERS_SUCCESS';

const providers = {
  0: {
    name: 'First Last',
    image: 'http://picsum.photos/200',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['10x10', 'Winter'],
  },
  1: {
    name: 'First Last',
    image: 'http://picsum.photos/201',
    imgName: 'test',
    description: '5 * 5 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['5x5', 'Summer'],
  },
  2: {
    name: 'hmm',
    image: 'http://picsum.photos/222',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['10x10', 'Summer'],
  },
  3: {
    name: 'First Last',
    image: 'http://picsum.photos/223',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['10x10', 'Summer'],
  },
  4: {
    name: 'First Last',
    image: 'http://picsum.photos/256',
    imgName: 'test',
    description: '5 * 5 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['10x10', 'Summer'],
  },
  5: {
    name: 'hmm',
    image: 'http://picsum.photos/504',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['5x5'],
  },
};

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

  return dispatch(loadProvidersSucess(providers));

  // return fetch('http://localhost:5000/providers')
  //   .then(
  //     response => response.json(),
  //     error => console.log('An error occurred.', error),
  //   )
  //   .then(
  //     json => dispatch(loadProvidersSucess(json)),
  //   );
};
