import React, { useCallback, useMemo, useRef } from "react";
import { TouchableOpacity, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "react-native-bottomsheet";
import * as FF from "../components";

export default () => {
  const navigation = useNavigation();

  return (
    <>
      <FF.AppBar title="ActionSheet" left={<FF.BackButton />} />
      <ScrollView style={{ padding: 14 }}>
        <FF.Button
          title="ActionSheet"
          bgColor="darkblue"
          onPress={() => {
            BottomSheet.showBottomSheetWithOptions(
              {
                options: ["Option 1", "Option 2", "Option 3", "取消"],
                title: "Demo Bottom Sheet",
                dark: true,
                cancelButtonIndex: 3,
              },
              (value) => {
                if (value < 3) alert(value);
              }
            );
          }}
        />
        <FF.Button
          title="ShareBottomSheet"
          bgColor="darkblue"
          onPress={() => {
            BottomSheet.showShareBottomSheetWithOptions(
              {
                url: "https://google.com",
                subject: "Share",
                message: "Simple share",
              },
              (value) => {
                console.log(value);
              },
              (resultcode, path) => {
                console.log(resultcode, path);
              }
            );
          }}
        />
      </ScrollView>
    </>
  );
};
