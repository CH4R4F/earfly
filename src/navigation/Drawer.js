/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ROUTES, COLORS} from '../constants/';
import {Home, Songs, Playlists, Settings} from '../screens/index';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: COLORS.TEXT,
        headerBackTitleVisible: false,
        headerTitleStyle: {
          display: 'none',
        },
        headerStyle: {
          backgroundColor: COLORS.BLACK,
          borderBottomColor: COLORS.BLACK,
          shadowColor: COLORS.BLACK,
          shadowOpacity: 0,
        },
        drawerActiveBackgroundColor: COLORS.PRIMARY,
        drawerStyle: {
          backgroundColor: COLORS.BLACK_LIGHT,
        },
        drawerActiveTintColor: COLORS.TEXT,
        drawerInactiveTintColor: COLORS.TEXT_LIGHT,
        drawerLabelStyle: {
          marginLeft: -16,
          fontSize: 16,
        },
      }}
      initialRouteName={ROUTES.HOME}>
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={focused ? COLORS.TEXT : COLORS.TEXT_LIGHT}
            />
          ),
        }}
        name={ROUTES.HOME}
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name={focused ? 'musical-notes' : 'musical-notes-outline'}
              size={size}
              color={focused ? COLORS.TEXT : COLORS.TEXT_LIGHT}
            />
          ),
        }}
        name={ROUTES.SONGS}
        component={Songs}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name={focused ? 'list' : 'list-outline'}
              size={size}
              color={focused ? COLORS.TEXT : COLORS.TEXT_LIGHT}
            />
          ),
        }}
        name={ROUTES.PLAYLISTS}
        component={Playlists}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name={focused ? 'settings' : 'settings-outline'}
              size={size}
              color={focused ? COLORS.TEXT : COLORS.TEXT_LIGHT}
            />
          ),
        }}
        name={ROUTES.SETTINGS}
        component={Settings}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
