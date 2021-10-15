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
        cameraStyle={{width:400,height:400}}
        topContent={<Text>Hello</Text>}
        showMarker={true}
        containerStyle={{alignItems:"center"}}
        markerStyle={{borderColor:"red",}}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"rgba(0,0,0,0.4)"
  }
});
