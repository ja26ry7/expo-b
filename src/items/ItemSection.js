import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "../components/Icon";

const ItemSection = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      title: "基本資料",
      data: [
        {
          label: "個人檔案",
          onpress: () => navigation.navigate("introduction"),
        },
        {
          label: "日期與時間",
          onpress: () => navigation.navigate("dateandtime"),
        },
      ],
    },
    {
      title: "Sheet",
      data: [
        {
          label: "ActionSheet",
          onpress: () => navigation.navigate("actionsheet"),
        },
        {
          label: "BottomSheet",
          onpress: () => navigation.navigate("bottomsheet"),
        },
      ],
    },
    {
      title: "List",
      data: [
        {
          label: "可滑動清單",
          onpress: () => navigation.navigate("draggableflatList"),
        },
        { label: "列表", onpress: () => navigation.navigate("list") },
        { label: "下拉式選單", onpress: () => navigation.navigate("picker") },
      ],
    },
    {
      title: "Message",
      data: [
        {
          label: "FlashMessage",
          onpress: () => navigation.navigate("flash"),
        },
        {
          label: "ToastMessage",
          onpress: () => navigation.navigate("toast"),
        },
      ],
    },
    {
      title: "Progress",
      data: [
        {
          label: "Progress",
          onpress: () => navigation.navigate("progress"),
        },
        {
          label: "ImageProgress",
          onpress: () => navigation.navigate("imgProgress"),
        },
      ],
    },
  ];

  const Item = ({ title, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flex: 1 }} />
      <Icon name="FontAwesome/angle-right" size={22} color="#ADADAD" />
    </TouchableOpacity>
  );

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <>
          <Item title={item.label} onPress={item.onpress} />
        </>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 1,
  },
  header: {
    fontSize: 16,
    padding: 10,
    color: "gray",
    backgroundColor: "whitesmoke",
  },
  title: {
    fontSize: 18,
  },
});

export default ItemSection;
