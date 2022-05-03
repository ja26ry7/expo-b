import React, { useState, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppContext } from "../AppContext";
import * as FF from "../components";

export default () => {
  const navigation = useNavigation();
  const appCtx = useContext(AppContext);

  return (
    <>
      <FF.AppBar title="Setting" left={<FF.BackButton />} />
      <View>
        <FF.SectionHeader />

        <FF.ListGroup
          header={"joy"}
          items={[
            {
              key: "1",
              label: "關於",
              onPress: () => navigation.navigate("introduction"),
            },
            {
              key: "2",
              label: "系統資訊",
              onPress: () => navigation.navigate("systempage"),
            },
          ]}
        />

        <View style={{ height: 50 }} />
        <FF.Button
          title="登出"
          bgColor="darkblue"
          onPress={() => appCtx.logout()}
        />
      </View>
    </>
  );
};
