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
const keyboardVerticalOffset = Platform.OS === "ios" ? 50 : 0

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
      <View className="flex-1 bg-primary">
        {/* Purple top section with extreme curve */}
        <View
          className="justify-end pb-8"
          style={{
            height: "55%",
          }}
        >
          <View className="flex-1 items-center justify-center">
              <Image source={require("@/assets/icons/splash-icon-light.png")} className="size-[300px]" resizeMode="contain" />
              <Text className="text-white font-dm-bold text-5xl mb-2">hushhh</Text>
              <View className="mb-4">
                <Text className="text-white font-dm-medium text-center text-lg">
                  Find your moment of peace
                </Text>
              </View>
          </View>
        </View>

        {/* Form section */}
        <View 
          className="flex-1 bg-dark rounded-t-[40px] px-8 pt-10" 
        >
          {/* Email input */}
          <View className="mb-5">
            <Input 
              mode="outlined" 
              value={email} 
              onChangeText={setEmail} 
              placeholder="Email" 
              focus={false} 
              keyboardType="email-address"
            />
          </View>

          {/* Continue button */}
          <TouchableOpacity className="flex items-start bg-primary rounded-full w-full py-5 px-5 mb-3" activeOpacity={0.8}>
            <Text className="font-dm-semibold text-xl text-white">continue with email</Text>
          </TouchableOpacity>

          {/* Or divider */}
          <View className="items-center mb-3">
            <Text className="text-gray-400 font-dm">or</Text>
          </View>

          {/* Google Sign In button */}
          <TouchableOpacity
            className={`rounded-full py-5 flex-row items-center justify-start border border-white px-5 ${Platform.OS === 'ios' ? 'mb-7' : 'mb-5'}`}
            activeOpacity={0.8}
          >
            <FontAwesome name="google" size={24} color="#ffffff" className="mr-2"/>
            <Text className="font-dm-semibold text-lg text-white">Sign In with Google</Text>
          </TouchableOpacity>

          {/* Skip button */}
          <TouchableOpacity className={`flex flex-row items-center justify-between border border-gray-300 rounded-full py-5 px-5 ${Platform.OS === 'ios' ? 'mt-10' : 'mt-0'}`} activeOpacity={0.8}>
            <Text className="font-dm-semibold text-lg text-white text-center">Skip for now</Text>
            <ChevronRight color="#fff"/>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;