import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import CustomText from "../Components/CustomText";
import Renkler from "../Constants/Renkler";
import CustomSelectorItem from "../Components/CustomSelectorItem";
import { Entypo } from "@expo/vector-icons";

const SettingsModal = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
        <CustomText style={styles.title}>Ayarlar</CustomText>

        <View style={styles.selectorListContainer}>
          <CustomSelectorItem color={Renkler.yesil} arrow>
            Dil
          </CustomSelectorItem>
          <CustomSelectorItem color={Renkler.yesil} onoff>
            Açılış Sesi
          </CustomSelectorItem>
          <CustomSelectorItem color={Renkler.yesil} arrow>
            Tema
          </CustomSelectorItem>
          <CustomSelectorItem color={Renkler.yesil} onoff disabled>
            Altınımı Harcarken Sor
          </CustomSelectorItem>
        </View>

        <View style={styles.selectorListContainer}>
          <CustomSelectorItem color={Renkler.sari} onoff>
            Bildirimler
          </CustomSelectorItem>
        </View>

        <View style={styles.selectorListContainer}>
          <CustomSelectorItem color={Renkler.sari} arrow>
            S.S.S.
          </CustomSelectorItem>
          <CustomSelectorItem color={Renkler.sari} arrow>
            Bize Yazın
          </CustomSelectorItem>
          <CustomSelectorItem color={Renkler.sari} arrow>
            Siri Kısayolları
          </CustomSelectorItem>
          <CustomSelectorItem color={Renkler.sari} arrow>
            IYS İzinleri
          </CustomSelectorItem>
          <CustomSelectorItem color={Renkler.sari} arrow>
            Çıkış Yap
          </CustomSelectorItem>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  scrollContent: {
    paddingBottom: 50,
  },
  topContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  kapatText: {
    color: Renkler.mor,
  },
  settingsIcon: {
    color: Renkler.gri,
    fontSize: 28,
  },
  title: {
    fontSize: 28,
    paddingTop: 20,
  },
  ppContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ppImageContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Renkler.beyaz,
    borderRadius: 1000,
  },
  ppImageText: {
    color: Renkler.gri,
    fontSize: 28,
    fontFamily: "OpenSans-SemiBold",
  },
  pencilIcon: {
    fontSize: 28,
    color: Renkler.gri,
  },
  infoIcon: {
    fontSize: 28,
    color: Renkler.gri,
  },
  ppCenterTouchable: {
    flex: 5,
  },
  ppRightTouchable: {
    flex: 1,
  },
  ppCenterContainer: {
    alignItems: "flex-start",
    paddingLeft: 20,
    justifyContent: "center",
  },
  ppCenterSecondContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ppRightContainer: {
    alignItems: "center",
  },
  ppNameText: {
    fontSize: 18,
    fontFamily: "OpenSans-ExtraBold",
  },
  classicText: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    letterSpacing: 1,
  },
  premiumButton: {
    marginTop: 20,
  },
  statisticsContainer: {
    marginTop: 20,
    backgroundColor: Renkler.koyuGri,
    borderRadius: 15,
  },
  statisticsTopContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statisticsShareIcon: {
    fontSize: 30,
    color: Renkler.beyaz,
  },
  statisticsText: {
    fontSize: 16,
    color: Renkler.beyaz,
  },
  statisticsTextContainer: {
    borderBottomColor: Renkler.gri,
    borderBottomWidth: 1,
  },
  statisticsBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 35,
  },
  statisticsBottomContainerInnerConatiner: {
    alignItems: "center",
  },
  statisticsTitle: {
    fontSize: 12,
    fontFamily: "OpenSans-SemiBold",
  },
  statisticsNumber: {
    fontSize: 18,
  },
  selectorListContainer: {
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 20,
  },
});
