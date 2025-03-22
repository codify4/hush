import CircularProgress from '@/components/onboarding/circular-progress';
import { View } from 'react-native'

const LoadingScreen = () => {
    return (
        <View className="flex-1 bg-dark">
            <CircularProgress />
        </View>
    )
}
export default LoadingScreen