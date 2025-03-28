import { Wind, CircleUserRound, ChevronLeft } from 'lucide-react-native'
import { router, Tabs } from 'expo-router'
import { Platform, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react'
import FloatingTabBar from '@/components/floating-tab-bar';

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyle: {
                display: 'none',
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
        tabBar={(props) => <FloatingTabBar activeColor='#F1744C' inactiveColor='#fff' />}
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
            name='profile' 
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
        /> */}
        <Tabs.Screen 
            name='(settings)/settings' 
            options={{
                href: null,
                title: 'Settings',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#121418',
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

    </Tabs>
  )
}
export default TabsLayout