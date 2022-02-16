import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CardItem = ({ title, imgUrl, onPress, isLoading = false }) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={onPress}
				disabled={isLoading}
			>
				<View style={styles.borderCard}>
					<View style={styles.headerContainer}>
						<Text style={styles.titleText}>{title}</Text>
					</View>
					<View style={styles.mainContainer}>
						<Image
							style={styles.image}
							resizeMode="stretch"
							source={{ uri: imgUrl }}
						/>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}

export default CardItem;
