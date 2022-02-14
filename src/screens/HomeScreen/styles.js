import {StyleSheet} from 'react-native';
import color from 'jobsitychallengeapp/src/constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: color.white,
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 75,
    paddingBottom: 75,
    paddingHorizontal: 84,
  },
  button: {
    alignItems: 'center',
    backgroundColor: color.chambray,
    height: 40,
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: color.white,
  }
});

export default styles;
