import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

const Info = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <AppText style={styles.text}>
        iOrDo est la version iOS d’ORDO l’application qui vous accompagne le
        long de vos prises de services. Après plusieurs demandes de votre part,
        notre équipe composée de deux jeunes développeurs a relevé le défi et a
        préparé cette modeste première version en espérant, grâce à votre
        interaction et valeur ajoutée, l’améliorer d’avantages.
      </AppText>
      <AppText style={styles.subtext}>
        Vesrion 1.0- iOrDo -By iTwOlVeS - H.B {"<3"}{" "}
      </AppText>
      <Image source={require("../assets/logoo.png")} style={styles.logoo} />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 19,
    marginTop: 10,
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  logoo: {
    height: 50,
    width: 50,
  },
  subtext: {
    marginTop: 20,
    fontSize: 15,
    color: colors.secondary,
    fontWeight: "bold",
  },
});
