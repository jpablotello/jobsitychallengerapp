import endpoints from "jobsitychallengeapp/src/config/endpoints";
import { genericGet } from "./genericService";

export const getShowList = () => {
	return genericGet(endpoints.show.list, "", {});
};
