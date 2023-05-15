import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Renkler from "../Constants/Renkler";
import { useNavigation } from "@react-navigation/native";
import CustomText from "./CustomText";

const CustomButton = ({
  children,
  bgFill,
  style,
  onPress,
  color,
  icon,
  aciklama,
  textColor,
}) => {
  let navigasyon = useNavigation();

  return (
    <View style={[styles.buttonMainContainer, style]}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.buttonInnerContainer,
            {
              backgroundColor: bgFill ? color : Renkler.siyah,
            },
          ]}
        >
          {icon ? <View style={styles.iconContainer}>{icon}</View> : <></>}

          <View
            style={[
              styles.textConatiner,
              {
                alignItems: icon ? "flex-start" : "center",
              },
            ]}
          >
            <CustomText
              style={[
                styles.buttonText,
                { color: textColor ? textColor : Renkler.beyaz },
              ]}
            >
              {children}
            </CustomText>
            {aciklama ? (
              <CustomText
                style={[
                  styles.aciklamaText,
                  { color: textColor ? textColor : Renkler.beyaz },
                ]}
              >
                {aciklama}
              </CustomText>
            ) : (
              <></>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonMainContainer: {
    alignSelf: "center",
    width: "100%",
  },
  buttonInnerContainer: {
    borderRadius: 15,
    borderColor: Renkler.sari,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: "OpenSans-SemiBold",
  },
  aciklamaText: {
    textAlign: "left",
    fontFamily: "OpenSans-SemiBold",
  },
  iconContainer: {
    alignItems: "center",
  },
  textConatiner: {
    paddingVertical: 20,
  },
});
