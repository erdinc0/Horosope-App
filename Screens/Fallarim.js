import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import CustomText from "../Components/CustomText";
import Renkler from "../Constants/Renkler";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../Components/CustomButton";

let deviceHeight = Dimensions.get("screen").height;
let deviceWidth = Dimensions.get("screen").width;

const Fallarim = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="mail" style={styles.icon} />
          </View>
          <CustomText style={styles.title}>Gelen Kutusu Boş</CustomText>
          <CustomText style={styles.aciklama}>
            Henüz fal baktırmamışsın! Senin hakkında söyleyeceklerimi merak
            ediyorsan ilk falını bekliyorum.
          </CustomText>

          <CustomButton
            color={Renkler.sari}
            style={styles.customButton}
            bgFill={true}
            textColor={Renkler.siyah}
          >
            Hemen Fal Baktır
          </CustomButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Fallarim;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    marginTop: deviceHeight * 0.075,
  },
  iconContainer: {
    backgroundColor: Renkler.koyuGri,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 1000,
  },
  icon: {
    color: Renkler.gri,
    fontSize: 50,
  },
  title: {
    color: Renkler.beyaz,
    fontSize: 24,
    fontFamily: "OpenSans-Bold",
    marginTop: 20,
    textAlign: "center",
  },
  aciklama: {
    color: Renkler.beyaz,
    fontSize: 12,
    fontFamily: "OpenSans-Bold",
    marginTop: 20,
    textAlign: "center",
    width: deviceWidth * 0.8,
  },
  customButton: {
    width: deviceWidth * 0.9,
    marginTop: 20,
  },
});
