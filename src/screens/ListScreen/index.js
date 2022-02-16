import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { SHOW_SCREEN } from 'jobsitychallengeapp/src/constants/screens';
import { clearShowsList, setShowsList, setCurrentShow, setCurrentShowEpisodes, clearCurrentShow } from 'jobsitychallengeapp/src/redux/actions/shows.actions';
import { getShowById, getShowList, getShowListEpisodesById } from 'jobsitychallengeapp/src/services';
import { orderEspisodesBySeason } from 'jobsitychallengeapp/src/utils/orderEpisodes';
import SearchBar from 'jobsitychallengeapp/src/components/SearchBar';
import ResultViewer from 'jobsitychallengeapp/src/components/ResultViewer';
import SkeletonFeed from 'jobsitychallengeapp/src/components/SkeletonFeed';
import useLocalizer from 'jobsitychallengeapp/src/hooks/useLocalizer';
import Separator from 'jobsitychallengeapp/src/components/Separator';
import styles from './styles';

const ListScreen = ({ navigation }) => {
	const { t } = useLocalizer('SHOWLIST');
	const dispatch = useDispatch();
	const { showsList, currentShow, showsSearchResult } = useSelector(state => state.shows);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const GetShows = async () => {
			const response = await getShowList();
			dispatch(setShowsList(response));
			setIsLoading(false)
		}

		setIsLoading(true);
		dispatch(clearCurrentShow())
		GetShows();

		return function cleanup() {
			dispatch(clearShowsList());
		}
	}, []);

	const isSearchResults = showsSearchResult.length > 0;

	const isFeedResults = showsList.length > 0 && showsSearchResult.length === 0;

	const handleGoToShow = async (id) => {
		if (isLoading) return;
		setIsLoading(true);
		const response = await getShowById(id);
		if (response) {
			dispatch(setCurrentShow(response))
			const GetShowEpisodes = () => {
				getShowListEpisodesById(id)
					.then((response) => {
						dispatch(setCurrentShowEpisodes(orderEspisodesBySeason(response)));
						navigation.push(SHOW_SCREEN)
					})
					.catch((err) => {
						console.log(err);
					})
					.finally(() => {
						setIsLoading(false);
					})
			}

			GetShowEpisodes();

		}
	}

	return (
		<View style={styles.container}>
			<SearchBar />
			<Separator />
			{isLoading &&
				<>
					<SkeletonFeed />
					<SkeletonFeed />
					<SkeletonFeed />
				</>
			}
			{isSearchResults && !isLoading &&
				<ResultViewer
					data={showsSearchResult}
					handleGoTo={handleGoToShow}
					isLoading={isLoading}
					isSearchResult={true}
				/>
			}
			{isFeedResults && !isLoading &&
				<ResultViewer
					data={showsList}
					handleGoTo={handleGoToShow}
					isLoading={isLoading}
				/>
			}
		</View >
	)
};

export default ListScreen;
