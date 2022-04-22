import React, { useState } from "react";
import {
  TouchableOpacity,
  ScrollView,
  View,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Image from "react-native-image-progress";
import * as Progress from "react-native-progress";

import * as FF from "../components";

export default () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = React.useState(
    "http://loremflickr.com/640/480/cat?lock=1"
  );
  const [refreshing, setRefreshing] = React.useState(false);

  let count = 1;

  const onRefresh = React.useCallback(() => {
    count++;
    setRefreshing(true);
    setImageUri(`http://loremflickr.com/640/480/dog?lock=${count}`);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <FF.AppBar
        title="Image Progress"
        left={
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <FF.Icon name="FontAwesome/angle-left" size={30} color="white" />
          </TouchableOpacity>
        }
      />
      <ScrollView
        style={{ padding: 20 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Image
          source={{
            uri: imageUri,
          }}
          indicator={Progress.Bar}
          progress={0.3}
          indicatorProps={{
            size: 80,
            borderWidth: 0,
            color: "lightblue",
            unfilledColor: "rgba(200, 200, 200, 0.2)",
          }}
          style={{
            width: 240,
            height: 180,
          }}
        />

        <View style={{ height: 10 }} />

        <Image
          source={{
            uri: imageUri,
          }}
          indicator={Progress.Pie}
          indicatorProps={{
            size: 80,
            borderWidth: 0,
            color: "blue",
            unfilledColor: "rgba(200, 200, 200, 0.2)",
          }}
          style={{
            width: 240,
            height: 180,
          }}
        />

        <View style={{ height: 10 }} />

        <Image
          source={{
            uri: imageUri,
          }}
          indicator={Progress.Circle}
          indicatorProps={{
            size: 30,
            borderWidth: 0,
          }}
          indeterminate={true}
          style={{
            width: 240,
            height: 160,
          }}
        />

        <View style={{ height: 10 }} />

        <Image
          source={{ uri: imageUri }}
          indicator={Progress.CircleSnail}
          indicatorProps={{
            size: 80,
            borderWidth: 0,
          }}
          duration={1000}
          spinDuration={5000}
          color={["red", "green", "blue"]}
          style={{
            width: 240,
            height: 180,
          }}
        />
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
};
