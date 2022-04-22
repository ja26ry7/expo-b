import React, { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import TouchID from "react-native-touch-id";
import { Avatar } from "react-native-elements";

import { AppContext } from "../AppContext";
import * as FF from "../components";

export default () => {
  const appCtx = useContext(AppContext);
  const navigation = useNavigation();

  const [showToolTip, setShowTooltip] = useState(true);
  const [_account, setAccount] = React.useState("");
  const [_password, setPassword] = React.useState("");
  const [biometryType, setBiometryType] = React.useState("生物辨識");

  const optionalConfigObject = {
    title: "Authentication Required", // Android
    imageColor: "#e00606", // Android
    imageErrorColor: "#ff0000", // Android
    sensorDescription: "Touch sensor", // Android
    sensorErrorDescription: "Failed", // Android
    cancelText: "Cancel", // Android
    color: "#e00606", // Android,
    fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false,
  };

  const pressHandler = () => {
    TouchID.isSupported(optionalConfigObject)
      .then((type) => {
        if (type === "FaceID") {
          console.log("FaceID is supported.");
          setBiometryType("Face ID");
          authenticate();
        } else {
          console.log("TouchID is supported.");
          setBiometryType("Touch ID");
          authenticate();
        }
      })
      .catch((error) => {
        console.log(error);
        alert("無生物辨識功能！");
      });
  };

  const authenticate = () => {
    TouchID.authenticate(`登入帳號：Joy`)
      .then(() => {
        appCtx.setLoading(true);
        appCtx.login("Joy", "aaa111");
        setTimeout(() => appCtx.setLoading(false), 2000);
      })
      .catch(() => {
        console.log("Authenticate cancel!");
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FF.AppBar title="登入" barColor="#6F00D2" />

      <View style={{ flex: 1 }} />
      <Formik
        initialValues={{ account: "Joy", password: "aaa111" }}
        onSubmit={(values) => {
          appCtx.login(values.account, values.password);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <Avatar
              size={100}
              rounded
              icon={{ name: "user", type: "font-awesome" }}
              containerStyle={{ alignSelf: "center", marginBottom: 30 }}
              source={{
                uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
            />

            <TextInput
              style={{ marginHorizontal: 20, backgroundColor: "white" }}
              label="帳號"
              placeholder="請輸入帳號"
              onBlur={handleBlur("account")}
              value={values.account}
              onChangeText={handleChange("account")}
            />

            <TextInput
              style={{ marginHorizontal: 20, backgroundColor: "white" }}
              label="密碼"
              placeholder="請輸入密碼"
              onBlur={handleBlur("password")}
              value={values.password}
              onChangeText={handleChange("password")}
              secureTextEntry
            />

            <View style={{ flex: 1 }} />

            <FF.Button title="登入" onPress={handleSubmit} bgColor="#6F00D2" />
            <FF.Button
              title={biometryType}
              onPress={pressHandler}
              bgColor="#6F00D2"
            />
            <Text style={{ alignSelf: "center", marginVertical: 20 }}>
              {appCtx.appVersion}
            </Text>
          </>
        )}
      </Formik>
      {showToolTip && (
        <FF.Tooltip
          layout={{ x: 300, y: 460, width: 100, height: 100 }}
          onPress={() => {
            // appCtx.saveString("@signInTip", "false");
            setShowTooltip(false);
          }}
        />
      )}
    </View>
  );
};
