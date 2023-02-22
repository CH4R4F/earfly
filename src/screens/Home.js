import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </Text>
      <Button
        title="click me"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default Home;
