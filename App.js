import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pato from "./screens/Pato";
import Info from "./screens/Info";
import style from "./config/styles";
import { Fontisto } from "@expo/vector-icons";
import EmailUsButton from "./navigation/EmailUsButton";
import EmailUs from "./screens/EmailUs";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: style.colors.primary,
          inactiveTintColor: style.colors.black,
          activeBackgroundColor: style.colors.white,
          inactiveBackgroundColor: style.colors.white,
        }}
      >
        <Tab.Screen
          name="Pathologies"
          component={AppNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Fontisto name="pills" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="emailUs"
          component={EmailUs}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <EmailUsButton onPress={() => navigation.navigate("emailUs")} />
            ),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
          })}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <Fontisto name="info" size={size} color={color} />
            ),
          }}
          name="About Us"
          component={Info}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
