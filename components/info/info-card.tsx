import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SvgProps } from 'react-native-svg';

interface CarouselCardProps {
  title: string;
  subtitle: string;
  backgroundColor?: string;
  icon: React.FC<SvgProps>;
  index: number;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  subtitle,
  backgroundColor = '#f1744c',
  icon: Icon,
  index,
}) => {
  return (
    <Animated.View 
      entering={FadeIn.delay(100 * index).duration(400)}
      style={[styles.card, { backgroundColor }]}
    >
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.iconContainer}>
        <Icon width={100} height={100} />
      </View>
      
      <Text style={styles.subtitle}>{subtitle}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 450,
    borderRadius: 32,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: 32,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: 'DMSans-Medium',
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default CarouselCard;