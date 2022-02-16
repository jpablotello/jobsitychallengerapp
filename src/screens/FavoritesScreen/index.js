import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { SHOW_SCREEN } from 'jobsitychallengeapp/src/constants/screens';
import { setCurrentShow, setCurrentShowEpisodes } from 'jobsitychallengeapp/src/redux/actions/shows.actions';
import { getShowListEpisodesById } from 'jobsitychallengeapp/src/services';
import { orderEspisodesBySeason } from 'jobsitychallengeapp/src/utils/orderEpisodes';
import ResultViewer from 'jobsitychallengeapp/src/components/ResultViewer';
import SkeletonFeed from 'jobsitychallengeapp/src/components/SkeletonFeed';
import useLocalizer from 'jobsitychallengeapp/src/hooks/useLocalizer';
import useFavoriteShow from 'jobsitychallengeapp/src/hooks/useFavoriteShow';
import styles from './styles';


const FavoritesScreen = ({ navigation }) => {
  const {t} = useLocalizer('FAVLIST');
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const { favShows, currentShow } = useSelector(state => state.shows);
	const { getFavoriteById } = useFavoriteShow();
	

	useEffect(() => {
	}, []);

	const handleGoToShow = async (id) => {
		dispatch(setCurrentShow(getFavoriteById(id)));

		const GetShowEpisodes = async () => {
			const response = await getShowListEpisodesById(currentShow.id);
			dispatch(setCurrentShowEpisodes(orderEspisodesBySeason(response)));
			navigation.push(SHOW_SCREEN);
		}

		GetShowEpisodes()

	}

	if(favShows) {
		return(
			<View style={styles.container}>
				<Text style={{marginTop: 40, fontSize: 26, textAlign: 'center'}}>{t('noFavorites')}</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			{isLoading &&
				<>
					<SkeletonFeed />
					<SkeletonFeed />
					<SkeletonFeed />
				</>
			}
			{favShows && !isLoading &&
				<ResultViewer
					data={favShows}
					handleGoTo={handleGoToShow}
				/>
			}
		</View >
	)
};

export default FavoritesScreen;
