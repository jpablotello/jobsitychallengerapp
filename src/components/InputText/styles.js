import {StyleSheet} from 'react-native';
import color from 'jobsitychallengeapp/src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  text: {
    color: color.darkBlue,
    fontStyle: 'normal',
    fontSize: 14.4,
    lineHeight: 16,
  },
  sectionInput: {
    alignItems: 'center',
    borderColor: color.darkGray,
    borderWidth: 1,
    flexDirection: 'row',
    height: 38,
    width: 245,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    marginRight: 8,
    paddingTop: 5,
    paddingLeft: 8,
  },
});
