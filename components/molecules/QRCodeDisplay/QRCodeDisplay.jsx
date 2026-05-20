import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeDisplay = ({ securityId }) => {
  return (
    <View className='items-center justify-center min-h-[320px] border border-secondary rounded-xl p-5 mb-5'>
        {securityId && (
            <View>
                <View className='items-center bg-white p-3 rounded-xl'>
                    <QRCode value={securityId} size={200} className='bg-white' />
                </View>
                <Text className='w-full text-2xl text-semibold font-psemibold text-white text-center pt-5'>
                    <Text className='text-secondary'>ID:</Text> {securityId}
                </Text>
            </View>
        )}
    </View>
  );
};

export default QRCodeDisplay;
