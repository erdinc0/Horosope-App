import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomNotification from "../Components/CustomNotification";

const Bildirimler = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <CustomNotification>
          Anneler Günü yarın ama hediyesi bugünden hazır. 🎃 Hafta sonu boyunca
          dilediğin kadar fal baktır! 🤩
        </CustomNotification>
        <CustomNotification>
          Bugünkü kahve falını okuyunca "iyi ki" diyeceksin. Güzel haberler için
          bekleniyorsun. ☺️
        </CustomNotification>
        <CustomNotification>
          Hissediyorum. Bence o da seni düşünüyor. 😂
        </CustomNotification>
        <CustomNotification>
          Venüs, Yengeç burcunda ilerliyor. Bugünlerde ekstra sevildiğini
          hissedeceksin. ☺️
        </CustomNotification>
        <CustomNotification>
          Kahve mi, Durugörü mü? Dur söyleme, seçtiğin falda buluşalım. 🥰
        </CustomNotification>
      </ScrollView>
    </View>
  );
};

export default Bildirimler;

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});
