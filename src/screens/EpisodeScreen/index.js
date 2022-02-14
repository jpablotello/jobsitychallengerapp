import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getShowListEpisodesById, getEpisodeById } from 'jobsitychallengeapp/src/services';

import styles from './styles';
import { sumOfText } from 'jobsitychallengeapp/src/utils/orderEpisodes';
import WebView from 'react-native-webview';

const EpisodeScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const { currentEpisode } = useSelector(state => state.shows);

	const { name, number, season, summary, image } = currentEpisode;

	useEffect(() => {

	}, []);

	return (
		<ScrollView style={styles.scrollView} nestedScrollEnabled={true} contentContainerStyle={styles.container}>
			<Text style={styles.title}>{name}</Text>
			{image?.medium &&
				<Image
					style={styles.image}
					source={{ uri: image.medium }}
					resizeMethod={'scale'}
				/>
			}
			<View style={styles.seasonContainer}>
				<Text style={styles.seasonText}>Season : {season}</Text>
				<Text style={styles.seasonText}>Episode Number : {number}</Text>
			</View>
			<View style={styles.summaryContainer}>
				<Text>{summary}</Text>
			</View>
		</ScrollView >
	)
};

export default EpisodeScreen;
