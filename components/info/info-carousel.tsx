import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import Animated, { useAnimatedStyle, withTiming, useSharedValue } from 'react-native-reanimated';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import MoonIcon from './icons/moon';
import BrainIcon from './icons/brain';
import HeartIcon from './icons/heart';
import BreathIcon from './icons/breath';
import CarouselCard from './info-card';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING = width * 0.1;

const carouselData = [
  {
    id: '1',
    title: 'stress',
    subtitle: 'facts about stress and meditation',
    backgroundColor: '#f1744c',
    icon: MoonIcon,
  },
  {
    id: '2',
    title: 'mindfulness',
    subtitle: 'improve your mental wellbeing',
    backgroundColor: '#A28BEE',
    icon: BrainIcon,
  },
  {
    id: '3',
    title: 'relaxation',
    subtitle: 'techniques to calm your mind',
    backgroundColor: '#f1744c',
    icon: HeartIcon,
  },
  {
    id: '4',
    title: 'breathing',
    subtitle: 'control your breath, control your life',
    backgroundColor: '#A28BEE',
    icon: BreathIcon,
  },
];

const InfoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const dotScale = useSharedValue(1);

  const handleNext = () => {
    if (activeIndex < carouselData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
      setActiveIndex(activeIndex + 1);
      animateDot();
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: activeIndex - 1,
        animated: true,
      });
      setActiveIndex(activeIndex - 1);
      animateDot();
    }
  };

  const animateDot = () => {
    dotScale.value = 0.8;
    setTimeout(() => {
      dotScale.value = withTiming(1, { duration: 300 });
    }, 100);
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (CARD_WIDTH + SPACING));
    if (index !== activeIndex) {
      setActiveIndex(index);
      animateDot();
    }
  };

  const renderItem = ({ item, index }: { item: typeof carouselData[0]; index: number }) => (
    <View style={styles.itemContainer}>
      <CarouselCard
        title={item.title}
        subtitle={item.subtitle}
        backgroundColor={item.backgroundColor}
        icon={item.icon}
        index={index}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={carouselData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate="fast"
        snapToAlignment="center"
        getItemLayout={(data, index) => ({
          length: CARD_WIDTH + SPACING,
          offset: (CARD_WIDTH + SPACING) * index,
          index,
        })}
      />

      <View style={styles.controls}>
        <TouchableOpacity 
          style={[styles.navButton, activeIndex === 0 && styles.disabledButton]} 
          onPress={handlePrev}
          disabled={activeIndex === 0}
        >
          <ChevronLeft size={28} color={activeIndex === 0 ? '#989898' : '#ffffff'} />
        </TouchableOpacity>

        <View style={styles.dotsContainer}>
          {carouselData.map((_, index) => {
            const isActive = index === activeIndex;
            const dotAnimatedStyle = useAnimatedStyle(() => {
              return {
                transform: [{ scale: isActive ? dotScale.value : 1 }],
              };
            });

            return (
              <Animated.View
                key={index}
                style={[
                  styles.dot,
                  isActive ? styles.activeDot : styles.inactiveDot,
                  dotAnimatedStyle,
                ]}
              />
            );
          })}
        </View>

        <TouchableOpacity 
          style={[styles.navButton, activeIndex === carouselData.length - 1 && styles.disabledButton]} 
          onPress={handleNext}
          disabled={activeIndex === carouselData.length - 1}
        >
          <ChevronRight size={28} color={activeIndex === carouselData.length - 1 ? '#989898' : '#ffffff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  flatListContent: {
    paddingHorizontal: SPACING / 2,
    alignItems: 'center',
  },
  itemContainer: {
    width: CARD_WIDTH,
    marginHorizontal: SPACING / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  navButton: {
    padding: 10,
  },
  disabledButton: {
    opacity: 0.5,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#ffffff',
    width: 12,
    height: 12,
  },
  inactiveDot: {
    backgroundColor: 'gray',
    width: 11,
    height: 11,
  },
});

export default InfoCarousel;