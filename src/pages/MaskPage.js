import React, { useState } from "react";
import { TouchableOpacity, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";

import * as FF from "../components";

export default () => {
  const navigation = useNavigation();

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      nickname: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.nickname.match(/^[\u4e00-\u9fa5a-zA-Z0-9]{1,15}$/g)) {
        errors.nickname = t("nickname error message");
      }

      return errors;
    },
    onSubmit: async (values) => {
      //   await appCtx.updateNickname(values.nickname);
      alert("已修改");
      navigation.goBack();
    },
  });

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <FF.AppBar
        title="Mask and SVG"
        left={
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <FF.Icon name="FontAwesome/angle-left" size={30} color="white" />
          </TouchableOpacity>
        }
      />
      <View style={{ padding: 20 }}>
        {/* <ItemEditNickname
          nicknameValue={formik.values.nickname}
          onNicknameChangeValue={formik.handleChange('nickname')}
          nicknameError={formik.errors.nickname}
        /> */}
      </View>
    </View>
  );
};
