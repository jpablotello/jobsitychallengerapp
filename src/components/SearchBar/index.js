import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import { useDispatch } from 'react-redux';

import InputText from 'jobsitychallengeapp/src/components/InputText';
import {setShowsList, setSearchShowsResult, clearSearchShowsResult } from 'jobsitychallengeapp/src/redux/actions/shows.actions';
import { getShowSearchList, getShowList} from 'jobsitychallengeapp/src/services/showsService';
import useLocalizer from 'jobsitychallengeapp/src/hooks/useLocalizer';


const SearchBar = () => {
  const {t} = useLocalizer('SHOWLIST');
	const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const GetShows = async () => {
      const response = await getShowList();
      dispatch(setShowsList(response));
    }

    const GetSearchShow = async (params) => {
      if(!loading) {
        setLoading(true);
        const response = await getShowSearchList(params);
        dispatch(setSearchShowsResult(response));
        setLoading(false);
      }
    }

    if(value == '') {
      dispatch(clearSearchShowsResult());
      GetShows();
    } else {
      GetSearchShow(value);
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <InputText
        value={value}
        setValue={setValue}
        label={t('search')}
      />
      <View style={{height: 30}}>
        {value != '' && <Text>{t('resultFor')}{value}</Text>}
      </View>
    </View>
  );
};

export default SearchBar;
