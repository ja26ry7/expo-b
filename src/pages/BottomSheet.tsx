import React, { useCallback, useMemo, useRef } from "react";
import { TouchableOpacity, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as FF from "../components";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <FF.AppBar
        title="ActionSheet"
        left={<FF.BackButton />}
        right={{}}
        barColor=""
      />
      <ScrollView style={{ padding: 14 }}>
        <FF.Button
          title="BottomSheet"
          bgColor="darkblue"
          onPress={handlePresentModalPress}
        />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </ScrollView>
    </BottomSheetModalProvider>
  );
};
