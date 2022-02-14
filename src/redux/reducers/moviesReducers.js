import { CLEAR_MOVIES_LIST, SET_MOVIES_LIST } from "../types";


const initialState = {
    moviesList: [],
};

export function moviesReducers(state = initialState, action) {
    switch (action.type) {
        case SET_MOVIES_LIST:
            return {
                ...state,
                moviesList: action.payload
            };
        case CLEAR_MOVIES_LIST:
            return {
                ...state,
                moviesList: []
            };
        default:
            return state;
    }
}
