import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Badge, withBadge } from "react-native-elements";
import ImagePicker from "react-native-image-crop-picker";
import BottomSheet from "react-native-bottomsheet";

import * as FF from "../components";

export default () => {
  const navigation = useNavigation();
  const [selfInfo, setSelfInfo] = useState({
    name: "Joy購寶",
    account: "joybeta2",
    uid: "1234687964984985wdwf",
  });
  const [imageUri, setImageUri] = React.useState(
    "https://img.hypesphere.com/2015-10-22-174039-60.jpg"
  );

  let name = selfInfo.name.substr(0, 1);

  const onAvatar = () => {
    BottomSheet.showBottomSheetWithOptions(
      {
        options: ["拍照", "從圖庫選擇", "取消"],
        title: "請選擇更改方式",
        dark: true,
        cancelButtonIndex: 2,
      },
      async (value) => {
        if (value === 0) {
          try {
            const image = await ImagePicker.openCamera({
              width: 300,
              height: 300,
              cropping: true,
              cropperCircleOverlay: true,
            });
            console.log(image);
            setImageUri(image.path);
          } catch (e) {
            if (e.code !== "E_PICKER_CANCELLED") {
              console.log(e);
            }
          }
        } else if (value === 1) {
          try {
            const image = await ImagePicker.openPicker({
              width: 300,
              height: 300,
              cropping: true,
              cropperCircleOverlay: true,
            });

            console.log(image);
            setImageUri(image.path);
          } catch (e) {
            if (e.code !== "E_PICKER_CANCELLED") {
              console.log(e);
            }
          }
        }
      }
    );
  };

  return (
    <>
      <FF.AppBar title="個人檔案" left={<FF.BackButton />} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => onAvatar()} style={{ margin: 5 }}>
          <Avatar
            rounded
            size="xlarge"
            title={name}
            source={{
              uri: imageUri,
            }}
            titleStyle={{ color: "white" }}
            overlayContainerStyle={{ backgroundColor: "#ff9700" }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 25,
              right: 5,
              backgroundColor: "red",
              borderRadius: 10,
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>Hello World!</Text>
      </View>
    </>
  );
};
