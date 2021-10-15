import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const App = () => {
  const [qrCode, setQRCode] = React.useState('');

  const onRead = data => {
    setQRCode(data.data);
  };

  console.log(qrCode);

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onRead}
        // flashMode={RNCamera.Constants.FlashMode.torch}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    width:200,
    height:200
  }
});
