import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full items-center justify-center h-full px-4">
          <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' />          
          <View className='pb-7'>
            <Text className="text-3xl text-white font-bold pt-7 text-center">Welcome Message goes here! {' '}
              <Text className='text-secondary-200'>Title</Text>
            </Text>
          </View>
          <Text className='text-sm font-pregular text-gray-100 text-center pb-7'>Sub heading text goes here</Text>
          <CustomButton 
            title='Continue with Email' 
            containerStyles='w-full'
            handlePress={() => {}}
          />
        </View>        
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}

