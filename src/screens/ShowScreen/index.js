import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { EPISODE_SCREEN } from 'jobsitychallengeapp/src/constants/screens';
import { getEpisodeById } from 'jobsitychallengeapp/src/services';
import { clearCurrentEpisode, setCurrentEpisode } from 'jobsitychallengeapp/src/redux/actions/shows.actions';
import { sumOfText } from 'jobsitychallengeapp/src/utils/orderEpisodes';
import styles from './styles';

const ShowScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const { currentShow } = useSelector(state => state.shows);

	const { name, image, schedule, genres, summary, episodes } = currentShow;

	useEffect(() => {
		dispatch(clearCurrentEpisode())
	}, []);

	const handleGoToEpisode = (item) => {
		const getEpisode = async (showId, season, number) => {
			const response = await getEpisodeById(showId, season, number);
			dispatch(setCurrentEpisode(response));
			navigation.push(EPISODE_SCREEN)
		}

		getEpisode(currentShow.id, item.season, item.number);
	}

	return (
		<ScrollView style={styles.scrollView} nestedScrollEnabled={true} contentContainerStyle={styles.container}>
			<Text style={styles.title}>{name}</Text>
			<Image
				style={styles.image}
				source={{ uri: image.medium }}
				resizeMethod={'scale'}
			/>
			<View style={styles.airDates}>
				<Text style={styles.datesText}>Air Dates</Text>
				{schedule?.days?.length > 0 && (
					<Text style={styles.datesText}>{sumOfText(schedule.days)}</Text>
				)}
				{schedule?.time && (<Text style={styles.datesText}>{schedule.time}</Text>)}
			</View>
			<View style={styles.genresContainer}>
				<Text style={styles.genresText}>Genres :</Text>
				<Text style={styles.genresText}>{sumOfText(genres)}</Text>
			</View>
			<View style={styles.summaryContainer}>
				<Text style={styles.summaryText}>{summary}</Text>
			</View>
			<Text style={styles.episodeTitle}>Episodes</Text>
			<View style={{ width: '100%', borderWidth: 1, marginTop: 20}}>
				{episodes?.length > 0 && (
					episodes.map((item, index) => (
						<View style={styles.episodesContainer}>
							<Text style={styles.seasonTitle}>Season : {index + 1}</Text>
							{item.map((i, idx) => (
								<TouchableOpacity
									onPress={() => handleGoToEpisode(i)}
								>
									<Text style={styles.episodeName}>{i.name}</Text>
								</TouchableOpacity>
							))}
						</View>
					))
				)}
			</View>
		</ScrollView >
	)
};

export default ShowScreen;
