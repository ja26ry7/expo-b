import React, { useState } from "react";
import { TouchableOpacity, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";

import * as FF from "../components";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <FF.AppBar title="Progress" left={<FF.BackButton />} />
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ paddingVertical: 10 }}>Bar</Text>
        <Progress.Bar progress={0.3} width={200} indeterminate={true} />
        <Text style={{ paddingVertical: 10 }}>Pie</Text>
        <Progress.Pie progress={0.4} size={100} indeterminate={true} />
        <Text style={{ paddingVertical: 10 }}>Circle</Text>
        <Progress.Circle size={100} indeterminate={true} />
        <Text style={{ paddingVertical: 10 }}>CircleSnail</Text>
        <Progress.CircleSnail color={["red", "green", "blue"]} />
      </ScrollView>
    </View>
  );
};
