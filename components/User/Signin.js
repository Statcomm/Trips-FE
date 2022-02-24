import React, { useState } from "react";
import { Button, Input, Spinner, useToast } from "native-base";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import authstore from "../../Store/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleUsername = (event) => {
    setUser({ ...user, username: event });
  };
  const handlePassword = (event) => {
    setUser({ ...user, password: event });
  };
  const toast = useToast();

  const handleSign = () => {
    authstore.signIn(user, navigation, toast);
    setUser({ username: "", password: "" });
  };
  if (authstore.loading) {
    <View style={styles.center}>
      <Spinner accessibilityLabel="Loading " />
    </View>;
  }
  return (
    <View>
      <ScrollView>
        <View style={styles.TitleCont}>
          <Text style={styles.signupTitle}>Sign In</Text>
          <Text style={styles.subtitle}>I already have an Account</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>
            <Icon name="user" /> Username:
          </Text>
          <Input
            value={user.username}
            h={10}
            borderColor={"black"}
            onChangeText={handleUsername}
          />

          <Text style={styles.label}>
            <Icon name="key" /> Password:
          </Text>
          <Input
            type="password"
            h={10}
            borderColor={"black"}
            onChangeText={handlePassword}
            value={user.password}
          />
        </View>
        <Button style={styles.signBtn} onPress={handleSign}>
          <Text style={styles.signintxt}> Sign In </Text>
        </Button>
      </ScrollView>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signupTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  TitleCont: {
    display: "flex",
    alignItems: "center",
    margin: 20,
  },
  subtitle: {
    margin: 10,
  },
  form: {
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
  signBtn: {
    alignSelf: "center",
    margin: 20,
    backgroundColor: "#8E9A69",
    color: "white",
    borderRadius: 20,
    width: "60%",
    height: 40,
    marginTop: 20,
    textAlign: "center",
    fontSize: 25,
    paddingTop: 5,
  },
  signintxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
