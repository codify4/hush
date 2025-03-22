import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity, FlatList, Image, ImageSourcePropType } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { router } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface InfoItem {
  id: string;
  title: string;
  description: string;
  primaryColor: string;
  illustration: ImageSourcePropType;
}

const InfoScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const infoData: InfoItem[] = [
    {
      id: '1',
      title: 'Reduce Stress',
      description: 'Find peace in your daily life with guided meditation sessions designed to calm your mind',
      primaryColor: '#f1744c',
      illustration: require("@/assets/images/meditation-man.jpg"),
    },
    {
      id: '2',
      title: 'Improve Focus',
      description: 'Train your mind to stay present and focused with mindfulness techniques that enhance concentration',
      primaryColor: '#A28BEE',
      illustration: require("@/assets/images/focus.jpg"),
    },
    {
      id: '3',
      title: 'Control Your Breathing',
      description: 'Master breathing exercises that help reduce anxiety and improve your overall mental wellbeing',
      primaryColor: '#f1744c',
      illustration: require("@/assets/images/breathing.jpeg"),
    },
  ];

  const handleNext = () => {
    if (currentIndex < infoData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push('/sign-in');
    }
  };

  const renderItem = ({ item, index }: { item: InfoItem; index: number }) => {
    return (
      <View 
        className="flex-1 bg-[#121418]"
        style={{ width }}
      >
        {/* Top illustration section with colored background */}
        <View className="relative h-[55%] overflow-hidden">
          <View 
            className="absolute rounded-full"
            style={{
              backgroundColor: item.primaryColor,
              width: width * 1.5,
              height: width * 1.5,
              top: -width * 0.25,
              left: -width * 0.25,
            }}
          />
          
          <Animated.View 
            entering={FadeIn.duration(800)}
            className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center"
          >
            <Image 
              source={item.illustration} 
              className="size-full"
              resizeMode="cover"
            />
          </Animated.View>
        </View>
        
        {/* Content section */}
        <View className="px-8 py-8 flex-1 justify-between">
          <View>
            <Text className="text-3xl font-dm-bold text-white mb-4">
              {item.title}
            </Text>
            <Text className="text-base font-dm-medium text-white/80 mb-8">
              {item.description}
            </Text>
          </View>
          
          <View className="flex-row justify-between items-center">
            <View className="flex-row"></View>
            
            <TouchableOpacity
              onPress={handleNext}
              className="rounded-full p-5"
              style={{ backgroundColor: item.primaryColor }}
            >
              <ChevronRight size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-[#121418]">
      <FlatList
        ref={flatListRef}
        data={infoData}
        renderItem={({ item, index }) => renderItem({ item, index })}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default InfoScreen;