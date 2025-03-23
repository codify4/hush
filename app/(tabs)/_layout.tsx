import { Wind, CircleUserRound } from 'lucide-react-native'
import { Tabs } from 'expo-router'
import { Platform } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyle: {
                backgroundColor: '#1E2130',
                position: 'absolute',
                borderTopColor: 'transparent',
                borderTopWidth: Platform.OS === 'ios' ? 1 : 0,
                minHeight: Platform.OS === 'ios' ? 70 : 40,
                alignContent: 'center',
            },
            tabBarActiveTintColor: '#F1744C',
            tabBarInactiveTintColor: '#fff',
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
                fontFamily: 'DMSans-Regular',
            }
        }}
    >
        <Tabs.Screen 
            name='meditate' 
            options={{
                title: 'meditate',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="meditation" size={28} color={color} />
                )
            }}
        />

        <Tabs.Screen 
            name='breathing' 
            options={{
                title: 'breathing',
                tabBarIcon: ({ color, size }) => (
                    <Wind color={color} size={28} />
                )
            }}
        />

        <Tabs.Screen 
            name='me' 
            options={{
                title: 'me',
                tabBarIcon: ({ color, size }) => (
                    <CircleUserRound color={color} size={28} />
                )
            }}
        />
        {/* <Tabs.Screen 
            name='(settings)/privacy-policies' 
            options={{
                href: null,
                title: 'Privacy Policy',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#171717',
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: '600',
                },
                headerShadowVisible: false,
                headerLeft: () => (
                <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
                    <ChevronLeft size={30} color={'#fff'} />
                </TouchableOpacity>
                ),
            }}
        />
        <Tabs.Screen 
            name='(settings)/terms-and-services' 
            options={{
                href: null,
                title: 'ToS',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#171717',
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: '600',
                },
                headerShadowVisible: false,
                headerLeft: () => (
                <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
                    <ChevronLeft size={30} color={'#fff'} />
                </TouchableOpacity>
                ),
            }}
        />
        <Tabs.Screen 
            name='(settings)/settings' 
            options={{
                href: null,
                title: 'Settings',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#000000',
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: '600',
                },
                headerShadowVisible: false,
                headerLeft: () => (
                <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
                    <ChevronLeft size={30} color={'#fff'} />
                </TouchableOpacity>
                ),
            }}
        /> */}

    </Tabs>
  )
}
export default TabsLayout