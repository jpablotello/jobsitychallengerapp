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
    height: 300,
    width: '100%',
  },
  airDates: {
    alignItems: 'center',
    fontSize: 20,
    marginVertical: 10,
    width: '100%',
  },
  datesText: {
    fontSize: 18,
  },
  genresContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  genresText: {
    fontSize: 18,
    textAlign: 'center',
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
