import React from 'react';
import { View } from 'react-native';
import { Card } from "react-native-elements";
import styles from './styles';

const CardItem = ({ title, imgUrl }) => {
	
	return (
		<View style={styles.container}>
			<Card>
				<Card.Title>{title}</Card.Title>
				<Card.Divider />
				<Card.Image
					style={{ padding: 0 }}
					source={{uri: imgUrl}}
				/>
			</Card>
		</View>
	);
}

export default CardItem;