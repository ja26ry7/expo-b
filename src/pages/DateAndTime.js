import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DateTimePicker } from "react-native-ui-lib";

import * as FF from "../components";

export default () => {
  const navigation = useNavigation();
  return (
    <>
      <FF.AppBar title="日期與時間" left={<FF.BackButton />} />
      <ScrollView style={{ padding: 14 }}>
        <DateTimePicker
          containerStyle={{ marginVertical: 20 }}
          title={"Date"}
          placeholder={"Select a date"}
          dateFormat={"YYYY/MM/DD"}
          value={new Date()}
        />
        <DateTimePicker
          mode={"time"}
          title={"Time"}
          placeholder={"Select time"}
          timeFormat={"h:mm A"}
          value={new Date()}
        />
      </ScrollView>
    </>
  );
};
