import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants/';
import {Home, Intro as IntroScreen} from '../screens/index';
import DrawerNavigator from './Drawer';

const Stack = createStackNavigator();

function Intro() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
      initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME_DRWAER} component={DrawerNavigator} />
      <Stack.Screen name={ROUTES.INTRO} component={IntroScreen} />
    </Stack.Navigator>
  );
}

export default Intro;
