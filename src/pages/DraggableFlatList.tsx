import React, { useState, useCallback } from "react";
import { TouchableOpacity, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import * as FF from "../components";

const NUM_ITEMS = 10;

function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

const exampleData: Item[] = [...Array(20)].map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    key: `item-${backgroundColor}`,
    label: String(index),
    backgroundColor,
  };
});

type Item = {
  key: string;
  label: string;
  backgroundColor: string;
};

export default () => {
  const navigation = useNavigation();
  const [data, setData] = useState(exampleData);

  const renderItem = useCallback(
    ({ item, index, drag, isActive }: RenderItemParams<Item>) => {
      return (
        <TouchableOpacity
          style={{
            height: 100,
            backgroundColor: isActive ? "red" : item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
          onLongPress={drag}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 32,
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      );
    },
    []
  );

  return (
    <>
      <FF.AppBar
        title="可滑動清單"
        left={<FF.BackButton />}
        right={{}}
        barColor=""
      />
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setData(data)}
      />
    </>
  );
};
