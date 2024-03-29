import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import * as FF from "../components";

const ListItem = ({ name, gender, location }) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert("Alert", name.first)}
      style={{
        backgroundColor: "lightgray",
        marginHorizontal: 20,
        marginTop: 10,
        padding: 20,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 18 }}>{`${name.first} ${name.last}`}</Text>
      <Text style={{ color: "blue" }}>{gender}</Text>
      <Text>{location.country}</Text>
    </TouchableOpacity>
  );
};

export default () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      console.log("list res", JSON.stringify(response));
      setUsers(response.data.results);
    })();
  }, []);

  return (
    <>
      <FF.AppBar title="List Page" left={<FF.BackButton />} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={users}
        renderItem={({ item }) => <ListItem {...item} />}
      />
    </>
  );
};
