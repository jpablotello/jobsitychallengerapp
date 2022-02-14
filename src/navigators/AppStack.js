import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SafeAreaView} from 'react-native';

//icons
import color from 'jobsitychallengeapp/src/constants/colors';
import { HOME_SCREEN, LIST_SCREEN, SHOW_SCREEN, EPISODE_SCREEN } from 'jobsitychallengeapp/src/constants/screens';
import HomeScreen from 'jobsitychallengeapp/src/screens/HomeScreen';
import ListScreen from 'jobsitychallengeapp/src/screens/ListScreen';
import ShowScreen from 'jobsitychallengeapp/src/screens/ShowScreen';

const HomeStack = createNativeStackNavigator();

const AppStack = () => (
  <SafeAreaView style={{backgroundColor: color.white, flex: 1}}>
    <HomeStack.Navigator
      initialRouteName={HOME_SCREEN}>
      <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <HomeStack.Screen name={LIST_SCREEN} component={ListScreen} />
      <HomeStack.Screen name={SHOW_SCREEN} component={ShowScreen} />
      <HomeStack.Screen name={EPISODE_SCREEN} component={ListScreen} />
    </HomeStack.Navigator>
  </SafeAreaView>
);
export default AppStack;
