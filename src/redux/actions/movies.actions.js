import * as types from 'jobsitychallengeapp/src/redux/types';

export const setMoviesList = (data) => ({
	type: types.SET_MOVIES_LIST,
	payload: data,
});

export const clearMoviesList = () => ({
	type: types.CLEAR_MOVIES_LIST,
});
