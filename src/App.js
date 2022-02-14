import * as React from 'react';
import {Provider} from 'react-redux';

import {store, persistor} from './redux';
import {PersistGate} from 'redux-persist/integration/react';

import Navigation from './navigators';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
