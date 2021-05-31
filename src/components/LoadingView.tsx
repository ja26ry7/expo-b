import React from "react";
import { View, Modal, ActivityIndicator, StyleSheet } from "react-native";

// export interface LoadingViewProps {
//     visible: boolean;
// }

export const LoadingView = (visible: boolean) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <ActivityIndicator color="#E800E8" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 30,
    borderRadius: 15,
  },
});
