import {
  StyleSheet,
  Text,
  View,
  Platform,
  NativeModules,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";
import Renkler from "../Constants/Renkler";
import { useNavigation } from "@react-navigation/native";

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

const Header = ({ leftImage, rightImage, centerImage }) => {
  let navigasyon = useNavigation();

  let [statusbarHeight, setStatusbarHeight] = useState(0);

  if (Platform.OS === "ios") {
    StatusBarManager.getHeight((statusBarHeight) => {
      setStatusbarHeight(statusBarHeight.height);
    });
  }

  return (
    <View
      style={[
        styles.headerMainContainer,
        {
          height:
            Platform.OS === "ios"
              ? statusbarHeight + 60
              : STATUSBAR_HEIGHT + 60,
          paddingTop: statusbarHeight,
        },
      ]}
    >
      <View style={styles.headerLeft}>
        <TouchableOpacity style={styles.headerLeftTouchable}>
          <View style={styles.headerLeftInnerContainer}>
            <Image style={styles.headerLeftImage} source={leftImage} />
            <CustomText style={styles.headerLeftTitle}>1.0</CustomText>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.headerCenter}>
        <Image style={styles.headerCenterImage} source={centerImage} />
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity
          style={styles.headerRightTouchable}
          onPress={() => navigasyon.navigate("ProfileStackNavigator")}
        >
          <View style={styles.headerRightInnerContainer}>
            <CustomText style={styles.headerRightTitle}>1.0</CustomText>
            <View style={styles.profileNameContainer}>
              <CustomText style={styles.profileNameText}>EC</CustomText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMainContainer: {
    backgroundColor: Renkler.siyah,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  headerLeftInnerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    left: 15,
  },
  headerLeftTouchable: {
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  headerLeftImage: {
    resizeMode: "contain",
    height: 35,
    width: 35,
  },
  headerLeftTitle: {
    color: Renkler.sari,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
  },
  headerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerCenterImage: {
    resizeMode: "contain",
    height: 25,
  },
  headerRight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  headerRightInnerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    right: 15,
  },
  headerRightTouchable: {
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  headerRightTitle: {
    color: Renkler.sari,
    marginRight: 5,
    fontFamily: "OpenSans-Bold",
    opacity: 0,
  },
  profileNameContainer: {
    backgroundColor: Renkler.beyaz,
    borderRadius: 1000,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  profileNameText: {
    fontSize: 11,
    color: Renkler.gri,
  },
});
