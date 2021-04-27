import React, { useState } from "react";
import { StyleSheet, TextInput, FlatList, View } from "react-native";
import data from "../data/data";
import colors from "../config/colors";
import { Fontisto } from "@expo/vector-icons";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
const Pato = ({ navigation }) => {
  const [temp, settemp] = useState(data);
  const contains = ({ name }, query) => {
    if (name.toLowerCase().includes(query)) {
      return true;
    }
    return false;
  };
  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const dataS = data.filter((item) => {
      return contains(item, formattedQuery);
    });
    settemp(dataS);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.wText}>Salut Docteur !</AppText>
      </View>
      <View style={styles.searchcontainer}>
        <View style={styles.searchContour}>
          <TextInput
            onChangeText={handleSearch}
            placeholder="Recherche"
            placeholderTextColor="rgb(255, 217, 220)"
            style={styles.serchText}
          />
          <Fontisto name="search" size={25} color={colors.primary} />
        </View>
      </View>
      <AppText style={styles.title}>({temp.length}) Pathologies</AppText>

      <FlatList
        data={temp}
        keyExtractor={(d) => d.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            onPress={() => navigation.navigate("Ordo", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
};

export default Pato;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  serchText: {
    fontWeight: "bold",
    fontSize: 25,
    flex: 1,
  },
  searchContour: {
    backgroundColor: "#FFF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  searchcontainer: {
    left: 0,
    right: 0,
    height: 90,
    marginTop: -45,
  },
  wText: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: colors.primary,
    height: "28%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: colors.medium,
    fontWeight: "bold",
  },
});
