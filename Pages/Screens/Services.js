import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import React from "react";

export default function Services({ navigation }) {
  return (
      <View style={Styles.container}>
        <View style={Styles.row}>
          <View style={Styles.column}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Get_A_Tutor")}
            >
              <Image
                style={Styles.Image}
                source={require("../Images/Logo/Tutor.png")}
              />
              <Text style={Styles.text}>Get a Tutor</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.column}>
            <TouchableOpacity onPress={() => navigation.navigate("Be_A_Tutor")}>
              <Image
                style={Styles.Image}
                source={require("../Images/Logo/Tutor.png")}
              />
              <Text style={Styles.text}>Be a Tutor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

const Styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "#E3BC9A",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  Image: {
    width: 250,
    height: 250,
  },
  content: {
    marginTop: 50,
    //backgroundColor: "#E3BC9A",
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  column: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    marginHorizontal: 90,
    backgroundColor: "#774921",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 50,
    //backgroundColor: 'white',
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
