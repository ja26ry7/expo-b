import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";

import * as FF from "../components";
import { AppContext } from "../AppContext";

export default () => {
  const appCtx = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <FF.AppBar
        title="Home"
        left={
          <TouchableOpacity
            onPress={() =>
              Alert.alert("確認要登出？", null, [
                {
                  text: "取消",
                  onPress: () => {},
                },
                {
                  text: "確認",
                  onPress: () => {
                    appCtx.logout();
                  },
                },
              ])
            }
          >
            <FF.Icon
              name="Ionicons/arrow-undo-outline"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <FF.Icon name="FontAwesome/cog" size={30} color="white" />
          </TouchableOpacity>
        }
      />
      <ImageBackground
        source={require("../assets/starSky.jpeg")}
        style={{ flex: 1 }}
      >
        <View
          style={{
            height: 300,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Swiper showsButtons={true} autoplay={true} autoplayTimeout={50}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
