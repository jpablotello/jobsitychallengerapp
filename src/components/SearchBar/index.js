import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import { useDispatch } from 'react-redux';

import InputText from 'jobsitychallengeapp/src/components/InputText';
import {setShowsList, setSearchShowsResult, clearSearchShowsResult } from 'jobsitychallengeapp/src/redux/actions/shows.actions';
import { getShowSearchList} from 'jobsitychallengeapp/src/services/showsService';

const SearchBar = () => {
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
        label="Search"
      />
      <View style={{height: 30}}>
        {value != '' && <Text>Result for: {value}</Text>}
      </View>
    </View>
  );
};

export default SearchBar;
