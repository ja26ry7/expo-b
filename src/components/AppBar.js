import React from "react";
import { View, Text, StatusBar } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Header } from "react-native-elements";

const AppBar = ({ title, left, right, barColor }) => {
  return (
    <Header
      backgroundColor={barColor ? barColor : "blue"}
      barStyle={"light-content"}
      containerStyle={{
        paddingBottom: 20,
        borderBottomWidth: 1,
        paddingHorizontal: 20,
      }}
      leftComponent={left}
      centerComponent={{
        text: title,
        style: { fontSize: 20, color: "#fff", fontWeight: "bold" },
      }}
      rightComponent={right}
    />
    // <SafeAreaView
    //     style={{
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //         paddingHorizontal: 20,
    //         backgroundColor: barColor ? barColor : 'blue'
    //     }}
    // >

    // <StatusBar barStyle="light-content" backgroundColor={barColor ? barColor : 'blue'} />
    // <View style={{ justifyContent: 'center', alignItems: 'center', width: 50 }}>{left}</View>

    // <View style={{ justifyContent: 'center', alignItems: 'center', height: 50 }}>
    //     <Text style={{ fontSize: 20, color: 'white' }}>{title}</Text>
    // </View>

    // <View style={{ justifyContent: 'center', alignItems: 'center', width: 50 }}>{right}</View>

    // </SafeAreaView>
  );
};

export default AppBar;
