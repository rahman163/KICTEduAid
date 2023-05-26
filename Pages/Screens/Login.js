import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("null");
  const [password, setPassword] = useState("null");

  const login = () => {
    signInWithEmailAndPassword(
      auth, email, password
      
      )
      .then((userCredential) => {
        // alert("User login Suessfully");
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2170/2170153.png",
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
      <TouchableOpacity onPress={() => navigation.navigate("ResetPass")}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} 
      onPress={() => login()}
      >
        <Text style={styles.loginText}>LOG IN</Text>
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
    marginBottom: 50,
    width: 150,
    height: 150,
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
    color: "white",
  },

  Button: {
    width: 200,
    height: 70,
    paddingTop: 20,
    marginTop: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  forgot_button: {
    height: 30,
    marginTop: 20,
    marginBottom: 20,
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
    color: "#FFFFFF",
  },
});
