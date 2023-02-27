import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from './src/constants';
import DrawerNavigator from './src/navigation/Drawer';
import AudioProvider from './src/contexts/AudioProvider';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <AudioProvider>
        <StatusBar backgroundColor={COLORS.BLACK} />
        <DrawerNavigator />
      </AudioProvider>
    </NavigationContainer>
  );
}

export default App;
