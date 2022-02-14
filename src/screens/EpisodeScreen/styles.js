import {StyleSheet} from 'react-native';
import color from 'jobsitychallengeapp/src/constants/colors';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: color.white,
    flex: 1,
    paddingHorizontal: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: 300,
  },
  seasonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 20,
    width: '100%',
  },
  summaryContainer: {
    borderWidth: 1,
    width: '100%',
  },
  summaryText: {
    fontSize: 18,
  },
});

export default styles;
