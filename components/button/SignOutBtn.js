import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import authstore from "../../Store/authStore";
import { observer } from "mobx-react";

const SignOutBtn = () => {
  if (authstore.loading) {
    <View style={styles.center}>
      <Spinner />
    </View>;
  }
  return (
    <View>
      {authstore.user && (
        <View style={styles.topbutton}>
          <Icon name="sign-out" size={30} onPress={authstore.signOut} />
        </View>
      )}
    </View>
  );
};

export default observer(SignOutBtn);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topbutton: {
    marginRight: 20,
  },
});
