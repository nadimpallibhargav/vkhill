import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

import { images } from '../constants';
import CustomButton from '../components/atoms/CustomButton/CustomButton';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full items-center justify-center min-h-[85vh] px-4">
          <Image source={images.logo} className='w-[130px] h-[53px]' resizeMode='cover' />          
          <View className='pb-7'>
            <Text className="text-3xl text-secondary-200 font-bold pt-7 text-center">Viṣvak
              <Text className='text-white'>senā</Text>
            </Text>
          </View>
          <Text className='text-sm font-pregular text-gray-100 text-center pb-7'>Guardians of Sacred Space</Text>
          <CustomButton 
            title='Sign In'
            containerStyles='w-full mb-5'
            handlePress={() => router.push('/sign-in')}
          />
          <CustomButton 
            title='Generate QR Code' 
            containerStyles='w-full'
            handlePress={() => router.push('/generate-qr-code')}
          />
        </View>        
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}

