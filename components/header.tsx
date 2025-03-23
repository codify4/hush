import { View, Text, Image } from 'react-native'
const Header = ({ route }: { route: string }) => {
  return (
    <View className='flex-row gap-2 items-center'>
      {/* <Image source={require('@/assets/icons/splash-icon-light.png')} style={{ width: 50, height: 50 }} /> */}
      <View className='flex-col'>
        <Text className='text-2xl font-dm-bold text-white'>hush</Text>
        <Text className='text-lg font-dm-semibold' style={{ color: '#F1744C' }}>{route}</Text>
      </View>
    </View>
  )
}
export default Header