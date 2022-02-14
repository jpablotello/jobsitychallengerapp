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

const getEpisodeById = (id) => {
	return genericGet(`${endpoints.show.getShowEpisodeById}${id}/episodes/`, "", {});
}


export {getShowList, getShowById,getShowListEpisodesById, getEpisodeById};