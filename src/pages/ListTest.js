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
import AppBar from "../components/AppBar";
import Icon from "../components/Icon";
import axios from "axios";

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
      console.log("list res", response);
      setUsers(response.data.results);
    })();
  }, []);

  return (
    <>
      <AppBar
        title="List Page"
        left={
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="FontAwesome/angle-left" size={30} color="white" />
          </TouchableOpacity>
        }
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={users}
        renderItem={({ item }) => <ListItem {...item} />}
      />
    </>
  );
};
