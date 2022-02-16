import { StyleSheet } from 'react-native';
import colors from 'jobsitychallengeapp/src/constants/colors';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginVertical: 5,
		width: '100%',
	},
	line: {
		alignItems: 'center',
		backgroundColor: colors.lightGray01,
		borderWidth: 1,
		borderRadius: 5,
		width: '90%',
	},
	episodeName: {
		fontSize: 16,
		marginVertical: 5,
	}
});

export default styles;