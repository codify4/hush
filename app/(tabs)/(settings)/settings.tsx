"use client"

import { useState } from "react"
import { View, Text, SafeAreaView, Switch, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [hapticsEnabled, setHapticsEnabled] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.card}>
            {/* Notifications Toggle */}
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <View style={[styles.iconContainer, { backgroundColor: "#A28BEE" }]}>
                  <Ionicons name="notifications-outline" size={18} color="white" />
                </View>
                <Text style={styles.settingText}>Notifications</Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: "#3e3e3e", true: "#A28BEE" }}
                thumbColor={"#ffffff"}
              />
            </View>

            {/* Haptics Toggle */}
            <View style={[styles.settingRow, styles.noBorder]}>
              <View style={styles.settingInfo}>
                <View style={[styles.iconContainer, { backgroundColor: "#A28BEE" }]}>
                  <Ionicons name="alarm-outline" size={18} color="white" />
                </View>
                <Text style={styles.settingText}>Haptics</Text>
              </View>
              <Switch
                value={hapticsEnabled}
                onValueChange={setHapticsEnabled}
                trackColor={{ false: "#3e3e3e", true: "#A28BEE" }}
                thumbColor={"#ffffff"}
              />
            </View>
          </View>
        </View>

        {/* Legal Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal</Text>
          <View style={styles.card}>
            {/* Terms of Service */}
            <TouchableOpacity style={styles.settingRow} onPress={() => console.log("Terms of Service pressed")}>
              <View style={styles.settingInfo}>
                <View style={[styles.iconContainer, { backgroundColor: "#A28BEE" }]}>
                  <Ionicons name="document-text-outline" size={18} color="white" />
                </View>
                <Text style={styles.settingText}>Terms of Service</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#999999" />
            </TouchableOpacity>

            {/* Privacy & Security */}
            <TouchableOpacity
              style={[styles.settingRow, styles.noBorder]}
              onPress={() => console.log("Privacy & Security pressed")}
            >
              <View style={styles.settingInfo}>
                <View style={[styles.iconContainer, { backgroundColor: "#A28BEE" }]}>
                  <Ionicons name="shield-checkmark-outline" size={18} color="white" />
                </View>
                <Text style={styles.settingText}>Privacy & Security</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <View style={styles.card}>
            {/* Sign Out */}
            <TouchableOpacity
              style={[styles.settingRow, styles.noBorder]}
              onPress={() => console.log("Sign Out pressed")}
            >
              <View style={styles.settingInfo}>
                <View style={[styles.iconContainer, { backgroundColor: "#FF3B30" }]}>
                  <Ionicons name="log-out-outline" size={18} color="white" />
                </View>
                <Text style={[styles.settingText, { color: "#FF3B30" }]}>Sign Out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* App Info */}
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.card}>
            {/* Version */}
            <View style={[styles.settingRow, styles.noBorder]}>
              <Text style={styles.settingText}>Version</Text>
              <Text style={styles.versionText}>1.0.0</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121418",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 8,
  },
  lastSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    fontFamily: "DMSans-SemiBold",
  },
  card: {
    backgroundColor: "#2D333C80",
    borderRadius: 15,
    overflow: "hidden",
    paddingInline: 16,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#424242",
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  settingInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  settingText: {
    color: "white",
    fontSize: 16,
    fontFamily: "DMSans-Regular",
  },
  versionText: {
    color: "#999999",
    fontSize: 16,
    fontFamily: "DMSans-Regular",
  },
})

export default Settings

