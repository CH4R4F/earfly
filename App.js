import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Intro from './src/navigation/Intro';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {/* <StatusBar hidden={true} /> */}
      <Intro />
    </NavigationContainer>
  );
}

export default App;
