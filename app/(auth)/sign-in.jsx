import { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const SignIn = () => {
  const[form, setForm] = useState({
    email: '',
    password: ''
  })

  const[isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

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
            handlePress={submit}
            isLoading={isSubmitting}
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