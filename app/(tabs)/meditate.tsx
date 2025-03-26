import Header from '@/components/header'
import { View, Text, SafeAreaView } from 'react-native'
const Meditate = () => {
  return (
    <SafeAreaView className='flex-1 bg-dark'>
      <Header route='me' />
    </SafeAreaView>
  )
}
export default Meditate