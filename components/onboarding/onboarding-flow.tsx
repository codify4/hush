"use client"

import type React from "react"
import { useState } from "react"
import { Platform, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Input from "../input"
import { Picker } from "@react-native-picker/picker"
import * as Haptics from "expo-haptics"
import * as LucideIcons from "lucide-react-native"

interface ChoiceOption {
  text: string
  iconName: string
}

interface OnboardingSlide {
  type: "text" | "choice" | "date" | "number" | "measurement" | "loading" | "age"
  title: string
  field: string // Add field to the interface
  placeholder?: string
  choices?: ChoiceOption[]
  unit?: string
  min?: number
  max?: number
}

interface OnboardingInputProps {
  slide: OnboardingSlide
  value: string
  onChangeText: (text: string) => void
}

export const OnboardingInput: React.FC<OnboardingInputProps> = ({ slide, value, onChangeText }) => {
  const [selectedAge, setSelectedAge] = useState(value)

  if (slide.type === "text") {
    return (
      <Input
        mode="outlined"
        value={value}
        onChangeText={onChangeText}
        placeholder={slide.placeholder}
        keyboardType="default"
      />
    )
  }

  if (slide.type === "age") {
    const ageValues = Array.from({ length: 101 }, (_, i) => 15 + i)

    const handleAgeChange = (age: string) => {
      setSelectedAge(age)
      onChangeText(age) // Make sure to call onChangeText to update the parent state
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }

    return (
      <View className="flex-1 ml-2">
        <View
          className={`bg-transparent rounded-2xl overflow-hidden ${Platform.OS === "ios" ? "" : "border border-primary"}`}
        >
          <Picker
            selectedValue={selectedAge}
            onValueChange={(age) => handleAgeChange(age)}
            dropdownIconColor="white"
            style={{ color: "white" }}
            itemStyle={{ color: "white" }}
          >
            {ageValues.map((age) => (
              <Picker.Item
                key={age}
                label={age.toString()}
                value={age.toString()}
                color={Platform.OS === "android" ? "black" : "white"}
              />
            ))}
          </Picker>
        </View>
      </View>
    )
  }

  if (slide.type === "choice") {
    const onSelect = (choice: ChoiceOption) => {
      onChangeText(choice.text)
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }

    return (
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: 400 }}
        className="space-y-3 mb-5"
      >
        {slide.choices?.map((choice, index) => {
          // Dynamically get the icon component from Lucide
          const IconComponent = LucideIcons[
            choice.iconName as keyof typeof LucideIcons
          ] as React.ComponentType<LucideIcons.LucideProps>

          return (
            <TouchableOpacity
              key={index}
              onPress={() => onSelect(choice)}
              className={`px-5 py-5 mt-5 rounded-full ${value === choice.text ? "bg-primary" : "border border-white"}`}
              style={{ borderColor: value === choice.text ? "" : "#fff" }}
            >
              <View className="flex-row items-center">
                <View className="mr-3">{IconComponent && <IconComponent size={24} color="white" />}</View>
                <Text
                  className={`text-lg font-dm-semibold ml-2 ${value === choice.text ? "text-white" : "text-white"}`}
                >
                  {choice.text}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )
  }
}

