import React, {useState, useEffect, useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {AudioContext} from '../contexts/AudioProvider';
import getArtistAndTitle from '../utils/getArtistAndTitle';
import fetchLyrics from '../api/genuis';

const Lyrics = () => {
  const [hits, setHits] = useState(null);
  const [loading, setLoading] = useState(false);

  const {currentPlayedMusicRef} = useContext(AudioContext);
  const music = currentPlayedMusicRef?.current?.path;
  const {artist, title} = getArtistAndTitle(music);

  useEffect(() => {
    if (!artist || !title) {
      return;
    }
    const fetch = async () => {
      setLoading(true);
      try {
        const hits = await fetchLyrics(artist, title);
        // console.log('hits', hits);
        setHits(hits);
      } catch (error) {
        console.log('error', error);
      }
      setLoading(false);
    };
    fetch();
  }, [artist, title]);

  if (loading) {
    return (
      <View className="bg-black-light flex-1 justify-center items-center text-center">
        <Text className="text-text-light">Loading...</Text>
      </View>
    );
  }

  if (!music) {
    return (
      <View className="bg-black-light flex-1 justify-center items-center text-center">
        <Text className="text-text-light">
          Please select a song to see lyrics
        </Text>
      </View>
    );
  }

  if (!artist || !title) {
    return (
      <View className="bg-black-light flex-1 justify-center items-center text-center">
        <Text className="text-text-light">Lyrics not found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="bg-black-light flex-1 px-2 py-4">
      <Text className="text-2xl leading-[50px] text-text-light">{hits}</Text>
    </ScrollView>
  );
};

export default Lyrics;
