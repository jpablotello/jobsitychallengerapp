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
    marginVertical: 25,
  },
  image: {
    width: '100%',
    height: 300,
  },
  airDates: {
    fontSize: 20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  datesText: {
    fontSize: 18,
  },
  genresContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  genresText: {
    fontSize: 18,
  },
  summaryContainer: {
    marginTop: 20,
  },
  summaryText: {
    fontSize: 18,
  },
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
