import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import TripList from "../components/Trips/TripList";
import Signin from "../components/User/Signin";
import SignUp from "../components/User/SignUp";
import DetailsTrip from "../components/Trips/DetailsTrip";
import SignOutBtn from "../components/button/SignOutBtn";
import Profile from "../components/Profile/Profile";
import UpdateTripFrom from "../components/Trips/UpdateTripFrom";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerRight: () => <SignOutBtn /> }}>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="DetailsTrip"
        options={({ route }) => ({
          headerTitle: route.params.trip.name,
        })}
        component={DetailsTrip}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="TripList"
        component={TripList}
        options={{ headerTitle: "Our Trips" }}
      />
      <Stack.Screen
        name="UpdateTrip"
        component={UpdateTripFrom}
        options={({ route }) => (
          {
            headerTitle: route.params.tripId.name,
          },
          { headerTitle: "" }
        )}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
