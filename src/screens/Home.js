import React from 'react';
import {View} from 'react-native';
import Search from '../components/Search';
import HomeNavigation from '../navigation/HomeNavigation';

const Home = () => {
  return (
    <View className="bg-black flex-1">
      <Search />
      <HomeNavigation />
    </View>
  );
};

export default Home;
