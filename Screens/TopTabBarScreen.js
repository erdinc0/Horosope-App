import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Fallarim from "./Fallarim";
import Favoriler from "./Favoriler";
import Bildirimler from "./Bildirimler";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Renkler from "../Constants/Renkler";
import CustomText from "../Components/CustomText";

const TopTab = createMaterialTopTabNavigator();

const TopTabBarScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>Gelen Kutusu</CustomText>
      </View>
      <TopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Renkler.beyaz,
          tabBarInactiveTintColor: Renkler.gri,
          tabBarIndicatorStyle: {
            backgroundColor: Renkler.beyaz,
            height: 1.5,
            bottom: 7,
          },
          tabBarStyle: {
            backgroundColor: Renkler.siyah,
            width: "90%",
            alignSelf: "center",
          },
          tabBarLabelStyle: {
            fontFamily: "OpenSans-Bold",
          },
          animationEnabled: false,
        }}
      >
        <TopTab.Screen name="Fallarim" component={Fallarim} />
        <TopTab.Screen name="Favoriler" component={Favoriler} />
        <TopTab.Screen name="Bildirimler" component={Bildirimler} />
      </TopTab.Navigator>
    </View>
  );
};

export default TopTabBarScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Renkler.siyah,
  },
  titleContainer: {
    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 20,
    color: Renkler.beyaz,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
