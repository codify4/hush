import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Wind, CircleUserRound } from 'lucide-react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

interface TabBarProps {
  activeColor?: string;
  inactiveColor?: string;
}

interface Tab {
  name: string;
  label: string;
  icon: (color: string) => JSX.Element;
  route: '/meditate' | '/breathing' | '/profile';
}

const FloatingTabBar: React.FC<TabBarProps> = ({
  activeColor = '#F1744C',
  inactiveColor = '#ffffff',
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Define the tabs
  const tabs: Tab[] = [
    {
      name: 'meditate',
      label: 'meditate',
      icon: (color: string) => (
        <MaterialCommunityIcons name="meditation" size={28} color={color} />
      ),
      route: '/meditate',
    },
    {
      name: 'breathing',
      label: 'breathing',
      icon: (color: string) => <Wind color={color} size={28} />,
      route: '/breathing',
    },
    {
      name: 'me',
      label: 'me',
      icon: (color: string) => <CircleUserRound color={color} size={28} />,
      route: '/profile',
    },
  ];

  // Check if the current path matches the tab route
  const isActive = (route: string) => {
    return pathname.startsWith(route);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const active = isActive(tab.route);
          const color = active ? activeColor : inactiveColor;

          return (
            <TouchableOpacity
              key={tab.name}
              style={styles.tabButton}
              onPress={() => router.push(tab.route)}
              activeOpacity={0.7}
            >
              <View style={styles.iconContainer}>{tab.icon(color)}</View>
              <Text style={[styles.tabLabel, { color }]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1E2130',
    borderRadius: 30,
    width: '100%',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  iconContainer: {
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 14,
    fontFamily: 'DMSans-Regular',
  },
});

export default FloatingTabBar;