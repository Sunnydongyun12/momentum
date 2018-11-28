
import * as React from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import configureStore from 'redux/message/store';
// import rootSaga from './sagas';
import AppContainer from 'redux/message/containers/AppContainer';

const { store, persistor } = configureStore();
persistor.purge();
// store.runSaga(rootSaga, store);
const SideMessenger = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default SideMessenger;
