import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { ChevronLeft, ArrowRight, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';
import Input from '@/components/input';

const EmailLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  
  // Animation values
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(20);

  useEffect(() => {
    // Animate content
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start();
  }, []);

  // Validate email
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  }, [email]);

  const handleContinue = () => {
    if (isValid) {
      console.log('Continue with email:', email);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-dark">
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className="flex-1 px-6 pt-4">

          <Text className="text-white font-dm-bold text-4xl">Log in</Text>
          <Text className="text-gray-400 font-dm-medium text-base mt-2 mb-2">
            Enter your email to continue
          </Text>
        
          <View>
            <Input 
              mode="outlined" 
              value={email} 
              onChangeText={setEmail} 
              placeholder="Email address" 
              focus={true} 
              keyboardType="email-address"
              moreStyles={{ color: '#fff' }}
            />
            
            {email.length > 0 && !isValid && (
              <Text className="text-red-500 font-dm-medium text-sm mt-2 ml-2">
                Please enter a valid email address
              </Text>
            )}
          </View>

          {/* Continue button */}
          <TouchableOpacity 
            className={`rounded-full py-5 px-6 flex-row items-center justify-between mt-5 ${
              isValid ? 'bg-secondary' : 'bg-gray-700'
            }`}
            activeOpacity={isValid ? 0.8 : 1}
            onPress={handleContinue}
            disabled={!isValid}
          >
            <Text className={`font-dm-semibold text-lg mr-2 ${
              isValid ? 'text-white' : 'text-gray-400'
            }`}>
              continue
            </Text>
            <ChevronRight 
              size={20} 
              color={isValid ? '#fff' : '#9ca3af'} 
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.back()}
            className="flex flex-row items-center justify-start border border-gray-300 rounded-full py-5 mt-5 px-6"
          >
            <Text className="text-lg text-white bg-transparent font-dm-semibold">back</Text>
          </TouchableOpacity>

          {/* Privacy note */}
          <Text className="text-gray-500 font-dm-regular text-sm text-center px-4">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EmailLoginScreen;