import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomText from "./CustomText";
import Renkler from "../Constants/Renkler";

const CustomNotification = ({ children }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainerContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="notifications" style={styles.icon} />
        </View>
      </View>
      <CustomText style={styles.notificationText}>{children}</CustomText>
    </View>
  );
};

export default CustomNotification;

const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: Renkler.koyuGri,
    paddingVertical: 15,
  },
  iconContainerContainer: {
    flex: 2,
  },
  iconContainer: {
    backgroundColor: Renkler.koyuGri,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  icon: {
    color: Renkler.beyaz,
    fontSize: 24,
  },
  notificationText: {
    color: Renkler.beyaz,
    flex: 9,
    fontFamily: "OpenSans-SemiBold",
  },
});
