import {PermissionsAndroid} from 'react-native';

async function requestExternalStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission Required',
        message: 'This app needs access to your storage to download Music',
      },
    );
    console.log(granted);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Storage Permission Granted.');
      return true;
    } else {
      console.log('Storage Permission Denied.');
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
}

export default requestExternalStoragePermission;
