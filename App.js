import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import BottomTabNavigatorScreen from "./Screens/BottomTabNavigatorScreen";
import Renkler from "./Constants/Renkler";
import ProfileStackNavigator from "./Screens/ProfileStackNavigator";

import { PortalProvider } from "@gorhom/portal";

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Renkler.siyah,
    primary: Renkler.sari,
    text: Renkler.beyaz,
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <PortalProvider>
        <NavigationContainer theme={MyTheme}>
          <StatusBar style="light" />

          <Stack.Navigator>
            <Stack.Screen
              name="BottomTabNavigatorScreen"
              component={BottomTabNavigatorScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              options={{
                presentation: "modal",
                headerShown: false,
              }}
              name="ProfileStackNavigator"
              component={ProfileStackNavigator}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PortalProvider>
    </>
  );
}

const styles = StyleSheet.create({});
