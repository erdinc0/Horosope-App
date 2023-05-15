import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import React, { useState } from "react";
import Renkler from "../Constants/Renkler";
import { Entypo, Ionicons } from "@expo/vector-icons";
import CustomText from "./CustomText";

const CustomSelectorItem = ({
  children,
  aciklama,
  icon,
  arrow,
  renk,
  color,
  onoff,
  disabled,
}) => {
  let [isEnabled, toggleSwitch] = useState(false);

  return (
    <TouchableOpacity>
      <View style={styles.selectorListItem}>
        {icon ? (
          <View style={styles.selectorListLeftIconContainerContainer}>
            <View
              style={[
                styles.selectorListLeftIconContainer,
                { backgroundColor: color ? color : Renkler.gri },
              ]}
            >
              <Ionicons name={icon} style={styles.selectorListLeftIcon} />
            </View>
          </View>
        ) : (
          <View style={styles.noIconContainer}></View>
        )}
        <View style={styles.selectorListTextContainer}>
          <CustomText
            style={[
              styles.selectorListTitle,
              { color: disabled ? Renkler.gri : Renkler.beyaz },
            ]}
          >
            {children}
          </CustomText>
          {aciklama ? (
            <CustomText style={styles.selectorListaciklama}>
              {aciklama}
            </CustomText>
          ) : (
            <></>
          )}
        </View>
        {arrow ? (
          <View style={styles.selectorListRightIconContainer}>
            <Entypo name="chevron-right" style={styles.selectorListRightIcon} />
          </View>
        ) : onoff ? (
          <View style={styles.selectorListRightIconContainer}>
            <Switch
              disabled={disabled}
              trackColor={{ false: Renkler.gri, true: Renkler.sari }}
              thumbColor={Renkler.beyaz}
              ios_backgroundColor={Renkler.gri}
              onValueChange={() => toggleSwitch(!isEnabled)}
              value={isEnabled}
            />
          </View>
        ) : (
          <View style={styles.selectorListRightIconContainer}></View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomSelectorItem;

const styles = StyleSheet.create({
  selectorListItem: {
    backgroundColor: Renkler.koyuGri,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  selectorListLeftIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  selectorListLeftIconContainerContainer: {
    alignItems: "center",
    flex: 1,
  },
  selectorListLeftIcon: {
    color: Renkler.beyaz,
    fontSize: 16,
  },
  selectorListTextContainer: {
    flex: 3,
  },
  selectorListRightIcon: {
    color: Renkler.beyaz,
    fontSize: 24,
    alignSelf: "center",
  },
  selectorListRightIconContainer: {
    flex: 1,
  },
  selectorListTitle: {
    fontSize: 16,
  },
  selectorListaciklama: {
    fontSize: 12,
    fontFamily: "OpenSans-SemiBold",
  },
  noIconContainer: {
    paddingLeft: 30,
  },
});
