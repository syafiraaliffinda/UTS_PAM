import React from "react";
import { Box, Center, Image, Text, VStack } from "native-base";
import Colors from "color";
import FontName from "./fonts/fontName";
import Buttone from "./Components/Buttone";
function Welcome({ navigation }) {
  return (
    <Box flex={1} bg={Colors.green}>
      <Center w="full">
        <Text
          mt={90}
          fontFamily={FontName.poppins700}
          fontSize={36}
          textAlign="center"
          color={Colors.white}
        >
          HALAMAN UTAMA
        </Text>
        <Image
          source={require("./assets/welcome.png")}
          resizeMode="contain"
          mb={-10}
          mt={-20}
          size="360"
          alt="welcome-image"
        />
        <Image
          source={require("./assets/logo.png")}
          resizeMode="contain"
          mt={-10}
          mb={20}
          size="200"
          alt="logo-kibun"
        />
      </Center>
      <VStack space={10} px={5} alignItems="center">
        <Buttone
          bg={Colors.darkGreen}
          color={Colors.white}
          onPress={() => navigation.navigate("Program")}
        >
          Masuk Program
        </Buttone>
      </VStack>
    </Box>
  );
}

export default Welcome;

