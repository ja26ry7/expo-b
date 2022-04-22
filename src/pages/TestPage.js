import React, { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonGroup } from "react-native-elements";
import * as FF from "../components";

export default () => {
  const navigation = useNavigation();
  const buttons = ["Hello", "World", "Buttons"];
  const [selectedIndex, setSelectedIndex] = React.useState(2);

  return (
    <>
      <FF.AppBar
        title="Test Page"
        left={
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <FF.Icon name="FontAwesome/angle-left" size={30} color="white" />
          </TouchableOpacity>
        }
      />
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        <ButtonGroup
          onPress={(value) => setSelectedIndex(value)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          selectedButtonStyle={{ backgroundColor: "#0F6FFF" }}
          innerBorderStyle={{ color: "#0F6FFF" }}
          containerStyle={{ height: 30, borderColor: "#0F6FFF" }}
        />
      </ScrollView>
    </>
  );
};
