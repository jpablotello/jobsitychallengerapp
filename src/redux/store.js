import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'location', 'post', 'feed', 'search'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);

const configureStore = (preloadedState) => {
  const composedEnhancers = composeWithDevTools(middleware);
  return createStore(persistedReducer, preloadedState, composedEnhancers);
};

const store = configureStore({});
const persistor = persistStore(store);

export {store, persistor};
