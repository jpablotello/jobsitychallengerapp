import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import { getShowList } from 'jobsitychallengeapp/src/services';

import styles from './styles';
import { clearMoviesList, setMoviesList } from '../../redux/actions/movies.actions';

const ListScreen = () => {
  const dispatch = useDispatch();
	
  const {moviesList} = useSelector(state => state.movies);

	useEffect(() => {
		const GetShows = async () => {
			const response = await getShowList();
			dispatch(setMoviesList(response));
		}

		GetShows();

		return function cleanup() {
			dispatch(clearMoviesList());
		}
	}, []);

	useEffect(() => {
		if(moviesList?.length > 0) {
			console.log('Movies updated');
		} else {
			console.log('Movies cleared');
		}
	}, [moviesList]);

	return (
		<View style={styles.container}>
			<Text>ListScreen</Text>
		</View>
	)
};

export default ListScreen;
