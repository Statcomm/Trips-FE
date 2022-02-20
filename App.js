import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigator";
import TabNavigator from "./navigations/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <TabNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
