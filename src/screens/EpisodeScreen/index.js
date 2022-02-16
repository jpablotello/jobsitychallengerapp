import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import AutoHeightWebView from 'react-native-autoheight-webview'
import { Dimensions } from 'react-native'

import useLocalizer from 'jobsitychallengeapp/src/hooks/useLocalizer';
import Separator from 'jobsitychallengeapp/src/components/Separator';
import styles from './styles';

const EpisodeScreen = () => {
	const {t} = useLocalizer('EPISODESCREEN')
	const { currentEpisode } = useSelector(state => state.shows);

	const { name, number, season, summary, image } = currentEpisode;

	if(!currentEpisode) return(
		<Text>Cargando...</Text>
	);

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
			<Separator />
			<Text>{t('summaryReview')}</Text>
			<View style={{width: '100%', alignItems: 'center'}}>
				<AutoHeightWebView
					style={{ width: Dimensions.get('window').width - 55, marginTop: 15 }}
					source={{ html: summary }}
					scalesPageToFit={false}
					viewportContent={'width=device-width, user-scalable=no'}
					scrollEnabled={false}
				/>
			</View>
			<Separator />
		</ScrollView >
	)
};

export default EpisodeScreen;
