import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { setCurrentEpisode } from 'jobsitychallengeapp/src/redux/actions';
import { getEpisodeById } from 'jobsitychallengeapp/src/services';
import { EPISODE_SCREEN } from 'jobsitychallengeapp/src/constants/screens';
import useLocalizer from 'jobsitychallengeapp/src/hooks/useLocalizer';
import EpisodeLineViewer from 'jobsitychallengeapp/src/components/EpisodeLineViewer';
import styles from './styles';

const EpisodeListViewer = ({ episodes, currentShowId }) => {
  const { t } = useLocalizer('SHOWSCREEN');
  const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGoToEpisode = (item) => {
    const getEpisode = (showId, season, number) => {
      getEpisodeById(showId, season, number)
      .then((response) => {
        dispatch(setCurrentEpisode(response));
        navigation.push(EPISODE_SCREEN)
      })
      .catch((err)=> {
        console.log(err);
      })
      .finally(()=>{
        setIsLoading(false);
      })
    }

    if(isLoading) return;
    setIsLoading(true);
    getEpisode(currentShowId, item.season, item.number);
  }

  return (
    <View style={{ width: '100%', borderWidth: 1, marginTop: 20 }}>
      {episodes?.length > 0 && (
        episodes.map((item, index) => (
          <View style={styles.episodesContainer} key={item.id}>
            <Text style={styles.seasonTitle}>{t('season')}{index + 1}</Text>
            {item.map((i) => {
              return (
                <EpisodeLineViewer
                  text={i.name}
                  onPress={() => handleGoToEpisode(i)}
                  key={i.id}
                  isLoading={isLoading}
                />
              )
            })}
          </View>
        ))
      )}
    </View>
  )
};

export default EpisodeListViewer;
