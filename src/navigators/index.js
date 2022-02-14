import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppStack from './AppStack';
import { APP_STACK } from 'jobsitychallengeapp/src/constants/screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <>
            <Stack.Screen name={APP_STACK} component={AppStack} />
          </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
