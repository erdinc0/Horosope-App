import { StyleSheet, Platform } from "react-native";
import React from "react";
import ProfileModal from "./ProfileModal";
import SettingsModal from "./SettingsModal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          marginTop: Platform.OS === "ios" ? 0 : 25,
        },
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ProfileModal"
        component={ProfileModal}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SettingsModal"
        component={SettingsModal}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;

const styles = StyleSheet.create({});
