import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Icon } from "./Icon";

export interface BackButtonProps {
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
}

export const BackButton = ({ style, iconStyle }: BackButtonProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("main");
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="FontAwesome/angle-left" size={30} color="white" style={{}} />
    </TouchableOpacity>
  );
};
