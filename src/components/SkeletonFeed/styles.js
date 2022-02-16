import {StyleSheet} from 'react-native';
import colors from 'jobsitychallengeapp/src/constants/colors';

const styles = StyleSheet.create({
	container: {
		borderColor: colors.darkBlue,
		height: 220,
		marginVertical: 15,
		marginHorizontal: 20,
		width: '90%',
	},
	borderCard: {
		borderWidth: 1,
	},
	headerContainer: {
		alignItems: 'center',
		borderBottomWidth: 1,
		height: 25,
    justifyContent: 'center',
		width: '100%',
	},
	titleText:{
    height: 15,
    width: 200,
	},
	mainContainer: {
		height: 190,
		padding: 10,
		width: '100%',
	},
	image: {
		height: 170,
    width: '100%',
	}
});

export default styles;
