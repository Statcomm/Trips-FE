import React, { useState } from "react";
import { Button, Input, Spinner, useToast } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import authstore from "../../Store/authStore";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    image: "",
    bio: "",
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
  // const handleImage = (event) => {
  //   setUser({ ...user, image: event });
  // };
  const handleDescrip = (event) => {
    setUser({ ...user, bio: event });
  };

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Assume "photo" is the name of the form field the server expects
    setUser({ ...user, image: localUri });
  };

  const handleSign = () => {
    authstore.signUp(user, navigation, toast);
  };
  if (authstore.loading) {
    <View style={styles.center}>
      <Spinner accessibilityLabel="Loading" />
    </View>;
  }

  const toast = useToast();

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
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.addBtn}>
          <Text>Pick</Text>
        </TouchableOpacity>

        <Text style={styles.label}>
          <Icon name="file-text" /> Description:
        </Text>
        <Input
          h={120}
          multiline
          borderColor={"black"}
          onChangeText={handleDescrip}
        />
      </View>
      <Button style={styles.signBtn} onPress={handleSign}>
        Sign Up
      </Button>
    </ScrollView>
  );
};

export default SignUp;

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
