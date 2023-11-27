import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Start Scanning"
        onPress={() => navigation.navigate('Scanner')}
      />
    </View>
  );
};

export default HomeScreen;
