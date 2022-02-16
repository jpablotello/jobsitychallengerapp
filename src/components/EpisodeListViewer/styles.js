import {StyleSheet} from 'react-native';
import color from 'jobsitychallengeapp/src/constants/colors';

const styles = StyleSheet.create({
  episodesContainer: {
    alignItems: 'center',
    borderTopWidth: 1,
    width: '100%'
  },
  seasonTitle: {
    fontSize: 20,
    marginVertical: 10,
    width: '100%'
  },
  episodeTitle: {
    fontSize: 20,
    marginTop: 30,
    textDecorationLine: 'underline'
  },
  episodeName: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default styles;
