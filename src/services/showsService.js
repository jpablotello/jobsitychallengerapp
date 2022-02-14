import endpoints from "jobsitychallengeapp/src/config/endpoints";
import { genericGet } from "./genericService";

const getShowList = () => {
	return genericGet(endpoints.show.list, "", {});
};

const getShowById = (id) => {
	return genericGet(`${endpoints.show.getShowById}${id}`, "", {});
}

const getShowListEpisodesById = (id) => {
	return genericGet(`${endpoints.show.getShowEpisodesListById}${id}/episodes`, "", {});
}

const getEpisodeById = (showId, season, number) => {
	return genericGet(`${endpoints.show.getShowEpisodeById}${showId}/episodebynumber?season=${season}&number=${number}`, "", {});
}

const getShowSearchList = (params) => {
	return genericGet(`${endpoints.show.searchList}?q=${params}`, "", {});
}

export {getShowList, getShowById,getShowListEpisodesById, getEpisodeById, getShowSearchList};