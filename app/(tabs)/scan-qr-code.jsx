import React, { useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { useCameraPermissions } from 'expo-camera';
import CustomCameraView from '../../components/atoms/CameraView/CameraView';

export default function ScanQRCode() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-center">We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const handleBarcodeScanned = ({ data }) => {
    if (!scanned) {
      setScanned(true);      
      Alert.alert('Scanned Successfully!', data, [
        { text: 'OK', onPress: () => setScanned(false) }
      ]);
    }
  };

  return (
    <View className="flex-1">
      <CustomCameraView onBarcodeScanned={handleBarcodeScanned} />
    </View>
  );
}
