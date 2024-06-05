import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';

import CustomButton from '../../components/atoms/CustomButton/CustomButton'

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
          <Text className='text-2xl text-semibold font-psemibold pb-14 text-center text-white'>Generate QR Code</Text>          
          
          <View className='items-center justify-center min-h-[320px] border border-secondary rounded-xl p-5 mb-5'>
            {securityId ? (
              <>
                <View className='items-center bg-white p-3 rounded-xl'>
                  <QRCode value={securityId} size={200} className='bg-white' />                
                </View>
                <Text className='w-full text-2xl text-semibold font-psemibold text-white text-center pt-5'><Text className='text-secondary'>ID:</Text> {securityId}</Text>
              </>
            ) : null}
          </View>

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
