import { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'

import FormField from '../../components/atoms/FormField/FormField'
import CustomButton from '../../components/atoms/CustomButton/CustomButton'

const SignIn = () => {
  const[form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4'>
          <Text className='text-2xl text-white text-semibold font-psemibold'>Login</Text>
          <FormField 
            title='Email'
            value={form.email}
            keyboardType='email-address'
            placeholder='Enter Email'
            handleChangeText={(e) => setForm({...form,
            email: e })}
            otherStyles='pt-7'            
          />
          <FormField 
            title='Password'
            value={form.password}
            placeholder='Enter Password'
            handleChangeText={(e) => setForm({...form,
            password: e })}
            otherStyles='py-7' 
          />

          <CustomButton 
            title='Sign In'
            handlePress={() => router.push('/home')}            
          />

          <View className='flex-row justify-center items-center gap-2 pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have account?
            </Text>
            <Link href='/sign-up' className='text-lg text-secondary font-psemibold'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn