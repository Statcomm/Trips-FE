import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import TripList from "../components/Trips/TripList";
import Signin from "../components/User/Signin";
import SignUp from "../components/User/SignUp";
import DetailsTrip from "../components/Trips/DetailsTrip";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="TripList">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="DetailsTrip"
        options={{ headerShown: false }}
        component={DetailsTrip}
      />
      <Stack.Screen name="TripList" component={TripList} />
      <Stack.Screen
        name="Signin"
        options={{ headerTitle: "Sign In" }}
        component={Signin}
      />
      <Stack.Screen
        name="SignUp"
        options={{ headerTitle: "Sign Up" }}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
