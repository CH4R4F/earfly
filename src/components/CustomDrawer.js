import React from 'react';
import {Image, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView className="max-h-40" {...props}>
      <Image
        source={require('../assets/drawerCover.png')}
        className="w-full h-40"
      />
      <View className="mt-4">
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
