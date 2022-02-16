import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';

const EpisodeLineViewer = ({ onPress, text, isLoading = false }) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={styles.line} disabled={isLoading}>
				<Text style={styles.episodeName}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
}

export default EpisodeLineViewer;