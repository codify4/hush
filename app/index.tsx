import { StarryBackground } from '@/components/shooting-stars';
import SimpleTypingText from '@/components/text-animation';
import { router } from 'expo-router';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const Welcome = () => {
  return (
    <View className='flex-1 bg-dark'>
      <StarryBackground />
      <SafeAreaView className='flex-1 items-center justify-between w-full'>
        <View></View>
        <View className='flex flex-col items-center justify-center'>
          <Text className='text-8xl font-dm-bold text-white'>hushhh</Text>
          
          <View className='h-8 flex justify-center'>
            <SimpleTypingText 
              text="let's take a moment to relax..." 
              style={{ fontSize: 20, fontFamily: 'DMSans-Bold', color: 'white' }}
              typingSpeed={70}
              delay={1000}
            />
          </View>
        </View>
        
        <TouchableOpacity 
          className='bg-secondary px-10 w-10/12 py-5 rounded-full mb-5'
          onPress={() => router.push('/(tabs)/meditate')}
        >
          <Text className='text-xl font-dm-semibold text-white'>get started</Text> 
        </TouchableOpacity> 
      </SafeAreaView>
    </View>
  )
}

export default Welcome;