import React from "react";
import { Image, StyleSheet, FlatList, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

const Ordo = ({ route }) => {
  const ref = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require("../assets/Ordo.png")} />
      </View>
      <View style={styles.ordo}>
        <View style={styles.ordoText}>
          <AppText style={styles.ordoTitle}>Ordonnance: {ref.name}</AppText>

          <FlatList
            data={ref.ordo}
            keyExtractor={(d) => d}
            renderItem={({ item }) => (
              <AppText style={styles.ordoItem}>{item}</AppText>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Ordo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {},
  img: {
    height: 300,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  ordo: {
    flex: 1,
    marginTop: -30,
    alignItems: "center",
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  ordoText: {
    width: "100%",
    height: "90%",
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  ordoTitle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    padding: 10,
  },
  ordoItem: {
    color: colors.white,
    marginTop: 5,
  },
});
