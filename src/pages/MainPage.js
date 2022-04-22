import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "../components/Icon";
const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: "home",
    component: require("./HomePage").default,
    title: "首頁",
    icon: "FontAwesome/home",
    badge: null,
  },
  {
    name: "ui",
    component: require("./UiPage").default,
    title: "Ui",
    icon: "FontAwesome/star",
    badge: null,
  },
  {
    name: "test",
    component: require("./TestPage").default,
    title: "Test",
    icon: "FontAwesome/apple",
    badge: 3,
  },
  {
    name: "listTest",
    component: require("./ListTest").default,
    title: "列表",
    icon: "FontAwesome/th-list",
    badge: null,
  },
];
export default () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "lightgray",
        keyboardHidesTabBar: true,
        labelStyle: { paddingBottom: 3 },
      }}
    >
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index.toString()}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.title,
            tabBarBadge: item.badge,
            tabBarIcon: ({ color, size }) => (
              <Icon name={item.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
