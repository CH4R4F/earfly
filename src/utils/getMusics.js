import MediaMeta from 'react-native-media-meta';
import RNFetchBlob from 'rn-fetch-blob';

async function getMusicFiles() {
  const audioFiles = [];

  const dirs = RNFetchBlob.fs.dirs;

  // recursively search for all files with an audio file extension
  async function searchForAudioFiles(dirPath) {
    const files = (await RNFetchBlob.fs.ls(dirPath)) || [];

    files.forEach(async file => {
      const stat = await RNFetchBlob.fs.stat(`${dirPath}/${file}`);

      if (stat.type === 'file') {
        const extension = file.split('.').pop();
        if (['mp3', 'm4a', 'aac', 'wav'].includes(extension)) {
          const metadata = await MediaMeta.get(`${dirPath}/${file}`);
          // console.log(metadata);
          audioFiles.push({path: `${dirPath}/${file}`, metadata});
        }
      } else {
        await searchForAudioFiles(`${dirPath}/${file}`);
      }
    });
  }

  await searchForAudioFiles(dirs.DocumentDir);
  await searchForAudioFiles(dirs.DownloadDir);
  await searchForAudioFiles(dirs.DCIMDir);
  await searchForAudioFiles(dirs.MusicDir);
  await searchForAudioFiles(dirs.PictureDir);
  await searchForAudioFiles(dirs.MovieDir);
  // await searchForAudioFiles(dirs.SDCardDir);
  return audioFiles;
}

export default getMusicFiles;
