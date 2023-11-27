import React from 'react';
import { View, Text } from 'react-native';

const ResultScreen = ({ route }) => {
  const { data } = route.params;

  return (
    <View>
      <Text>Scanned Data:</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default ResultScreen;
