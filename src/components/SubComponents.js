import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

export const SubComponents = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16 }}>{title}</Text>
      <View style={{ flex: 1 }} />
      <Icon name="FontAwesome/angle-right" size={22} color="#ADADAD" />
    </TouchableOpacity>
  );
};
