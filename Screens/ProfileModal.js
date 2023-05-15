import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import CustomText from "../Components/CustomText";
import Renkler from "../Constants/Renkler";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "../Components/CustomButton";
import CustomSelectorItem from "../Components/CustomSelectorItem";

const ProfileModal = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <CustomText style={styles.kapatText}>Kapat</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SettingsModal")}
          >
            <Ionicons name="ios-settings-sharp" style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>

        <CustomText style={styles.title}>Profilim</CustomText>
        <View style={styles.ppContainer}>
          <View style={styles.ppImageContainer}>
            <CustomText style={styles.ppImageText}>EC</CustomText>
          </View>
          <TouchableOpacity style={styles.ppCenterTouchable}>
            <View style={styles.ppCenterContainer}>
              <CustomText style={styles.ppNameText}>Erdinç,</CustomText>
              <View style={styles.ppCenterSecondContainer}>
                <CustomText style={styles.classicText}>CLASSIC</CustomText>
                <Ionicons
                  name="md-information-circle"
                  style={styles.infoIcon}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ppRightTouchable}>
            <View style={styles.ppRightContainer}>
              <MaterialCommunityIcons name="pencil" style={styles.pencilIcon} />
            </View>
          </TouchableOpacity>
        </View>

        <CustomButton
          style={styles.premiumButton}
          icon={
            <MaterialCommunityIcons
              name="diamond"
              size={24}
              color={Renkler.sari}
            />
          }
          color={Renkler.mor}
          bgFill={true}
          aciklama="Reklamsız & günde 10 altın!"
        >
          Ayrıcalıklar Dünyasına Katıl
        </CustomButton>

        <View style={styles.statisticsContainer}>
          <View style={styles.statisticsTopContainer}>
            <View style={styles.statisticsTextContainer}>
              <CustomText style={styles.statisticsText}>
                İstatistikler
              </CustomText>
            </View>
            <TouchableOpacity>
              <Ionicons
                name="share-outline"
                style={styles.statisticsShareIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.statisticsBottomContainer}>
            <View style={styles.statisticsBottomContainerInnerConatiner}>
              <CustomText style={styles.statisticsTitle}>Kahve Falı</CustomText>
              <CustomText style={styles.statisticsNumber}>0</CustomText>
            </View>
            <View style={styles.statisticsBottomContainerInnerConatiner}>
              <CustomText style={styles.statisticsTitle}>Kahve Falı</CustomText>
              <CustomText style={styles.statisticsNumber}>0</CustomText>
            </View>
          </View>
        </View>

        <View style={styles.selectorListContainer}>
          <CustomSelectorItem
            color={Renkler.yesil}
            icon="airplane"
            arrow
            aciklama="Her hafta paylaş, 1 altın kazan!"
          >
            Paylaş & Kazan
          </CustomSelectorItem>
          <CustomSelectorItem
            color={Renkler.yesil}
            icon="play"
            aciklama="Her gün toplamda 1 altın kazan!"
          >
            İzle & Kazan
          </CustomSelectorItem>
          <CustomSelectorItem
            color={Renkler.yesil}
            icon="albums"
            arrow
            aciklama="Takip et, 1 altın kazan!"
          >
            Takip Et & Kazan
          </CustomSelectorItem>
        </View>

        <View style={styles.selectorListContainer}>
          <CustomSelectorItem
            color={Renkler.sari}
            icon="card"
            arrow
            aciklama="Her hafta paylaş, 1 altın kazan!"
          >
            Altınlarım
          </CustomSelectorItem>
          <CustomSelectorItem
            color={Renkler.sari}
            icon="star"
            aciklama="Her gün toplamda 1 altın kazan!"
          >
            Uygulamayı Puanlayın
          </CustomSelectorItem>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileModal;

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
