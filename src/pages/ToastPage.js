import React, { useState } from "react";
import { TouchableOpacity, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DateTimePicker } from "react-native-ui-lib";
import AppBar from "../components/AppBar";
import Icon from "../components/Icon";
import Toast from "react-native-root-toast";
import Button from "../components/Button";

export default () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const abc = () => {
    Toast.show("This is a message", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 100,
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        // calls on toast\`s hide animation end.
      },
    });
  };

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
        <Button title="Toast1" bgColor="darkblue" onPress={() => abc} />
        {/* <Button title='Toast2' bgColor='darkblue' onPress={() => componentDidMount()} /> */}

        {/* <Toast
                    visible={visible}
                    position={100}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}
                >This is toast</Toast> */}
      </ScrollView>
    </>
  );
};
