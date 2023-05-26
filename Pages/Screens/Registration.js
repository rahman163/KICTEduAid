import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function Registration({ navigation }) {
  const [email, setEmail] = useState("null");
  const [password, setPassword] = useState("null");

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("User created Successfully");
        navigation.replace("Dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/747/747968.png',
        }}
      />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}
        onPress={() => signup()}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3BC9A",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 60,
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "25%",
    height: 40,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  loginText: {
    fontWeight: "bold",
    color: 'white',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  loginBtn: {
    width: "10%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#774921",
    fontWeight: "bold",
    color: '#FFFFFF',
  },
});
