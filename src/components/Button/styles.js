import {StyleSheet} from 'react-native';
import colors from 'jobsitychallengeapp/src/constants/colors';

export const styles = StyleSheet.create({
  // button styles
  container: {
    borderRadius: 25,
    width: 244,
    height: 52,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // text button styles
  text: {
    position: 'absolute',
    left: '6.31%',
    right: '6.31%',
    top: '26.92%',
    bottom: '26.92%',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: 0.15,
    color: colors.darkBlue,
  },

  // button disabled
  disabled: {
    backgroundColor: colors.gray,
    borderWidth: 0,
  },
});
