import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import requestExternalStoragePermission from '../utils/permissions';
import getMusics from '../utils/getMusics';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import SongRow from '../components/SongRow';
import OptionModal from '../components/OptionsModal';
import Sound from 'react-native-sound';

// data parovider of recyclerlistview
const dataProvider = new DataProvider((r1, r2) => {
  return r1 !== r2;
});

// layout provider for recyclerlistview
const layoutProvider = new LayoutProvider(
  index => {
    return index;
  },
  (type, dim) => {
    dim.width = Dimensions.get('window').width;
    dim.height = 80;
  },
);

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [optionSelected, setOptionSelected] = useState({});
  const [optionModalVisible, setOptionModalVisible] = useState(false);
  const currentPlayedMusicRef = useRef(null);

  // Get Music Files after granting permission
  const getMusicFiles = async () => {
    const hasPermission = await requestExternalStoragePermission();
    if (hasPermission) {
      const musicFiles = await getMusics();
      setSongs(musicFiles);
    }
  };

  // Render each row of recyclerlistview
  const rowRenderer = (type, data) => {
    const {path, metadata} = data;
    const title = metadata.title || path.split('/').pop();
    return (
      <SongRow
        onOptionsPress={() => {
          setOptionSelected({
            title,
            path,
          });
          setOptionModalVisible(true);
        }}
        title={title}
        duration={metadata.duration}
        playMusic={() => playMusic(path)}
      />
    );
  };

  // Play Music
  const playMusic = path => {
    if (currentPlayedMusicRef.current?.path === path) {
      const {playbackObj} = currentPlayedMusicRef.current;
      console.log('playbackObj', playbackObj);
      if (playbackObj._playing) {
        playbackObj.pause();
      } else {
        playbackObj.play();
      }

      return;
    } else if (currentPlayedMusicRef.current) {
      currentPlayedMusicRef.current.playbackObj.stop();
    }
    const playbackObj = new Sound(path, '', error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      playbackObj.play();
    });
    currentPlayedMusicRef.current = {
      path,
      playbackObj,
    };
  };

  // Get Music Files on mount
  useEffect(() => {
    getMusicFiles();
  }, []);

  return (
    <View className="bg-black-light flex-1 space-y-3 py-2">
      {songs.length > 0 && (
        <RecyclerListView
          dataProvider={dataProvider.cloneWithRows(songs)}
          layoutProvider={layoutProvider}
          rowRenderer={rowRenderer}
        />
      )}
      <OptionModal
        onClose={() => setOptionModalVisible(false)}
        visible={optionModalVisible}
        title={optionSelected?.title}
        onPlayPress={() => console.log('play')}
        onPlayListPress={() => console.log('playlist')}
      />
    </View>
  );
};

export default Songs;
