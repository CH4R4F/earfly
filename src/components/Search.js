import React from 'react';
import {View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../constants';

const Search = () => {
  return (
    <View className="flex-row items-center bg-white/30 rounded-full px-4 mx-3 py-2 mt-4">
      <TextInput placeholder="Search..." className="flex-1 ml-3" />
      <Feather name="search" size={24} color={COLORS.TEXT} className="ml-3" />
    </View>
  );
};

export default Search;
