import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Renkler from "../Constants/Renkler";
import CustomText from "./CustomText";

const EmojiPicker = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.emojiTouchable}>
      <View style={styles.emojiContainer}>
        <CustomText style={styles.emojiText}>{children}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default EmojiPicker;

const styles = StyleSheet.create({
  emojiContainer: {
    backgroundColor: Renkler.koyuGri,
    flex: 1,
    borderRadius: 10,
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  emojiTouchable: {
    paddingRight: 10,
  },
  emojiText: {
    fontSize: 24,
  },
});
