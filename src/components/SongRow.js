import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import durationToString from '../utils/duration';
import Entypo from 'react-native-vector-icons/Entypo';
import audioGif from '../assets/audio.gif';

const SongRow = ({
  title,
  duration,
  onOptionsPress,
  playMusic,
  isPlaying,
  active,
}) => {
  return (
    <View className="bg-black p-3 rounded-md mx-2 flex-row items-center space-x-3">
      <TouchableWithoutFeedback onPress={playMusic}>
        <View className="w-10 h-10 bg-black-light rounded-full items-center justify-center ">
          {isPlaying && active ? (
            <Image source={audioGif} className="w-10 h-10 rounded-full" />
          ) : (
            <Entypo name="controller-play" size={20} color="#fff" />
          )}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={playMusic}>
        <View className="flex-1 ml-3">
          <Text numberOfLines={1} className="text-white">
            {title}
          </Text>
          <Text className="text-white/40">{durationToString(duration)}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View className="">
        <Entypo
          onPress={onOptionsPress}
          name="dots-three-vertical"
          size={20}
          color="#fff"
        />
      </View>
    </View>
  );
};

export default SongRow;
