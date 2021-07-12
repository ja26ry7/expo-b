import React, { useCallback, useMemo, useRef } from "react";
import { TouchableOpacity, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";

import AppBar from "../components/AppBar";
import Icon from "../components/Icon";
import BottomSheet from "react-native-bottomsheet";
import Button from "../components/Button";

export default () => {
  const navigation = useNavigation();

  return (
    <>
      <AppBar
        title="FlashMessage"
        left={
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="FontAwesome/angle-left" size={30} color="white" />
          </TouchableOpacity>
        }
      />
      <ScrollView style={{ padding: 14 }}>
        <Button
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
        <Button
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
        <Button
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
        <Button
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
        <Button
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
        <Button
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
