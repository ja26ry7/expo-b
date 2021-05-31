import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar";
import Icon from "../components/Icon";
import Divider from "../components/Divider";
import DeviceInfo from "react-native-device-info";

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
      <AppBar
        title="系統資訊"
        left={
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="FontAwesome/angle-left" size={30} color="white" />
          </TouchableOpacity>
        }
      />
      <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
        <ListName title="手機品牌" news={brand} />
        <Divider style={{ backgroundColor: "#D0D0D0" }} />
        <ListName title="手機版本" news={`${systemName}_${systemVersion}`} />
        <Divider style={{ backgroundColor: "#D0D0D0" }} />
        <ListName title="App版本" news={appVersion} />
      </View>
    </>
  );
};
