import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing
} from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Input from '@/components/input';
import { router } from 'expo-router';

const keyboardVerticalOffset = Platform.OS === "ios" ? 50 : 0;

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  
  // Animation values
  const logoOpacity = new Animated.Value(0);
  const logoScale = new Animated.Value(0.8);
  const contentTranslateY = new Animated.Value(20);
  const contentOpacity = new Animated.Value(0);

  useEffect(() => {
    // Animate logo
    Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.back(1.5)),
      }),
    ]).start();

    // Animate content with slight delay
    Animated.parallel([
      Animated.timing(contentOpacity, {
        toValue: 1,
        duration: 800,
        delay: 400,
        useNativeDriver: true,
      }),
      Animated.timing(contentTranslateY, {
        toValue: 0,
        duration: 800,
        delay: 400,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start();
  }, []);

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={"padding"}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View className="flex-1 bg-dark">
        {/* Purple top section with extreme curve */}
        <View
          className="justify-end"
          style={{
            height: "55%",
          }}
        >
          <View className="flex-1 items-center justify-center relative">
            <View className="absolute z-10 top-0 left-0 right-0 bottom-0 bg-black/20"></View>
            <Image source={require("@/assets/images/landscape.jpg")} className="size-full" resizeMode="cover" />
            <Text className="z-50 text-white font-dm-bold text-7xl mb-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">hushhh</Text>
            <View className="z-50 mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5">
              <Text className="text-white font-dm-semibold text-center text-2xl">
                Find your moment of peace
              </Text>
            </View>
          </View>
        </View>

        {/* Form section */}
        <View 
          className="flex-1 bg-dark rounded-t-[40px] px-8 pt-10 -mt-5" 
        >
          <View className="space-y-4">
            {/* Continue button - Primary action */}
            <TouchableOpacity 
              className="bg-secondary rounded-full py-5 px-6 flex-row items-center justify-between" 
              activeOpacity={0.8}
              onPress={() => router.push('/email-login')}
            >
              <Text className="font-dm-semibold text-lg text-white">Continue with email</Text>
              <ChevronRight color="#fff" size={24}/>
            </TouchableOpacity>

            {/* Or divider */}
            <View className="flex-row items-center justify-center py-2">
              <View className="flex-1 h-[1px] bg-gray-700"></View>
              <Text className="text-gray-400 font-dm-medium mx-4">or</Text>
              <View className="flex-1 h-[1px] bg-gray-700"></View>
            </View>

            {/* Google Sign In button - Secondary action */}
            <TouchableOpacity
              className="rounded-full py-5 px-6 flex-row items-center justify-between border border-white/70"
              activeOpacity={0.8}
            >
              <View className="flex-row items-center">
                <FontAwesome name="google" size={20} color="#ffffff" />
                <Text className="font-dm-semibold text-lg text-white ml-3">Sign in with Google</Text>
              </View>
              <View className="w-6"></View> {/* Spacer to balance the layout */}
            </TouchableOpacity>
          </View>

          {/* Skip button - Tertiary action */}
          <View className="flex-1 justify-end pb-8 pt-4">
            {/* Skip button */}
            <TouchableOpacity 
              className="flex flex-row items-center justify-between border border-gray-300 rounded-full py-5 px-5 mb-5" 
              activeOpacity={0.8} 
              onPress={() => router.push('/onboarding')}
            >
              <Text className="font-dm-semibold text-lg text-white text-center">Skip for now</Text>
              <ChevronRight color="#fff" size={24}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;