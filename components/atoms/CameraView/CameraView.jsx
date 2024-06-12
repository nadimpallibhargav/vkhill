import React from 'react';
import { CameraView } from 'expo-camera';

const CustomCameraView = ({ onBarcodeScanned, ...props }) => {
  return (
    <CameraView
      className="flex-1"
      facing="back"
      barcodeScannerSettings={{
        barcodeTypes: ['qr'],
      }}
      onBarcodeScanned={onBarcodeScanned}
      {...props}
    />
  );
};

export default CustomCameraView;
