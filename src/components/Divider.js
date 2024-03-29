import React from "react";
import { View } from "react-native";

export const Divider = ({ bgColor = "lightgray", length = "short" }) => (
  <View
    style={{
      height: 1,
      marginLeft: length == "short" ? 20 : 0,
      backgroundColor: bgColor,
    }}
  ></View>
);
