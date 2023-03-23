import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {
  OpenSans_700Bold,
  OpenSans_400Regular,
} from "@expo-google-fonts/open-sans";
import Program from "./Program";
import Welcome from "./Welcome";
import Profil from "./Profil";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    OpenSans_700Bold,
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Program" component={Program} />
          <Stack.Screen name="Profil" component={Profil} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
