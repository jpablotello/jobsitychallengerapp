import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getShowListEpisodesById, getEpisodeById } from 'jobsitychallengeapp/src/services';

import styles from './styles';
import { sumOfText } from 'jobsitychallengeapp/src/utils/orderEpisodes';

const ShowScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const { currentShow } = useSelector(state => state.shows);

	const { name, image, schedule, genres, summary, episodes } = currentShow;

	useEffect(() => {

		// return (() => {
		// 	dispatch(clearCurrentShow())
		// })
	}, []);

	const handleGoToEpisode = (item) => {
		console.log('Episodio Id : ', item);
		const getEpisode = async (id) => {
			const response = await getEpisodeById(id);
		}

		getEpisode(item.id);
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
				)
				}
				{schedule?.time && (<Text style={styles.datesText}>{schedule.time}</Text>)}
			</View>
			<View style={styles.genresContainer}>
				<Text style={styles.genresText}>Genres :</Text>
				<Text style={styles.genresText}>{sumOfText(genres)}</Text>
			</View>
			<View style={styles.episodesContainer}>
				{episodes?.length > 0 && (
					episodes.map((item, index) => (
						<>
							<Text style={styles.seasonTitle}>Season : {index + 1}</Text>
							{item.map((i, idx) => (
								<TouchableOpacity>
									<Text style={styles.episodeName}>{i.name}</Text>
								</TouchableOpacity>
							))}
						</>
					))
				)}
			</View>
		</ScrollView >
	)
};

export default ShowScreen;


// <FlatList
// data={item}
// keyExtractor={(item) => item.id}
// renderItem={({ item }) => (
// 	<TouchableOpacity
// 		onPress={() => handleGoToEpisode(item)}
// 	>
// 		<Text>{item.name}</Text>
// 	</TouchableOpacity>
// )}
// />
