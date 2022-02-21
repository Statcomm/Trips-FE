import React, { useState } from "react";
import { Button, Input, Spinner, useToast } from "native-base";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import authstore from "../../Store/authStore";
import { useNavigation } from "@react-navigation/native";

const SignUp = ({ navigation }) => {
  const [profile, setProfile] = useState();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    image: "",
    description: "",
  });
  const handleUsername = (event) => {
    setUser({ ...user, username: event });
  };
  const handlePassword = (event) => {
    setUser({ ...user, password: event });
  };
  const handleEmail = (event) => {
    setUser({ ...user, email: event });
  };
  const handleImage = (event) => {
    setUser({ ...user, image: event });
  };
  const handleDescrip = (event) => {
    setUser({ ...user, description: event });
  };

  const handleSign = () => {
    authstore.signUp(user, profile, navigation, toast);
  };

  const toast = useToast();
  if (authstore.loading) {
    <Spinner />;
  }

  // const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.TitleCont}>
        <Text style={styles.signupTitle}>Sign Up</Text>
        <Text style={styles.subtitle}>
          I already have an{" "}
          <Text
            style={styles.account}
            onPress={() => navigation.navigate("Signin")}
          >
            Account{" "}
          </Text>
        </Text>
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

        <Text style={styles.label}>
          <Icon name="envelope" /> Email:
        </Text>
        <Input h={10} borderColor={"black"} onChangeText={handleEmail} />

        <Text style={styles.label}>
          <Icon name="image" /> Profile Image:
        </Text>
        <Input h={10} borderColor={"black"} onChangeText={handleImage} />

        <Text style={styles.label}>
          <Icon name="file-text" /> Description:
        </Text>
        <Input h={120} borderColor={"black"} onChangeText={handleDescrip} />
      </View>
      <Button style={styles.signBtn} onPress={handleSign}>
        Sign Up
      </Button>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  signupTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  account: {
    color: "#085E7D",
    fontWeight: "bold",
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
