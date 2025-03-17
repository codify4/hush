import React, { useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
  withSequence,
  Easing,
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated"

const { width, height } = Dimensions.get('window');

interface StarProps {
  size: number
  top: number
  left: number
  delay: number
  duration: number
  color?: string
}

export const Star: React.FC<StarProps> = ({ size, top, left, delay, duration, color = "white" }) => {
  const opacity = useSharedValue(0)
  const translateY = useSharedValue(0)
  const scale = useSharedValue(1)

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withRepeat(withTiming(0.9, { duration: duration * 0.8, easing: Easing.inOut(Easing.ease) }), -1, true),
    )

    translateY.value = withDelay(
      delay,
      withRepeat(withTiming(-15, { duration: duration, easing: Easing.inOut(Easing.ease) }), -1, true),
    )

    scale.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1.2, { duration: duration * 0.4, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: duration * 0.4, easing: Easing.inOut(Easing.ease) }),
        ),
        -1,
        false,
      ),
    )
  }, [delay, duration, opacity, translateY, scale])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
  }))

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
          top,
          left,
        },
        animatedStyle,
      ]}
    />
  )
}

export const StarryBackground: React.FC = () => {
  const { width, height } = Dimensions.get("window")
  const stars: React.ReactNode[] = []

  for (let i = 0; i < 70; i++) {
    const size = Math.random() * 4 + 1
    const top = Math.random() * height
    const left = Math.random() * width
    const delay = Math.random() * 2000
    const duration = Math.random() * 3000 + 3000
    const colors = ["white", "#8AABFF", "#FFD700", "#E6E6FA"]
    const color = colors[Math.floor(Math.random() * colors.length)]

    stars.push(<Star key={i} size={size} top={top} left={left} delay={delay} duration={duration} color={color} />)
  }

  return (
    <View style={{ position: "absolute", width: "100%", height: "100%" }}>
      {stars}
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 30, 0.3)",
        }}
      />
    </View>
  )
}

// interface StarProps {
//   size: number;
//   delay: number;
//   duration: number;
//   startX: number;
//   startY: number;
// }

// const Star: React.FC<StarProps> = ({ size, delay, duration, startX, startY }) => {
//   const translateX = useSharedValue(startX);
//   const translateY = useSharedValue(startY);
//   const opacity = useSharedValue(0);

//   useEffect(() => {
//     // Simple animation sequence
//     opacity.value = withDelay(delay, withTiming(1, { duration: 300 }));
    
//     translateX.value = withDelay(
//       delay,
//       withTiming(startX - width, { 
//         duration: duration,
//         easing: Easing.linear
//       })
//     );
    
//     translateY.value = withDelay(
//       delay,
//       withTiming(startY + height, { 
//         duration: duration,
//         easing: Easing.linear
//       })
//     );
    
//     // Fade out near the end
//     opacity.value = withDelay(
//       delay + duration - 300,
//       withTiming(0, { duration: 300 })
//     );
//   }, []);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { translateX: translateX.value },
//         { translateY: translateY.value }
//       ],
//       opacity: opacity.value,
//     };
//   });

//   return (
//     <Animated.View
//       style={[
//         {
//           width: size,
//           height: size,
//           borderRadius: size / 2,
//           backgroundColor: 'white',
//           position: 'absolute',
//         },
//         animatedStyle,
//       ]}
//     >
//       <View
//         style={{
//           width: size * 2,
//           height: 1,
//           backgroundColor: 'rgba(255, 255, 255, 0.3)',
//           position: 'absolute',
//           right: 0,
//           top: size / 2,
//           transform: [{ rotate: '45deg' }],
//         }}
//       />
//     </Animated.View>
//   );
// };

// interface ShootingStarsProps {
//   count?: number;
// }

// const ShootingStars: React.FC<ShootingStarsProps> = ({ count = 8 }) => {
//   // Reduced count for better performance
//   const stars = Array.from({ length: count }).map((_, index) => {
//     const size = Math.random() * 2 + 1;
//     const delay = Math.random() * 5000; // Reduced max delay
//     const duration = Math.random() * 2000 + 3000; // Reduced duration
//     const startX = Math.random() * width;
//     const startY = Math.random() * height * 0.3 - height * 0.3;
    
//     return (
//       <Star
//         key={index}
//         size={size}
//         delay={delay}
//         duration={duration}
//         startX={startX}
//         startY={startY}
//       />
//     );
//   });

//   return (
//     <View style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
//       {stars}
//     </View>
//   );
// };

// export default ShootingStars;