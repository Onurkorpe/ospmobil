import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductionConfirmationScreen from "../screens/ProductionConfirmationScreen";
import ProductionEndScreen from "../screens/ProductionEndScreen";
import ProductionConsume from "../screens/ProductionConsume";

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductionEnd"
          component={ProductionEndScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductionConfirmation"
          component={ProductionConfirmationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductionConsume"
          component={ProductionConsume}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
