import { stats } from '@/constants/streaks'
import { router } from 'expo-router'
import { Settings2, User2 } from 'lucide-react-native'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
const Me = () => {
  return (
    <SafeAreaView className="flex-1 bg-dark">
      <ScrollView className="px-5 pt-5 pb-10">
        {/* Profile Section */}
        <View className="items-center mb-8">
          <View className="rounded-full bg-primary justify-center items-center mb-4 p-5">
            <User2 size={100} color="white" />
          </View>
          <Text className="text-white text-4xl font-dm-semibold">username</Text> 
          <Text className="text-white text-lg font-dm-semibold">user@gmail.com</Text>
        </View>

        {/* Stats Section */}
        <View className="flex-row items-center justify-center mb-8 p-5 rounded-3xl" style={{ backgroundColor: '#2D333C80', borderRadius: 24 }}>
          {stats.map((stat) => (
            <View key={stat.id} className="flex-1 flex-col items-center py-3 px-2">
              <stat.icon size={40} color="white" /> 
              <View className="items-center mt-2">
                <Text className="text-white text-lg font-dm-medium mb-1">{stat.name}</Text>
                <Text className="text-white text-base font-dm-medium">{stat.days} days</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Streaks Section */}
        <View className="mb-5">
          <Text className="text-white text-xl font-dm-medium mb-3">streaks</Text>
          <View className="bg-[#1E1E1E] rounded-xl p-5 h-30 justify-center items-center">
            <Text className="text-white text-base">Calendar with streaks</Text>
          </View>
        </View>

        {/* Settings Section */}
        <TouchableOpacity 
          className="flex-row items-center rounded-full p-5 mt-3" 
          style={{ backgroundColor: '#2D333C80', borderRadius: 20 }}
          onPress={() => router.push('/(tabs)/(settings)/settings')}
        >
          <Settings2 size={20} color="white" />
          <Text className="text-white text-xl font-dm-medium ml-2">settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Me