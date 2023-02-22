import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Intro from './src/navigation/Intro';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from './src/constants';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.BLACK} />
      <Intro />
    </NavigationContainer>
  );
}

export default App;
