import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

export default function Feedback({ navigation }) {
  const [name, setName] = useState(null);
  const [giverateoninterface, setgiverateoninterface] = useState(null);
  const [giverateoncontent, setgiverateoncontent] = useState(null);
  const [comments, setcomments] = useState(null);
  const [overall, setoverall] = useState(null);


  const Feedback = async () => {
    const docRef = await addDoc(collection(db, "Feedback"), {
      Name: name,
      Giverateoninterface: giverateoninterface,
      Giverateoncontent: giverateoncontent,
      Comments: comments,
      Overall: overall,
    });
    console.log("Document written with ID: ", docRef.id);
  };
  return (
    <ScrollView>
      <View style={Styles.container}>

        <View style={{ flexDirection: "row", alignItems: "center", paddingEnd: 50, marginRight: 450, marginBottom: 30 }}>
          <Image
            style={Styles.Image}
            source={require("../Images/Logo/Tutor.png")}
          />
        </View>

        <View style={Styles.container1}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 17,
              marginTop: 20,
              marginVertical: 5,
              color: "white",
            }}
          >
            Enter Your Name
          </Text>
          <TextInput
            placeholder="Name"
            onChangeText={(text) => setName(text)}
            style={{
              marginTop: 2,
              marginVertical: 10,
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderColor: "white",
              color: "white",
              padding: 10,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 17,
              marginTop: 15,
              marginVertical: 5,
              color: "white",
            }}
          >
            Enter Your Rating on Interface
          </Text>
          <View style={Styles.Picker}>
            <Picker
              //selectedValue={timeslot}
              onValueChange={(itemValue) => setgiverateoninterface(itemValue)}
              style={Styles.Picker}
            >
              <Picker.Item label=" 5 Stars " value=" 5 Stars " style={Styles.pickerItem} />
              <Picker.Item label=" 4 Stars " value=" 4 Stars " style={Styles.pickerItem} />
              <Picker.Item label=" 3 Stars " value=" 3 Stars " style={Styles.pickerItem} />
              <Picker.Item label=" 2 Stars " value=" 2 Stars " style={Styles.pickerItem} />
              <Picker.Item label=" 1 Stars " value=" 1 Stars " style={Styles.pickerItem} />
            </Picker>
          </View>
          {/* <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 17,
              marginTop: 15,
              marginVertical: 5,
              color: "white",
            }}
          >
            Enter Your Rating on Interface
          </Text>
          <Picker
            onValueChange={(itemValue) => setgiverateoninterface(itemValue)}
          >
            <Picker.Item label="Slot 1: Monday and Wednesday (5PM to 7PM)" value="slot1" />
            <Picker.Item label="Slot 2: Saturday and Sunday (9AM to 11AM)" value="slot2" />
          </Picker> */}
          {/* <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 17,
              marginTop: 15,
              marginVertical: 5,
              color: "white",
            }}
          >
            Enter Your Rating on Content
          </Text>
          <Picker
            onValueChange={(itemValue) => setgiverateoncontent(itemValue)}
          >
            <Picker.Item label="Slot 1: Monday and Wednesday (5PM to 7PM)" value="slot1" />
            <Picker.Item label="Slot 2: Saturday and Sunday (9AM to 11AM)" value="slot2" />
          </Picker> */}
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 17,
              marginTop: 15,
              marginVertical: 5,
              color: "white",
            }}
          >
            Enter Your Rating on Content
          </Text>
          <View style={Styles.Picker}>
            <Picker
              //selectedValue={timeslot}
              onValueChange={(itemValue) => setgiverateoncontent(itemValue)}
              style={Styles.Picker}
            >
              <Picker.Item label=" 5 Stars " value="5 Stars" style={Styles.pickerItem} />
              <Picker.Item label=" 4 Stars " value="5 Stars" style={Styles.pickerItem} />
              <Picker.Item label=" 3 Stars " value="5 Stars" style={Styles.pickerItem} />
              <Picker.Item label=" 2 Stars " value="5 Stars" style={Styles.pickerItem} />
              <Picker.Item label=" 1 Stars " value="5 Stars" style={Styles.pickerItem} />
            </Picker>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 17,
              marginTop: 20,
              marginVertical: 5,
              color: "white",
            }}
          >
            Enter Your Comments
          </Text>
          <TextInput
            placeholder="Comments"
            onChangeText={(text) => setcomments(text)}
            multiline={true}
            style={{
              // marginTop: 2,
              // marginVertical: 10,
              // height: 100,
              // textAlign: "justify",
              // margin: 12,
              // borderWidth: 1,
              // borderColor: "white",
              // color: "white",
              // padding: 10,
              marginTop: 2,
              marginVertical: 10,
              height: 100,
              textAlign: "left",
              margin: 12,
              borderWidth: 1,
              borderColor: "white",
              color: "white",
              padding: 10,
              textAlignVertical: "top",
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 17,
              marginTop: 15,
              marginVertical: 5,
              color: "white",
            }}
          >
            Enter Your For Overall Project
          </Text>
          <View style={Styles.Picker}>
            <Picker
              //selectedValue={timeslot}
              onValueChange={(itemValue) => setoverall(itemValue)}
              style={Styles.Picker}
            >
              <Picker.Item label=" 5 Stars " value="5 Stars" style={Styles.pickerItem} />
              <Picker.Item label=" 4 Stars " value="5 Stars" style={Styles.pickerItem} />
              <Picker.Item label=" 3 Stars " value="5 Stars" style={Styles.pickerItem} />
              <Picker.Item label=" 2 Stars " value="5 Stars" style={Styles.pickerItem} />
              <Picker.Item label=" 1 Stars " value="5 Stars" style={Styles.pickerItem} />
            </Picker>
          </View>
          {/* <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 17,
              marginTop: 15,
              marginVertical: 5,
              color: "white",
            }}
          >
            Enter Your For Overall Project
          </Text>
          <Picker
            onValueChange={(itemValue) => setoverall(itemValue)}
          >
            <Picker.Item label="Slot 1: Monday and Wednesday (5PM to 7PM)" value="slot1" />
            <Picker.Item label="Slot 2: Saturday and Sunday (9AM to 11AM)" value="slot2" />
          </Picker> */}
          <TouchableOpacity
            style={{
              backgroundColor: "#c0e6fc",
              marginTop: 50,
              height: 40,
              margin: 20,
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
            onPress={() => {
              Feedback();
            }}
          >
            <Text>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3BC9A",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10",
    width: "100%",
    height: "100%",
  },
  Picker: {
    paddingHorizontal: 56,
    paddingVertical: 10,
    borderColor: "white",
    padding: 10,

  },
  pickerItem: {
    fontSize: 30,
  },
  picker: {
    height: 20,
  },
  container1: {
    flex: 1,
    backgroundColor: "#774921",
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomStartRadius: 50,
    marginTop: "100",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: "100%",
    marginBottom: 20,
    color: "white",
  },
  count: {
    fontSize: 30,
    fontWeight: "Bold",
    marginTop: 50,
    paddingLeft: 300,
  },
  Image: {
    width: 150,
    height: 150,
    marginLeft: 500,
    marginTop: 5,
  },
  Text: {
    fontSize: 15,
    marginTop: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    fontWeight: "Bold",
    textAlign: "center",
    color: "black",
  },
  Textt: {
    fontSize: 25,
    marginTop: 7,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    fontWeight: "Bold",
    textAlign: "center",
    color: "black",
  },
  Text1: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20,
    fontWeight: "Bold",
    textAlign: "center",
    color: "white",
  },
  Text2: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
    fontWeight: "Bold",
    textAlign: "center",
    color: "red",
  },
  Text3: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
    fontWeight: "Bold",
    color: "white",
  },
  SubmitText: {
    width: "10%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#208ddf",
    fontWeight: "bold",
  },
});

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Feedback = () => {
//   return (
//     <View>
//       <Text>Feedback</Text>
//     </View>
//   )
// }

// export default Feedback

// const styles = StyleSheet.create({})