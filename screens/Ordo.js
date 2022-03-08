import React from "react";
import { Image, StyleSheet, FlatList, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";

const Ordo = ({ route, navigation }) => {
  const ref = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={50}
          color="white"
          onPress={() => navigation.navigate("Pato")}
        />
        <AppText style={styles.headerTitle}>{ref.name}</AppText>
        <MaterialIcons
          name="add-comment"
          size={50}
          color="white"
          onPress={() => navigation.navigate("emailUs")}
        />
      </View>
      <View style={styles.ordo}>
        <AppText style={styles.ordoTitle}>Ordonnance:</AppText>

        <FlatList
          data={ref.ordo}
          showsVerticalScrollIndicator={false}
          keyExtractor={(d) => d}
          renderItem={({ item }) => (
            <AppText style={styles.ordoItem}>{item}</AppText>
          )}
        />
      </View>
    </View>
  );
};

export default Ordo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,

    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "bold",
  },

  ordo: {
    flex: 1,
    alignItems: "center",
    paddingTop: 5,
    paddingHorizontal: 20,

    marginTop: -30,
    borderTopLeftRadius: 35,
    borderTopEndRadius: 35,
    backgroundColor: colors.light,
  },

  ordoTitle: {
    color: colors.black,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    padding: 10,
  },
  ordoItem: {
    color: colors.black,
    marginTop: 5,
  },
});
