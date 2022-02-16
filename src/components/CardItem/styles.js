import {StyleSheet} from 'react-native';
import colors from 'jobsitychallengeapp/src/constants/colors';

const styles = StyleSheet.create({
	container: {
		borderColor: colors.darkBlue,
		height: 220,
		marginHorizontal: 20,
		marginVertical: 15,
		width: '90%',
	},
	borderCard: {
		borderWidth: 1,
	},
	headerContainer: {
		alignItems: 'center',
		borderBottomWidth: 1,
		height: 35,
		width: '100%',
	},
	titleText:{
		fontSize: 20,
	},
	mainContainer: {
		height: 190,
		padding: 10,
		width: '100%',
	},
	image: {
		flex: 1,
	}
});

export default styles;