import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  Button,
} from "react-native";
import React, { useEffect, useRef } from "react";
import CustomText from "../Components/CustomText";
import Renkler from "../Constants/Renkler";
import EmojiPicker from "../Components/EmojiPicker";
import TileItem from "../Components/TileItem";
import KahveFaliModal from "./KahveFaliModal";
import { Portal } from "@gorhom/portal";

let deviceWidth = Dimensions.get("screen").width;
let deviceHeight = Dimensions.get("screen").height;

const MainScreen = ({ navigation }) => {
  /* Boşluk */
  const kahveFaliModalRef = useRef();

  let kahveFaliModalReveal = () => kahveFaliModalRef.current.present();

  // callbacks

  useEffect(() => {
    navigation.setOptions({});
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.mainScrollViewContents}
        >
          <View style={styles.innerMainContainer}>
            <View style={styles.moodSelector}>
              <CustomText style={styles.moodSelectorText}>
                Modunu Seç
              </CustomText>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
              >
                <View style={styles.emojiPickerContainer}>
                  <EmojiPicker onPress={kahveFaliModalReveal}>😭</EmojiPicker>
                  <EmojiPicker onPress={kahveFaliModalReveal}>🙁</EmojiPicker>
                  <EmojiPicker onPress={kahveFaliModalReveal}>😐</EmojiPicker>
                  <EmojiPicker onPress={kahveFaliModalReveal}>☺️</EmojiPicker>
                  <EmojiPicker onPress={kahveFaliModalReveal}>😁</EmojiPicker>
                  <EmojiPicker onPress={kahveFaliModalReveal}>🤩</EmojiPicker>
                  <EmojiPicker onPress={kahveFaliModalReveal}>🤪</EmojiPicker>
                </View>
              </ScrollView>
            </View>

            <View style={styles.tilesContainer}>
              <CustomText style={styles.tilesTitle}>Fal Baktır</CustomText>
              <View style={styles.tilesHorizontalContainer}>
                <TileItem
                  onPress={kahveFaliModalReveal}
                  image={require("../assets/img/tileImage.jpg")}
                >
                  Kahve Falı
                </TileItem>
                <TileItem
                  onPress={kahveFaliModalReveal}
                  image={require("../assets/img/tileImage2.jpg")}
                >
                  Niyetime İç
                </TileItem>
              </View>
              <View style={styles.tilesHorizontalContainer}>
                <TileItem
                  onPress={kahveFaliModalReveal}
                  image={require("../assets/img/tileImage3.jpg")}
                >
                  Tarot Falı
                </TileItem>
                <TileItem
                  onPress={kahveFaliModalReveal}
                  image={require("../assets/img/tileImage4.jpg")}
                >
                  Lamba Cini
                </TileItem>
              </View>
            </View>

            <View style={styles.tilesContainer}>
              <CustomText style={styles.tilesTitle}>
                Günlük Astroloji
              </CustomText>
              <View style={styles.tilesHorizontalContainer}>
                <TileItem
                  onPress={kahveFaliModalReveal}
                  isWide
                  image={require("../assets/img/tileImage.jpg")}
                >
                  Burcun
                </TileItem>
              </View>
              <View style={styles.tilesHorizontalContainer}>
                <TileItem
                  onPress={kahveFaliModalReveal}
                  image={require("../assets/img/tileImage3.jpg")}
                >
                  Günlük Aşk Uyumu
                </TileItem>
                <TileItem
                  onPress={kahveFaliModalReveal}
                  image={require("../assets/img/tileImage4.jpg")}
                >
                  Biyoritim
                </TileItem>
              </View>
              <View style={styles.tilesHorizontalContainer}>
                <TileItem
                  onPress={kahveFaliModalReveal}
                  isWide
                  isLocked
                  image={require("../assets/img/tileImage2.jpg")}
                >
                  14 Mayıs 2023
                </TileItem>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <Portal>
        <KahveFaliModal
          referans={kahveFaliModalRef}
          modalGizle={() => kahveFaliModalRef.current.dismiss()}
        ></KahveFaliModal>
      </Portal>
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: Renkler.siyah, flex: 1 },
  innerMainContainer: {
    width: "90%",
    alignSelf: "center",
  },
  mainScrollViewContents: {
    paddingBottom: 25,
  },
  moodSelector: {
    marginTop: 10,
    width: "100%",
  },
  scrollView: {
    alignSelf: "center",
  },
  moodSelectorText: {
    color: Renkler.beyaz,
    fontFamily: "OpenSans-Bold",
    fontSize: 19,
  },
  emojiPickerContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tilesContainer: {
    marginTop: 15,
  },
  tilesHorizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  tilesTitle: {
    fontFamily: "OpenSans-Bold",
    fontSize: 22,
    color: Renkler.beyaz,
  },
});
