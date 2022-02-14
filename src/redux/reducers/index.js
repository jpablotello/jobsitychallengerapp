import {combineReducers} from 'redux';
import { moviesReducers } from './moviesReducers';

export const rootReducer = combineReducers({
  movies: moviesReducers,
});

export default rootReducer;
