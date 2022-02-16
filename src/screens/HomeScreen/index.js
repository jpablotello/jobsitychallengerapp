import React, { useEffect } from 'react';
import { View} from 'react-native';
import { useDispatch } from 'react-redux';

import { LIST_SCREEN, FAVORITES_SCREEN } from 'jobsitychallengeapp/src/constants/screens';
import Button from 'jobsitychallengeapp/src/components/Button';
import { clearShowsList } from 'jobsitychallengeapp/src/redux/actions/shows.actions';
import useLocalizer from 'jobsitychallengeapp/src/hooks/useLocalizer';
import Separator from 'jobsitychallengeapp/src/components/Separator';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
	const dispatch = useDispatch();
  const {t} = useLocalizer('HOMESCREEN');

	useEffect(() => {
			dispatch(clearShowsList());
	}, []);

	const handleGoToListScreen = () => {
		navigation.push(LIST_SCREEN)
	}

	const handleGoToFavoritesScreen = () => {
		navigation.push(FAVORITES_SCREEN)
	}

	return (
		<View style={styles.container}>
			<Button 
			  text={t('goToListButton')}
				onPress={handleGoToListScreen}
			/>
			<Separator />
			<Button 
			  text={t('goToFavoritesButton')}
				onPress={handleGoToFavoritesScreen}
			/>
		</View>
	)
};

export default HomeScreen;
