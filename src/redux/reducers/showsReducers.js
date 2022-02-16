import {
	CLEAR_CURRENT_SHOW,
	CLEAR_SHOWS_LIST,
	SET_CURRENT_SHOW,
	SET_SHOWS_LIST,
	SET_CURRENT_SHOW_EPISODES,
	SET_CURRENT_EPISODE,
	CLEAR_CURRENT_EPISODE,
	SET_SEARCH_SHOWS_LIST,
	CLEAR_SEARCH_SHOWS_LIST,
	ADD_SHOW_TO_FAVORITE,
	REMOVE_SHOW_FROM_FAVORITE,
} from "../types";


const initialState = {
	showsList: [],
	showsSearchResult: [],
	favShows: [],
	currentShow: {
		id: 0,
		url: "",
		name: "",
		type: "",
		language: "",
		genres: [],
		status: "",
		runtime: 0,
		averageRuntime: 0,
		premiered: "",
		ended: "",
		officialSite: "",
		schedule: {
			time: "",
			days: []
		},
		rating: {
			average: null
		},
		weight: 0,
		network: {},
		webChannel: null,
		dvdCountry: null,
		externals: {},
		image: {
			medium: "",
			original: ""
		},
		summary: "",
		updated: null,
		_links: {},
		episodes: []
	},
	currentEpisode: {
		id: 0,
		url: "",
		name: "",
		season: 0,
		number: 0,
		type: "",
		airdate: "",
		airtime: "",
		airstamp: "",
		runtime: 0,
		rating: {
			average: null
		},
		image: {
			medium: "",
			original: ""
		},
		summary: "",
		_links: {
		}
	}
};

export function showsReducers(state = initialState, action) {
	switch (action.type) {
		case SET_SHOWS_LIST:
			return {
				...state,
				showsList: action.payload
			};
		case CLEAR_SHOWS_LIST:
			return {
				...state,
				showsList: []
			};
		case SET_CURRENT_SHOW:
			return {
				...state,
				currentShow: { ...state.currentShow, ...action.payload }
			};
		case SET_CURRENT_SHOW_EPISODES:
			return {
				...state,
				currentShow: { ...state.currentShow, episodes: action.payload }
			};
		case CLEAR_CURRENT_SHOW:
			return {
				...state,
				currentShow: initialState.currentShow,
			};
		case SET_CURRENT_EPISODE:
			return {
				...state,
				currentEpisode: action.payload,
			};
		case CLEAR_CURRENT_EPISODE:
			return {
				...state,
				currentEpisode: initialState.currentEpisode,
			};
		case SET_SEARCH_SHOWS_LIST:
			return {
				...state,
				showsSearchResult: action.payload,
			};
		case CLEAR_SEARCH_SHOWS_LIST:
			return {
				...state,
				showsSearchResult: [],
			};
		case ADD_SHOW_TO_FAVORITE:
			return {
				...state,
				favShows: [...state.favShows, action.payload],
			};
		case REMOVE_SHOW_FROM_FAVORITE:
			return {
				...state,
				favShows: state.favShows.filter((item) => item.id != action.payload),
			};
		default:
			return state;
	}
}
