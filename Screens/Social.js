import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import CustomButton from "../Components/CustomButton";
import CustomText from "../Components/CustomText";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Renkler from "../Constants/Renkler";

let deviceHeight = Dimensions.get("screen").height;
let deviceWidth = Dimensions.get("screen").width;

const Social = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.bgImage}
        source={require("../assets/img/social.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../assets/img/logo.png")}
        />
        <CustomText style={styles.logoText}>social</CustomText>
      </View>

      <View style={styles.bottomContainer}>
        <CustomText style={styles.title}>
          Tanıdıklarını keşfet, yeni arkadaşlar edin!
        </CustomText>
        <CustomText style={styles.aciklama}>
          Tanıdıklarınla uyumunu görebilir, mesajlaşabilir hatta falında çıkan
          kısmetle karşılaşabilirsin.
        </CustomText>
        <CustomButton bgFill color={Renkler.sari} textColor={Renkler.siyah}>
          Hemen Katıl
        </CustomButton>
      </View>
    </View>
  );
};

export default Social;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bgImage: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    opacity: 0.15,
  },
  logoImage: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start",
    top: deviceHeight * 0.2,
  },
  logoText: {
    fontSize: 80,
    textAlign: "center",
    top: -35,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 50,
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
  },
  aciklama: {
    marginVertical: 30,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "OpenSans-SemiBold",
  },
});
