import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import MeditationIllustration from '@/components/info/icons/meditation';
import FocusIllustration from '@/components/info/icons/focus';
import SleepIllustration from '@/components/info/icons/sleep';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

interface OnboardingItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  illustration: React.ReactNode;
}

const InfoScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onboardingData: OnboardingItem[] = [
    {
      id: '1',
      title: 'Reduce Stress',
      description: 'Find peace in your daily life with guided meditation',
      backgroundColor: '#f1744c',
      illustration: <MeditationIllustration />,
    },
    {
      id: '2',
      title: 'Improve Focus',
      description: 'Train your mind to stay present and focused',
      backgroundColor: '#A28BEE',
      illustration: <FocusIllustration />,
    },
    {
      id: '3',
      title: 'Control Your Breathing',
      description: 'Practice deep breathing exercises to improve your focus and relaxation',
      backgroundColor: '#f1744c',
      illustration: <SleepIllustration />,
    },
  ];

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push('/');
    }
  };

  const renderItem = ({ item }: { item: OnboardingItem }) => {
    return (
      <View 
        className="flex-1 items-center justify-between py-32"
        style={{ 
          width, 
          height: '100%',
          backgroundColor: item.backgroundColor 
        }}
      >
        <Text className="text-4xl font-dm-bold text-center text-[#121418] px-6">
          {item.title}
        </Text>
        
        <Animated.View 
          entering={FadeIn.duration(800)}
          className="items-center justify-center"
        >
          {item.illustration}
        </Animated.View>
        
        <View className="px-10 items-center">
          <Text className="text-xl font-dm-medium text-center text-[#121418] mb-10">
            {item.description}
          </Text>
          
          <TouchableOpacity
            onPress={handleNext}
            className="bg-[#121418] rounded-full w-40 py-4 items-center"
          >
            <Text className="text-white font-dm-semibold text-base">
              {currentIndex === onboardingData.length - 1 ? 'Get started' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1">
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
      />
      
      <View className="absolute bottom-12 left-0 right-0 flex-row justify-center">
        {onboardingData.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentIndex === index ? 'bg-[#121418]' : 'bg-[#121418] opacity-30'
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default InfoScreen;