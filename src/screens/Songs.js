import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import requestExternalStoragePermission from '../utils/permissions';
import getMusics from '../utils/getMusics';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  const getMusicFiles = async () => {
    const hasPermission = await requestExternalStoragePermission();
    if (hasPermission) {
      const musicFiles = await getMusics();
      console.log(musicFiles);
    }
  };

  useEffect(() => {
    getMusicFiles();
  }, []);

  return (
    <View className="bg-black-light flex-1">
      <Text>Songs</Text>
    </View>
  );
};

export default Songs;
