import React from 'react';
import { Text, View} from 'react-native';
import { LIST_SCREEN } from 'jobsitychallengeapp/src/constants/screens';
import styles from './styles';
import Button from '../../components/Button';

const HomeScreen = ({ navigation }) => {
	const handleGoToListScreen = () => {
		navigation.push(LIST_SCREEN)
	}

	return (
		<View style={styles.container}>
			<Button 
			  text="Go To Shows List"
				onPress={handleGoToListScreen}
			/>
		</View>
	)
};

export default HomeScreen;
