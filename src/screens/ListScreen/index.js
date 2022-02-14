import React, { useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { SHOW_SCREEN } from 'jobsitychallengeapp/src/constants/screens';
import { clearShowsList, setShowsList, setCurrentShow, setCurrentShowEpisodes, clearCurrentShow } from 'jobsitychallengeapp/src/redux/actions/shows.actions';
import { getShowById, getShowList, getShowListEpisodesById } from 'jobsitychallengeapp/src/services';
import CardItem from 'jobsitychallengeapp/src/components/CardItem';
import styles from './styles';
import { orderEspisodesBySeason } from 'jobsitychallengeapp/src/utils/orderEpisodes';
import SearchBar from '../../components/SearchBar';

const ListScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const { showsList, currentShow, showsSearchResult } = useSelector(state => state.shows);

	useEffect(() => {
		const GetShows = async () => {
			const response = await getShowList();
			dispatch(setShowsList(response));
		}

		dispatch(clearCurrentShow())
		GetShows();

		return function cleanup() {
			dispatch(clearShowsList());
		}
	}, []);

	const handleGoToShow = async (id) => {
		const response = await getShowById(id);
		if (response) {
			dispatch(setCurrentShow(response))
			const GetShowEpisodes = async () => {
				const response = await getShowListEpisodesById(currentShow.id);
				dispatch(setCurrentShowEpisodes(orderEspisodesBySeason(response)));
				navigation.push(SHOW_SCREEN)
			}

			GetShowEpisodes();

		}
	}

	return (
		<View style={styles.container}>
			<SearchBar />
			<View style={{ borderWidth: 1, width: '100%' }}></View>
			{showsSearchResult?.length > 0 && (
				<FlatList
					data={showsSearchResult}
					keyExtractor={(item) => item.id}
					renderItem={({ item: {show} }) => (
						<TouchableOpacity
							onPress={() => handleGoToShow(show.id)}
						>
							<CardItem
								key={show.id}
								title={show.name}
								imgUrl={show?.image ? show.image.medium : ''}
							/>
						</TouchableOpacity>
					)}
				/>
			)}
			{showsList?.length > 0 && showsSearchResult?.length == 0 &&
				<FlatList
					data={showsList}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => handleGoToShow(item.id)}
						>
							<CardItem
								key={item.id}
								title={item.name}
								imgUrl={item.image.medium}
							/>
						</TouchableOpacity>
					)}
				/>
			}
		</View >
	)
};

export default ListScreen;
