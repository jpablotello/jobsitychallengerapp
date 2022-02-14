import {combineReducers} from 'redux';
import { showsReducers } from './showsReducers';

export const rootReducer = combineReducers({
  shows: showsReducers,
});

export default rootReducer;
