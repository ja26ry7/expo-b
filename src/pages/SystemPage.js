import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DeviceInfo from "react-native-device-info";

import * as FF from "../components";

export default () => {
  const navigation = useNavigation();

  let brand = DeviceInfo.getBrand();
  let systemName = DeviceInfo.getSystemName();
  let systemVersion = DeviceInfo.getSystemVersion();
  let appVersion = DeviceInfo.getVersion();

  const ListName = ({ title, news }) => (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
      }}
    >
      <Text style={{ fontSize: 18 }}>{title}</Text>
      <View style={{ flex: 1 }} />
      <Text style={{ fontSize: 16 }}>{news}</Text>
    </View>
  );

  return (
    <>
      <FF.AppBar title="系統資訊" left={<FF.BackButton />} />
      <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
        <ListName title="手機品牌" news={brand} />
        <FF.Divider style={{ backgroundColor: "#D0D0D0" }} />
        <ListName title="手機版本" news={`${systemName}_${systemVersion}`} />
        <FF.Divider style={{ backgroundColor: "#D0D0D0" }} />
        <ListName title="App版本" news={appVersion} />
      </View>
    </>
  );
};
