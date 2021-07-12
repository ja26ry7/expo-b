import React, { useState } from "react";
import { TouchableOpacity, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar";
import Icon from "../components/Icon";
import Toast from "react-native-root-toast";
import Button from "../components/Button";

export default () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(Toast.positions.TOP);

  // let abc = Toast.show("This is a message", {
  //   duration: Toast.durations.LONG,
  //   position: Toast.positions.BOTTOM,
  //   shadow: true,
  //   animation: true,
  //   hideOnPress: true,
  //   delay: 100,
  //   onShow: () => {
  //     // calls on toast\`s appear animation start
  //   },
  //   onShown: () => {
  //     // calls on toast\`s appear animation end.
  //   },
  //   onHide: () => {
  //     // calls on toast\`s hide animation start.
  //   },
  //   onHidden: () => {
  //     // calls on toast\`s hide animation end.
  //   },
  // });

  // setTimeout(() => {
  //   Toast.hide(abc);
  // }, 500);

  return (
    <>
      <AppBar
        title="Toast"
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
          title="Toast Top"
          bgColor="darkblue"
          onPress={() => {
            setPosition(Toast.positions.TOP);
            setVisible(true);
            setTimeout(() => setVisible(false), 2000);
          }}
        />
        <Button
          title="Toast Bottom"
          bgColor="darkblue"
          onPress={() => {
            setPosition(Toast.positions.BOTTOM);
            setVisible(true);
            setTimeout(() => setVisible(false), 2000);
          }}
        />
        <Button
          title="Toast Center"
          bgColor="darkblue"
          onPress={() => {
            setPosition(Toast.positions.CENTER);
            setVisible(true);
            setTimeout(() => setVisible(false), 2000);
          }}
        />

        <Toast
          visible={visible}
          position={position}
          shadow={true}
          animation={true}
          hideOnPress={true}
        >
          This is toast
        </Toast>
      </ScrollView>
    </>
  );
};
