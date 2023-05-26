import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function ResetPass() {
    const [email, setEmail] = useState("null");

    const resetPassword = () => {
        if (email != null) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Password reset email has been sent successfully");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
        else {
            alert("please enter a valid email");
        }
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3256/3256783.png',
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
            <TouchableOpacity style={styles.forgot_button}
                onPress={() => resetPassword()}>
                <Text style={styles.Submit_Btn}>Submit</Text>

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
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
    },

    inputView: {
        backgroundColor: "white",
        borderRadius: 15,
        width: "25%",
        height: 40,
        marginBottom: 20,
        marginTop: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    Submit_Btn: {
        fontWeight: "bold",
        color: 'white',
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        justifyContent: "center",
    },

    forgot_button: {
        width: "10%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#774921",
    },
});
