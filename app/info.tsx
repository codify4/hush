import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import InfoCarousel from '@/components/info/info-carousel';

const InfoScreen = () => {
    return (
        <SafeAreaView className='flex-1 bg-bg items-center'>
            <View className='flex-1 justify-center items-center w-full'>
                <InfoCarousel />
            </View>
            <TouchableOpacity className='bg-secondary px-10 w-10/12 py-5 rounded-full mb-5'>
                <Text className='text-xl font-dm-semibold text-white'>continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default InfoScreen;