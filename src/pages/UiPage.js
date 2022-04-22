import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { Provider as PaperProvider } from "react-native-paper";
import { SearchBar } from "react-native-elements";
import { Searchbar } from "react-native-paper";

import * as FF from "../components";
import ItemSection from "../items/ItemSection";

export default () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <PaperProvider>
      <FF.AppBar
        title="Uipage"
        left={
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <FF.Icon name="FontAwesome/angle-left" size={30} color="white" />
          </TouchableOpacity>
        }
      />
      <TabView
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={SceneMap({
          first: () => <UiTab1 />,
          second: () => <UiTab2 />,
        })}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor="#E800E8"
            inactiveColor="#A1A1A1"
            indicatorStyle={{ backgroundColor: "#E800E8", height: 3 }}
            style={{ backgroundColor: "white", color: "black" }}
          />
        )}
      />
    </PaperProvider>
  );
};

const UiTab1 = () => <ItemSection />;

const UiTab2 = () => {
  const [searchText, setSearchText] = React.useState("");
  const [searchText1, setSearchText1] = React.useState("");
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(value) => setSearchText(value)}
        value={searchText}
        lightTheme
      />
      <Searchbar
        placeholder="Search"
        onChangeText={(value) => setSearchText1(value)}
        value={searchText1}
      />
      {/* <SectionHeader title='one' /> */}
      {/* <ListGroup
        header="一般"
        items={[
          {
            key: "introduction",
            label: "個人檔案",
            onPress: () => navigation.navigate("introduction"),
          },
          {
            key: "dateandtime",
            label: "日期與時間",
            onPress: () => navigation.navigate("dateandtime"),
          },
        ]}
      /> */}
      <FF.ACard height={200} text="Happy New Year!" />
      <FF.ACard text="新年快樂！" />
    </ScrollView>
  );
};
