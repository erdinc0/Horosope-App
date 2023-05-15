import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Renkler from "../Constants/Renkler";
import CustomText from "../Components/CustomText";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

let deviceWidth = Dimensions.get("screen").width;

const KahveFaliModal = ({ referans, modalGizle }) => {
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        // set `detached` to true

        bottomInset={25}
        style={styles.sheetContainer}
        detached={true}
        handleIndicatorStyle={{
          backgroundColor: "transparent",
        }}
        backgroundStyle={{
          backgroundColor: Renkler.koyuGri,
        }}
        snapPoints={[300]}
        ref={referans}
      >
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={modalGizle}>
            <View style={styles.dismissContainer}>
              <Ionicons name="close" style={styles.dismissIcon} />
            </View>
          </TouchableOpacity>
          <CustomText style={styles.title}>
            Fincan fotoğraflarını nasıl yükelemek istersin?
          </CustomText>
          <View style={styles.uploadContainer}>
            <TouchableOpacity>
              <View style={styles.uploadItemContainer}>
                <View style={styles.uploadItemIconContainer}>
                  <FontAwesome name="picture-o" style={styles.uploadItemIcon} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.uploadItemContainer}>
                <View style={styles.uploadItemIconContainer}>
                  <Ionicons name="camera" style={styles.uploadItemIcon} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default KahveFaliModal;

const styles = StyleSheet.create({
  sheetContainer: {
    // add horizontal space
    marginHorizontal: 25,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 50,
  },
  contentContainer: {
    backgroundColor: Renkler.koyuGri,
    flex: 1,
    width: "85%",
    alignSelf: "center",
  },
  dismissContainer: {
    backgroundColor: Renkler.beyaz,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
    alignSelf: "flex-end",
  },
  dismissIcon: {
    color: Renkler.koyuGri,
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    width: "90%",
  },
  uploadContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  uploadItemContainer: {
    backgroundColor: Renkler.siyah,
    width: deviceWidth * 0.35,
    height: deviceWidth * 0.35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  uploadItemIconContainer: {
    width: "70%",
    height: "70%",
    backgroundColor: Renkler.mor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
  },
  uploadItemIcon: {
    fontSize: 40,
    color: Renkler.beyaz,
  },
});
