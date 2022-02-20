import React, { useState } from "react";
import { Button, Input } from "native-base";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import authstore from "../../Store/authStore";

const Signin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleUsername = () => {};
  const handlePassword = () => {};

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
          <Input h={10} borderColor={"black"} onChangeText={handleUsername} />

          <Text style={styles.label}>
            <Icon name="key" /> Password:
          </Text>
          <Input
            type="password"
            h={10}
            borderColor={"black"}
            onChangeText={handlePassword}
          />
        </View>
        <Button style={styles.signBtn} onPress={() => authstore.signIn(user)}>
          Sign In
        </Button>
      </ScrollView>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
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
    width: "80%",
    alignSelf: "center",
    margin: 20,
    backgroundColor: "#8E9A69",
  },
});
