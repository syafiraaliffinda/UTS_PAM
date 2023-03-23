import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "native-base";
import React from "react";

function Buttone({
  mt,
  bg,
  color,
  children,
  onPress,
  w = 200,
  h = 55,
  rounded = 25,
  textAlign = "center",
}) {
  return (
    <Button
      justifyContent={textAlign}
      w={w}
      h={h}
      mt={mt}
      rounded={rounded}
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
        fontSize: "lg",
      }}
      _pressed={{ bg: color }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

export default Buttone;
