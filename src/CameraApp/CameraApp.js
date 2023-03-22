import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RNCamera, FaceDetector} from 'react-native-camera';
const PendingView = () => {
  return (
    <View style={styles.pendingView}>
      <Text style={styles.pendingTxt}>Loading...</Text>
    </View>
  );
};

const CameraApp = () => {
  const [image, setimages] = useState(null);

  const takePicture = async camera => {
    try {
      const options = {quality: 0.5, base64: false};
      const data = await camera.takePictureAsync(options);
      setimages(data.uri);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.containter}>
      {image ? (
        <View>
          <Text>Here your profile Image</Text>
          <Image source={{uri: image}} style={{width: '90%', height: 200}} />
          <Button onPress={() => setimages(null)} title="Learn More" />
        </View>
      ) : (
        <RNCamera
          style={styles.perview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'Longer text touse camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status}) => {
            if (status !== 'READY') {
              return <PendingView />;
            }
            return (
              <View style={styles.btnView}>
                <TouchableOpacity
                  style={styles.captureBtn}
                  onPress={() => takePicture(camera)}>
                  <Text style={styles.captureBtn}>SNAP</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      )}
    </View>
  );
};

export default CameraApp;

const styles = StyleSheet.create({
  pendingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CAD5E2',
  },
  pendingTxt: {
    color: '#383CC1',
    fontSize: 20,
  },
  containter: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#03203C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  captureBtn: {
    flex: 0,
    backgroundColor: 'orange',
    padding: 20,
    alignSelf: 'center',
  },
  cameratxt: {
    backgroundColor: '',
    color: '#fff',
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
  },
  clicked: {},
});
