import React from "react";
import { StyleSheet, Image, View } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { Linking } from "react-native";
const EmailUs = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <AppText style={styles.text}>
        L'équipe de développement travaille toujours sur l'amélioration de
        l’application, notamment l'enrichissement de la base de données des
        ordonnances et la création d'un espace virtuel de partage d'expérience
        entre les nouveaux apprentis. Pour cela, chers Médecins, on compte sur
        vos suggestions et recommandations pour nous aider à réaliser un produit
        complet et agréable
      </AppText>
      <AppButton
        title="Contactez-Nous"
        onPress={() =>
          Linking.openURL("mailto:itwolves1@gmail.com?subject=Suggestions")
        }
        color="secondary"
      />
    </View>
  );
};

export default EmailUs;

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
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
});
