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
// import React, { useState } from "react";
import React, { createContext, useState, useContext, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Picker } from "@react-native-picker/picker";
import { auth, db } from "../../firebase/firebase";
import { async } from "@firebase/util";

export const CContext = createContext();

export const CProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    restoreCount();
  }, []);

  const restoreCount = async () => {
    try {
      const savedCount = await AsyncStorage.getItem("count");
      if (savedCount !== null) {
        setCount(parseInt(savedCount));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveCount = async () => {
    try {
      await AsyncStorage.setItem("count", count.toString());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CContext.Provider value={{ count, setCount, restoreCount, saveCount }}>
      {children}
    </CContext.Provider>
  );
};



export default function GetTutor({ navigation }) {
  const [name, setName] = useState(null);
  const [matricnumber, setMatricnumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [studylevel, setStudylevel] = useState(null);
  const [subjectname, setSubjectname] = useState(null);
  const [timeslot, setTimeslot] = useState(null);


  const { count, setCount, saveCount } = useContext(CContext);


  const GetTutorData = async () => {
    const docRef = await addDoc(collection(db, "Get a tutor Info"), {
      Name: name,
      Matricnumber: matricnumber,
      Email: email,
      Studylevel: studylevel,
      Subjectname: subjectname,
      Timeslot: timeslot,
    });
    console.log("Document written with ID: ", docRef.id);
  };

  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <ScrollView>
      <View style={Styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={Styles.count} >Total Tutors: {count}</Text>
          <Image
            style={Styles.Image}
            source={require("../Images/Logo/Tutor.png")}
          />

          <View style={Styles.Btn}>
            <Button
              color="#774921"
              title="Payment"
              onPress={() => navigation.navigate("Payment")}
            />
          </View>
        </View>

        <Text style={Styles.Textt}>"Time Slot"</Text>
        <Text style={Styles.Text}>
          Slot 1: Monday and Wednesday (5PM to 7PM)
        </Text>
        <Text style={Styles.Text}>
          Slot 2: Saturday and Sunday (9AM to 11AM)
        </Text>


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
            Enter Your Matric Number
          </Text>
          <TextInput
            placeholder="Matric Number"
            onChangeText={(text) => setMatricnumber(text)}
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
            Enter Your Email
          </Text>
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
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
            Enter Your Study Level
          </Text>
          <View style={Styles.Picker}>
            <Picker
              //selectedValue={timeslot}
              onValueChange={(itemValue) => setStudylevel(itemValue)}
              style={Styles.Picker}
            >
              <Picker.Item label="Level 1" value="Level 1" style={Styles.pickerItem} />
              <Picker.Item label="Level 2" value="Level 2" style={Styles.pickerItem} />
              <Picker.Item label="Level 3" value="Level 3" style={Styles.pickerItem} />
              <Picker.Item label="Level 4" value="Level 4" style={Styles.pickerItem} />
              {/* <Picker.Item label="Level 5" value="Level 5" style={Styles.pickerItem} /> */}
            </Picker>
          </View>
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
            Enter Your Subject Name
          </Text>
          <TextInput
            placeholder="Subject Name"
            onChangeText={(text) => setSubjectname(text)}
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
            Enter Your Time Slot here
          </Text>
          <View style={Styles.Picker}>
          <Picker
            onValueChange={(itemValue) => setTimeslot(itemValue)}
            style={Styles.Picker}
          >
            <Picker.Item label="Slot 1: Monday and Wednesday (5PM to 7PM)" value="slot1" />
            <Picker.Item label="Slot 2: Saturday and Sunday (9AM to 11AM)" value="slot2" />
          </Picker>
          </View>
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
            // onPress={() => GetTutorData()}
            onPress={() => {
              GetTutorData();
              handleButtonClick();
              saveCount();
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
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 50,
    borderTopEndRadius: 200,
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
  },
  Image: {
    width: 150,
    height: 150,
    marginTop: 5,
    marginLeft: 100,
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
    backgroundColor: "#774921",
    fontWeight: "bold",
  },
  Btn: {
    width: "20%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 120,
  },
});
