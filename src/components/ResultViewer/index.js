import React from 'react';
import { FlatList, View } from 'react-native';

import CardItem from 'jobsitychallengeapp/src/components/CardItem';
import styles from './styles';

const ResultViewer = ({ data, handleGoTo, isSearchResult = false, isLoading = false }) => {

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({item}) => {
					const {id, image, name} = isSearchResult ? item.show : item ;
					return (
						<View
							key={id}
						>
							<CardItem
								title={name}
								imgUrl={image ? image.medium : ''}
								onPress={() => handleGoTo(id)}
								isLoading={isLoading}
							/>
						</View>
					)
				}
				}
			/>
		</View>
	);
}

export default ResultViewer;