import {StyleSheet} from 'react-native';
import colors from 'jobsitychallengeapp/src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 52,
    justifyContent: 'center',
    width: 244,
  },

  text: {
    bottom: '26.92%',
    color: colors.darkBlue,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    left: '6.31%',
    letterSpacing: 0.15,
    lineHeight: 24,
    position: 'absolute',
    right: '6.31%',
    textAlign: 'center',
    top: '26.92%',
  },

  disabled: {
    backgroundColor: colors.gray,
    borderWidth: 0,
  },
});
