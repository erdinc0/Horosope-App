import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./MainScreen";
import TopTabBarScreen from "./TopTabBarScreen";
import Social from "./Social";
import Renkler from "../Constants/Renkler";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "../Components/Header";

let BottomTab = createBottomTabNavigator();

const BottomTabNavigatorScreen = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: Renkler.siyah,
        tabBarInactiveBackgroundColor: Renkler.siyah,
        tabBarActiveTintColor: Renkler.sari,
        tabBarInactiveTintColor: Renkler.gri,
        tabBarStyle: { backgroundColor: Renkler.siyah, borderTopWidth: 0 },
        header: () => {
          return (
            <Header
              leftImage={require("../assets/img/moon.png")}
              centerImage={require("../assets/img/logo.png")}
            />
          );
        },
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-home" size={size} color={color} />;
          },
          title: "Ana Sayfa",
        }}
        name="Home"
        component={MainScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-mail" size={size} color={color} />;
          },
          title: "Gelen Kutusu",
        }}
        name="Inbox"
        component={TopTabBarScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-people" size={size} color={color} />;
          },
          title: "Social",
        }}
        name="Social"
        component={Social}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigatorScreen;

const styles = StyleSheet.create({});
