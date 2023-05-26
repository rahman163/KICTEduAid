import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const About_Kict = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../Images/Logo/kict.png")} />
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Image
              style={styles.Image}
              source={require("../Images/Logo/about.png")}
            />
            <Text style={styles.text1}>About KICT</Text>
            <Text style={styles.text}>
              The Kulliyyah of Information and Communication Technology (KICT)
              was established in November 2001. From that moment, KICT has made
              necessary moves to realize its vision, which is to produce
              knowledge workers equipped with ICT skills and knowledge ('Ilm)
              and the Consciousness of God (Taqwa).
            </Text>
          </View>
          <View style={styles.column}>
            <Image
              style={styles.Image}
              source={require("../Images/Logo/Mission.png")}
            />
            <Text style={styles.text1}>Mission</Text>
            <Text style={styles.text}>
              The Kulliyyah has the mission to promote collaboration with other
              universities and industries, both nationally and internationally,
              in teaching, learning, research, and consultancy, to establish a
              center of excellence for each department in KICT, and to advance
              research and development in creating a value-based information
              system.
            </Text>
          </View>
          <View style={styles.column}>
            <Image
              style={styles.Image}
              source={require("../Images/Logo/Department.png")}
            />
            <Text style={styles.text1}>Departments</Text>
            <Text style={styles.text}>
              This Kulliyyah is the combination of the Department of Information
              Systems (DIS), Department of Computer Sciences (DCS), and
              Department of Library and Information Science (DLIS). All
              programmes in the Kulliyyah are designed for integration of
              Islamic knowledge and ICT.
            </Text>
          </View>
          <View style={styles.column}>
            <Image
              style={styles.Image}
              source={require("../Images/Logo/Aspirations.png")}
            />
            <Text style={styles.text1}>Aspirations</Text>
            <Text style={styles.text}>
              KICT also aspires to initiate and develop more rigorous programmes
              in the area of information and communication technology. It places
              a great emphasis on providing excellent programmes and teaching
              resources in order to enhance the quality of learning and
              research. It is expected that students will find a unique set of
              opportunities available to study for both undergraduate and
              postgraduate programmes.
            </Text>
          </View>
        </View>
        {/* <View style={styles.row}>
          <View style={styles.column}>
            <Image
              style={styles.Image}
              source={require("../Images/Logo/Tutor.png")}
            />
            <Text style={styles.text1}>Importent content</Text>
            <Text style={styles.text}>
              This Kulliyyah is the combination of the Department of Information
              Systems (DIS), Department of Computer Sciences (DCS), and
              Department of Library and Information Science (DLIS). All
              programmes in the Kulliyyah are designed for integration of
              Islamic knowledge and ICT.
            </Text>
          </View>
          <View style={styles.column}>
            <Image
              style={styles.Image}
              source={require("../Images/Logo/Tutor.png")}
            />
            <Text style={styles.text1}>Importent content</Text>
            <Text style={styles.text}>
              KICT also aspires to initiate and develop more rigorous programmes
              in the area of information and communication technology. It places
              a great emphasis on providing excellent programmes and teaching
              resources in order to enhance the quality of learning and
              research. It is expected that students will find a unique set of
              opportunities available to study for both undergraduate and
              postgraduate programmes.
            </Text>
          </View>
        </View> */}
      </View>
    </View>
  );
};

export default About_Kict;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3BC9A",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  Image: {
    marginBottom: 10,
    width: 150,
    height: 150,
  },
  logo: {
    marginTop: 80,
    //paddingTop:200,
    borderColor: "red",
    width: "70%",
    height: "40%",
    //paddingBottom: 200,
  },
  content: {
    marginTop: 30,
    backgroundColor: "#E3BC9A",
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  column: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 0,
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
    fontSize: 13,
    textAlign: "justify",
    marginBottom: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const About_Kict = () => {
//   return (
//     <View style={styles.container}>

//       <Text style={styles.Text}>About KICT</Text>
//       <br />
//       <Text style={styles.Text}>The Kulliyyah of Information and Communication Technology (KICT) was established in November 2001. From that moment, KICT has made necessary moves to realize its vision, which is to produce knowledge workers equipped with ICT skills and knowledge ('Ilm) and the Consciousness of God (Taqwa).</Text>
//       <br />
//       <Text style={styles.Text}>This Kulliyyah is the combination of the Department of Information Systems (DIS), Department of Computer Sciences (DCS), and Department of Library and Information Science (DLIS). All programmes in the Kulliyyah are designed for integration of Islamic knowledge and ICT.</Text>
//       <br />
//       <Text style={styles.Text}>The Kulliyyah has the mission to promote collaboration with other universities and industries, both nationally and internationally, in teaching, learning, research, and consultancy, to establish a center of excellence for each department in KICT, and to advance research and development in creating a value-based information system.</Text>
//       <br />
//       <Text style={styles.Text}>KICT also aspires to initiate and develop more rigorous programmes in the area of information and communication technology. It places a great emphasis on providing excellent programmes and teaching resources in order to enhance the quality of learning and research. It is expected that students will find a unique set of opportunities available to study for both undergraduate and postgraduate programmes.</Text>
//     </View>
//   )
// }

// export default About_Kict

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '##8aedf9',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//   },

//   Text: {
//     marginTop: 10,
//     marginLeft: 20,
//     marginRight: 20,
//     fontSize: 20,
//     fontWeight: "bold"

//   }
// })
