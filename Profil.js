import React from "react";
import { Box, Center, Image, Text, VStack } from "native-base";
import Colors from "color";
import FontName from "./fonts/fontName";
import Buttone from "./Components/Buttone";

function Profil({ navigation }) {
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
          HALAMAN PROFIL SAYA
        </Text>
        <Image
          source={require("./assets/Profil.png")}
          resizeMode="contain"
          mb={-10}
          mt={20}
          size="260"
          alt="welcome-image"
        />
        <Text
          mt={50}
          fontFamily={FontName.poppins700}
          fontSize={16}
          textAlign="center"
          color={Colors.white}
        >
          Nama: Syafira Aliffinda Komala
        </Text>
        <Text
          fontFamily={FontName.poppins700}
          fontSize={16}
          textAlign="center"
          color={Colors.white}
        >
          NIM: 120140248
        </Text>
      </Center>
    </Box>
  );
}

export default Profil;
