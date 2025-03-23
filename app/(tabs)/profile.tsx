import Header from '@/components/header'
import { View, Text, SafeAreaView } from 'react-native'
const Me = () => {
  return (
    <SafeAreaView className='flex-1 bg-dark px-5' style={{ paddingInline: 40 }}>
      <Header route='me' />

      <View className='bg-primary h-1/2 flex-1 w-11/12 items-center justify-center'>

      </View>
    </SafeAreaView>
  )
}
export default Me