import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-pblack text-3xl text-black text-center pb-20">Welcome to VK Hill Security App !</Text>
      <StatusBar style="auto" />
      <Link href='/home' className='text-base text-white font-semibold bg-black px-10 py-4 rounded-md'>Sign in</Link>
    </View>
  );
}
