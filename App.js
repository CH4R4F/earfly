import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from './src/constants';
import DrawerNavigator from './src/navigation/Drawer';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.BLACK} />
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
