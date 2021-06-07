import React, { useContext, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import AppBar from "../components/AppBar";
import Icon from "../components/Icon";
import { AppContext } from "../AppContext";
import Swiper from "react-native-swiper";

export default () => {
  const appCtx = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <AppBar
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
            <Icon name="Ionicons/arrow-undo-outline" size={30} color="white" />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <Icon name="FontAwesome/cog" size={30} color="white" />
          </TouchableOpacity>
        }
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Swiper
          style={styles.wrapper}
          // showsButtons={true}
          autoplay={true}
          autoplayTimeout={5}
        >
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
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
