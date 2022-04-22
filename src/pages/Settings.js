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
      <FF.AppBar
        title="Setting"
        left={
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.pop()}
          >
            <FF.Icon name="FontAwesome/angle-left" size={30} color="white" />
          </TouchableOpacity>
        }
      />
      <View>
        <FF.SectionHeader />
        <FF.ListGroup
          items={[
            {
              label: "關於",
              onPress: () => navigation.navigate("introduction"),
            },
            {
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
        ></FF.Button>
      </View>
    </>
  );
};
