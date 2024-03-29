import React, { useCallback, useMemo, useRef } from "react";
import { TouchableOpacity, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";

import * as FF from "../components";

export default () => {
  const navigation = useNavigation();

  return (
    <>
      <FF.AppBar title="FlashMessage" left={<FF.BackButton />} />
      <ScrollView style={{ padding: 14 }}>
        <FF.Button
          title="Simple"
          bgColor="gray"
          onPress={() => {
            showMessage({
              message: "Simple message",
              description: "My message description",
              type: "default",
            });
          }}
        />
        <FF.Button
          title="floating"
          bgColor="lightskyblue"
          onPress={() => {
            showMessage({
              message: "floating message",
              icon: "auto",
              type: "info",
              floating: true,
            });
          }}
        />
        <FF.Button
          title="Success"
          bgColor="green"
          onPress={() => {
            showMessage({
              message: "Success message",
              icon: "auto",
              type: "success",
            });
          }}
        />
        <FF.Button
          title="Warning"
          bgColor="orange"
          onPress={() => {
            showMessage({
              message: "Warning message",
              icon: "auto",
              type: "warning",
            });
          }}
        />
        <FF.Button
          title="Danger"
          bgColor="red"
          onPress={() => {
            showMessage({
              message: "Danger message",
              icon: "auto",
              type: "danger",
            });
          }}
        />
        <FF.Button
          title="Hide"
          bgColor="lightgray"
          onPress={() => {
            hideMessage();
          }}
        />
      </ScrollView>
    </>
  );
};
