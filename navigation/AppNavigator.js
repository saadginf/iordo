import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pato from "../screens/Pato";
import Ordo from "../screens/Ordo";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator mode="card" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Pato" component={Pato} />
    <Stack.Screen name="Ordo" component={Ordo} />
  </Stack.Navigator>
);

export default AppNavigator;
