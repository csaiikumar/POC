import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

const ScannerScreen = ({ navigation }) => {
  const [scannedData, setScannedData] = useState(null);

  const onBarCodeRead = (result) => {
    if (result.data) {
      setScannedData(result.data);
      navigation.navigate('Result', { data: result.data });
    }
  };

  return (
    <View>
      <RNCamera
        style={{ flex: 1 }}
        onBarCodeRead={onBarCodeRead}
        captureAudio={false}
      />
    </View>
  );
};

export default ScannerScreen;
