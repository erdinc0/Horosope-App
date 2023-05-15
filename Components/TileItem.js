import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import CustomText from "./CustomText";
import Renkler from "../Constants/Renkler";
import { Ionicons } from "@expo/vector-icons";

let deviceWidth = Dimensions.get("screen").width;

const TileItem = ({ image, children, isWide, isLocked, onPress }) => {
  return (
    <TouchableOpacity onPress={isLocked ? () => {} : onPress}>
      <View
        style={[
          styles.tile,
          { width: isWide ? deviceWidth * 0.9 : deviceWidth * 0.43 },
        ]}
      >
        <Image
          style={[styles.tileImage, { opacity: isLocked ? 0.6 : 1 }]}
          source={image}
        />
        {isLocked ? (
          <Ionicons style={styles.lock} name="ios-lock-closed" />
        ) : (
          <></>
        )}
      </View>
      <CustomText style={styles.tileText}>{children}</CustomText>
    </TouchableOpacity>
  );
};

export default TileItem;

const styles = StyleSheet.create({
  tile: {
    height: 140,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  tileImage: {
    width: "100%",
    resizeMode: "cover",
    height: "100%",
  },
  tileText: {
    fontSize: 18,
    fontFamily: "OpenSans-Bold",
    color: Renkler.beyaz,
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  lock: {
    fontSize: 24,
    color: Renkler.beyaz,
    position: "absolute",
    left: 10,
    top: 10,
  },
});
