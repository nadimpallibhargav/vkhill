import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../../components/atoms/CustomButton/CustomButton';
import QRCodeDisplay from '../../components/molecules/QRCodeDisplay/QRCodeDisplay';

const GenerateQRCode = () => {
  const [securityId, setSecurityId] = useState('');

  const handleGenerateQRCode = () => {
    const uniqueId = Date.now().toString();
    setSecurityId(uniqueId);
  };

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='min-h-[100vh] justify-center px-4'>
          <Text className='text-2xl text-semibold font-psemibold pb-14 text-center text-white'>
            Generate QR Code
          </Text>
          
          <QRCodeDisplay securityId={securityId} />

          <CustomButton 
            title='Generate QR Code'
            handlePress={handleGenerateQRCode}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GenerateQRCode;
