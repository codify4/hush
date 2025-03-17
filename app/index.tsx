import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'

const Welcome = () => {
  return (
    <SafeAreaView className='bg-bg h-screen flex-1 items-center justify-between'>
      <View></View>
      <View className='flex flex-col items-center justify-center'>
        <Text className='text-8xl font-dm-bold text-white'>hushhh</Text>
        <Text className='text-xl font-dm-bold text-white'>let's take a moment to relax...</Text>
      </View>
      <TouchableOpacity className='bg-secondary px-10 w-10/12 py-5 rounded-full mb-5'>
        <Text className='text-xl font-dm-semibold text-white'>get started</Text> 
      </TouchableOpacity> 
    </SafeAreaView>
  )
}
export default Welcome