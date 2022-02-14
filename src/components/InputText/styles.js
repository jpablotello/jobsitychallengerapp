import {StyleSheet} from 'react-native';
import color from 'jobsitychallengeapp/src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  text: {
    fontStyle: 'normal',
    fontSize: 14.4,
    lineHeight: 16,
    color: color.darkBlue,
  },
  sectionInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 38,
    width: 245,
    borderWidth: 1,
    borderColor: color.darkGray,
  },
  input: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 8,
    marginRight: 8,
    fontSize: 16,
    lineHeight: 20,
  },
});
