import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function Dashboard({ navigation }) {
  return (
    <View style={Styles.container}>
        <View style={Styles.row}>
          <View style={Styles.column}>

            <TouchableOpacity
              onPress={() => navigation.navigate("About_Kict")}
            >
              <Image
                style={Styles.Image}
                source={require("../Images/mainicon/1.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.column}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Student_Materials")}
            >
              <Image
                style={Styles.Image}
                source={require("../Images/mainicon/2.png")}
              />

            </TouchableOpacity>
          </View>
          <View style={Styles.column}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Services")}
            >
              <Image
                style={Styles.Image}
                source={require("../Images/mainicon/3.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.row}>
            <View style={Styles.column}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Feedback")}
              >
                <Image
                  style={Styles.Image}
                  source={require("../Images/mainicon/4.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.column}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Contact_info")}
              >
                <Image
                  style={Styles.Image}
                  source={require("../Images/mainicon/5.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  )
}
const Styles = StyleSheet.create({
  ButtonTogether: {
    marginLeft: 300,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginTop: 0,
    //backgroundColor: 'white',
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
    width: 210,
    height: 210,
  },
  content: {
    marginTop: 50,
    //backgroundColor: "#E3BC9A",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    //marginHorizontal: 30,
    //marginBottom: 20,
    //padding: 10,
  },
  column: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    marginHorizontal: 10,
    backgroundColor: "#E3BC9A",
    //padding: 10,
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
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
})