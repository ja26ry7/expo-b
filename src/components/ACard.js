import React from "react";
import { View, Text } from "react-native";

export const ACard = ({
  height = 100,
  width = 350,
  bgColor = "white",
  borderRadius = 15,
  text,
}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        alignSelf: "center",
        padding: 20,
        margin: 10,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
};
