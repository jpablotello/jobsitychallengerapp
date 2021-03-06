import * as types from 'jobsitychallengeapp/src/redux/types';

export const setShowsList = (data) => ({
	type: types.SET_SHOWS_LIST,
	payload: data,
});

export const clearShowsList = () => ({
	type: types.CLEAR_SHOWS_LIST,
});

export const setSearchShowsResult = (data) => ({
	type: types.SET_SEARCH_SHOWS_LIST,
	payload: data,
});

export const clearSearchShowsResult = () => ({
	type: types.CLEAR_SEARCH_SHOWS_LIST,
});

export const setCurrentShow = (data) => ({
	type: types.SET_CURRENT_SHOW,
	payload: data
});

export const clearCurrentShow = () => ({
	type: types.CLEAR_CURRENT_SHOW
});

export const setCurrentShowEpisodes = (data) => ({
	type: types.SET_CURRENT_SHOW_EPISODES,
	payload: data
});

export const setCurrentEpisode = (data) => ({
	type: types.SET_CURRENT_EPISODE,
	payload: data
});

export const clearCurrentEpisode = () => ({
	type: types.CLEAR_CURRENT_EPISODE
});

export const addShowToFavorite = (show) => ({
	type: types.ADD_SHOW_TO_FAVORITE,
	payload: show
});

export const removeShowFromFavorite = (id) => ({
	type: types.REMOVE_SHOW_FROM_FAVORITE,
	payload: id
});
