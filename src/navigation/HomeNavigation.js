import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Songs, Playlists} from '../screens';
import {ROUTES, COLORS} from '../constants';

const Tab = createMaterialTopTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarPressColor: 'transparent',
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.TEXT_LIGHT,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          backgroundColor: COLORS.BLACK,
          marginTop: 20,
        },
      }}>
      <Tab.Screen name={ROUTES.SONGS} component={Songs} />
      <Tab.Screen name={ROUTES.PLAYLISTS} component={Playlists} />
    </Tab.Navigator>
  );
}

export default HomeNavigation;
