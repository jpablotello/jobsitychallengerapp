import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AutoHeightWebView from 'react-native-autoheight-webview'
import { Dimensions } from 'react-native'

import Button from 'jobsitychallengeapp/src/components/Button';
import { clearCurrentEpisode } from 'jobsitychallengeapp/src/redux/actions/shows.actions';
import { sumOfText } from 'jobsitychallengeapp/src/utils/orderEpisodes';
import Separator from 'jobsitychallengeapp/src/components/Separator';
import useLocalizer from 'jobsitychallengeapp/src/hooks/useLocalizer';
import EpisodeListViewer from 'jobsitychallengeapp/src/components/EpisodeListViewer';
import useFavoriteShow from 'jobsitychallengeapp/src/hooks/useFavoriteShow';
import styles from './styles';

const ShowScreen = ({ navigation }) => {
	const { t } = useLocalizer('SHOWSCREEN');
	const [isInFavorites, setIsInFavorites] = useState(false);
	const dispatch = useDispatch();
	const { addToFavorite, removeFromFav, isInFav } = useFavoriteShow();
	const { currentShow, favShows } = useSelector(state => state.shows);

	const { name, image, schedule, genres, summary, episodes, id } = currentShow;

	const handleToggleFavorite = () => {
		if (isInFavorites) {
			removeFromFav(id);
		} else {
			addToFavorite(currentShow);
		}
	}
	useEffect(() => {
		dispatch(clearCurrentEpisode())
	}, []);

	useEffect(() => {
		setIsInFavorites(isInFav(id))
	}, [favShows, currentShow]);

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
			<Separator />
			<Button
				text={isInFavorites ? t('removeFromFavorite') : t('addToFavorite')}
				onPress={handleToggleFavorite}
			/>
			<Separator />
			<View style={styles.airDates}>
				<Text style={styles.datesText}>{t('airDates')}</Text>
				{schedule?.days?.length > 0 && (
					<Text style={styles.datesText}>{sumOfText(schedule.days)}{schedule?.time && ` - ${schedule.time}hs`}</Text>
				)}
			</View>
			<Separator />
			<View style={styles.genresContainer}>
				<Text style={styles.genresText}>{t('genres')}</Text>
				<Text style={styles.genresText}>{sumOfText(genres)}</Text>
			</View>
			<Separator />
			<Text style={{ fontSize: 20 }}>{t('summaryReview')}</Text>
			<View style={{ width: '100%', alignItems: 'center' }}>
				<AutoHeightWebView
					style={{ width: Dimensions.get('window').width - 55, marginTop: 15 }}
					source={{ html: summary }}
					scalesPageToFit={false}
					viewportContent={'width=device-width, user-scalable=no'}
					scrollEnabled={false}
				/>
			</View>
			<Separator />
			<Text style={styles.episodeTitle}>{t('episodes')}</Text>
			{episodes &&
				<EpisodeListViewer
					episodes={episodes}
					currentShowId={id}
				/>
			}
		</ScrollView >
	)
};

export default ShowScreen;
