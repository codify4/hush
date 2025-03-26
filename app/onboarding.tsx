
"use client"

import { useState } from "react"
import { View, Text, Platform, KeyboardAvoidingView, TouchableOpacity } from "react-native"
import Animated, { SlideInRight, SlideOutLeft, SlideInLeft, SlideOutRight } from "react-native-reanimated"
import { useRouter } from "expo-router"
import { OnboardingData, slides } from "@/constants/slides"
import { OnboardingInput } from "@/components/onboarding/onboarding-flow"

const Onboarding = () => {
  const [step, setStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState<"forward" | "backward">("forward")
  const [formData, setFormData] = useState<OnboardingData>({
    goal: "",
    frequency: "",
    gender: "",
    loading: '',
    age: (0).toString()
  })
  const router = useRouter()
  const keyboardVerticalOffset = Platform.OS === "ios" ? 50 : 0
  const currentSlide = slides[step]
  const currentValue = formData[currentSlide.field]
  const isValidInput = currentSlide.validation(currentValue)

  const handleInputChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [currentSlide.field]: value,
    }))
  }

  const nextStep = () => {
    if (!isValidInput || isAnimating) return

    if (step < slides.length - 1) {
      setSlideDirection("forward")
      setIsAnimating(true)
      setTimeout(() => {
        setStep(step + 1)
        setIsAnimating(false)
      }, 300)
    } else {
      // Navigate to loading screen on last step
      router.push("/loading-screen")
    }
  }

  const prevStep = () => {
    if (isAnimating || step === 0) return

    setSlideDirection("backward")
    setIsAnimating(true)
    setTimeout(() => {
      setStep(step - 1)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-dark"
      behavior={"padding"}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View className="flex-1 px-6 pt-20">
        {/* Progress Indicator */}
        <View className="h-1.5 bg-neutral-300 rounded-full overflow-hidden mb-12">
          <View className="h-full bg-primary rounded-full" style={{ width: `${((step + 1) / slides.length) * 100}%` }} />
        </View>

        {/* Question and Input */}
        <Animated.View
          key={step}
          entering={slideDirection === "forward" ? SlideInRight.duration(300) : SlideInLeft.duration(300)}
          exiting={slideDirection === "forward" ? SlideOutLeft.duration(300) : SlideOutRight.duration(300)}
          className="flex-1"
        >
          <View className="flex-1 space-y-8">
            <Text className="text-white text-4xl tracking-wider mb-3 font-dm-semibold">{currentSlide.field !== "loading" && currentSlide.title}</Text>

            <OnboardingInput slide={currentSlide} value={currentValue} onChangeText={handleInputChange} />
          </View>
        </Animated.View>

        {/* Buttons */}
        {currentSlide.type !== 'loading' && (
          <View className="mb-12 gap-4">
            <TouchableOpacity
              onPress={nextStep}
              className={`py-5 rounded-full w-full items-center ${
                isValidInput && !isAnimating ? "bg-primary" : "bg-primary/50"
              }`}
              disabled={!isValidInput || isAnimating}
            >
              <Text
                className={`text-xl font-dm-semibold ${
                  isValidInput && !isAnimating ? "text-white" : "text-neutral-400"
                }`}
              >
                {step === slides.length - 1 ? "let's go" : "next"}
              </Text>
            </TouchableOpacity>

            {step > 0 && (
              <TouchableOpacity
                onPress={prevStep}
                className="flex flex-row items-center justify-center border border-gray-300 rounded-full py-5"
                disabled={isAnimating}
              >
                <Text className="text-lg text-white bg-transparent font-dm-semibold">back</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  )
}

export default Onboarding