import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
  TouchableNativeFeedback,
} from "react-native";

import Svg, { Path } from "react-native-svg";
import MaskedView from "@react-native-community/masked-view";

export const Tooltip = ({ layout, onPress }) => {
  const window = useWindowDimensions();

  const w = window.width;
  const h = window.height + (StatusBar.currentHeight ?? 0);

  return (
    <>
      <MaskedView
        style={StyleSheet.absoluteFillObject}
        maskElement={
          <Svg width="100%" height="100%">
            <Path
              d={`M0,0 H${w} V${h} H-${w} z M${layout.x - 10},${
                layout.y - 10
              } v${layout.height + 20} h${layout.width + 20} v-${
                layout.height + 20
              }  z`}
              fill="black"
            />
          </Svg>
        }
      >
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onPress={onPress}
        />
      </MaskedView>
      <View
        style={{
          position: "absolute",
          left: layout.x + 15,
          top: layout.y + layout.height + 3,
          marginLeft: 5,
          marginTop: 0,
          borderStyle: "solid",
          borderWidth: 10,
          borderTopColor: "transparent", //下箭头颜色
          borderLeftColor: "transparent", //右箭头颜色
          borderBottomColor: "white", //上箭头颜色
          borderRightColor: "transparent", //左箭头颜色
        }}
      />
      <View
        style={{
          position: "absolute",
          left: 20,
          right: 20,
          top: layout.y + layout.height + 20,
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>這是一個說明...</Text>

        <TouchableOpacity
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: "royalblue",
            alignSelf: "flex-end",
            borderRadius: 5,
          }}
          onPress={onPress}
        >
          <Text style={{ color: "white" }}>OK</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
