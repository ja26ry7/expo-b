import React, { useState, useCallback } from "react";
import { TouchableOpacity, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar";
import Icon from "../components/Icon";
import DropDownPicker from "react-native-dropdown-picker";

export default () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "Apple",
      value: "apple",
      icon: () => <Icon name={"FontAwesome/apple"} />,
    },
    {
      label: "Banana",
      value: "banana",
      icon: () => <Icon name={"FontAwesome/apple"} />,
    },
  ]);

  return (
    <>
      <AppBar
        title="下拉式選單"
        left={
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Icon
              name="FontAwesome/angle-left"
              size={30}
              color="white"
              style={{}}
            />
          </TouchableOpacity>
        }
        right={{}}
        barColor=""
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        showArrowIcon={true}
        disableLocalSearch={true}
      />
    </>
  );
};
