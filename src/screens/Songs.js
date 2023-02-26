import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import requestExternalStoragePermission from '../utils/permissions';
import getMusics from '../utils/getMusics';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import SongRow from '../components/SongRow';
import OptionModal from '../components/OptionsModal';

const dataProvider = new DataProvider((r1, r2) => {
  return r1 !== r2;
});

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

  const getMusicFiles = async () => {
    const hasPermission = await requestExternalStoragePermission();
    if (hasPermission) {
      const musicFiles = await getMusics();
      setSongs(musicFiles);
    }
  };

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
      />
    );
  };

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
