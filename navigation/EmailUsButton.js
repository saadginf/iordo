import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";

function EmailUsButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerover}>
      <View style={styles.container}>
        <FontAwesome name="send" color={colors.white} size={30} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 40,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
  containerover: {
    marginTop: 10,
  },
});

export default EmailUsButton;
