import React from 'react';
import {
  View,
  Modal,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

const OptionModal = ({
  visible,
  title,
  path,
  onClose,
  options,
  onPlayPress,
  onPlayListPress,
}) => {
  return (
    <>
      <Modal animationType="slide" transparent visible={visible}>
        <View className="absolute bottom-0 right-0 left-0 bg-black-light rounded-tr-2xl rounded-tl-2xl z-50">
          <Text
            className=" text-lg font-bold p-4 pb-0 text-white py-3"
            numberOfLines={2}>
            {title}
          </Text>
          <View className="p-5">
            {/* {options.map(optn => {
              return (
                <TouchableWithoutFeedback
                  key={optn.title}
                  onPress={optn.onPress}>
                  <Text style={styles.option}>{optn.title}</Text>
                </TouchableWithoutFeedback>
              );
            })} */}
            <TouchableWithoutFeedback onPress={onPlayPress}>
              <Text className="font-bold text-text-light py-2">Play</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onPlayListPress}>
              <Text className="font-bold text-text-light py-2">
                Add to Playlist
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="absolute inset-0 bg-black/40" />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default OptionModal;
