import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import TripList from "../components/Trips/TripList";
import AddTripForm from "../components/Trips/AddTripForm";
import SignUp from "../components/User/SignUp";
import Signin from "../components/User/Signin";
import Profile from "../components/Profile/Profile";
import StackNavigator from "./StackNavigator";
import authstore from "../Store/authStore";
import { observer } from "mobx-react";
import SignOutBtn from "../components/button/SignOutBtn";
import UpdateTripForm from "../components/Trips/UpdateTripForm";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => <SignOutBtn />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          headerShown: false,
          tabBarItemStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="TripList"
        options={{
          headerTitle: "Our Trips",
          tabBarLabel: "TripList",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        component={TripList}
      />
      <Tab.Screen
        name="Add New Trip"
        options={{
          headerTitle: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus" color={color} size={size} />
          ),
          tabBarItemStyle: { display: authstore.user ? "flex" : "none" },
        }}
        component={AddTripForm}
      />

      <Tab.Screen
        name="Sign Up"
        options={{
          headerTitle: "",
          tabBarLabel: authstore.user ? "Profile" : "Sign Up",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        component={authstore.user ? Profile : SignUp}
      />
      <Tab.Screen
        name="Signin"
        component={Signin}
        options={{
          headerTitle: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarIconStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
};
export default observer(TabNavigator);
const styles = StyleSheet.create({});
