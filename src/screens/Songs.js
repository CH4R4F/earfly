import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import requestExternalStoragePermission from '../utils/permissions';
import getMusics from '../utils/getMusics';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import SongRow from '../components/SongRow';

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

const rowRenderer = (type, data) => {
  const {path, metadata} = data;
  const title = metadata.title || path.split('/').pop();
  return <SongRow title={title} duration={metadata.duration} />;
};

const Songs = () => {
  const [songs, setSongs] = useState([]);

  const getMusicFiles = async () => {
    const hasPermission = await requestExternalStoragePermission();
    if (hasPermission) {
      const musicFiles = await getMusics();
      setSongs(musicFiles);
    }
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
    </View>
  );
};

export default Songs;
