import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Student_Materials = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row0}>
          <View style={styles.column}>
            <Text style={styles.text01}>IMPORTENT OF SPECIALISATION SUBJECTS</Text>
            <Text style={styles.textt}>
              The probability of future success in the field you graduate from is increased by taking specialisation classes. For example, if you choose to take specialisation courses, you will learn about two different disciplines and have the opportunity to pursue two different career pathways. You can get the knowledge and credibility to follow your ambitions via specialising in graduate-level study. It provides particular advantages including professional development, increased pay, and industry recognition. The KICT is offering different specilazition courses for BIT and BCS students. Each specialization has its own characteristics and advantages.
            </Text>
          </View>
        </View>
        <View style={styles.together}>
          <View style={styles.column1}>
            <Text style={styles.text2}>Career options for BIT Specializations
            </Text>
            <Text style={styles.textt2}>
              For BIT students, KICT is offering four Specializations. Following is a discussion of the four Specializations names and potential career paths.
            </Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.column}>
              <Image
                style={styles.Image}
                source={require("../Images/Logo/Tutor.png")}
              />
              <Text style={styles.text1}>Digital Media Design
              </Text>
              <Text style={styles.text11}>Career Paths:
              </Text>
              <Text style={styles.text}>
                - Computer games developer<br></br>
                - Animator<br></br>
                - Graphic designer<br></br>
                - Software designer
              </Text>
            </View>
            <View style={styles.column}>
              <Image
                style={styles.Image}
                source={require("../Images/Logo/Tutor.png")}
              />
              <Text style={styles.text1}>Information Assurance and Security
              </Text>
              <Text style={styles.text11}>Career Paths:
              </Text>
              <Text style={styles.text}>
                - Security Director or Manager<br></br>
                - Information Assurance or Security Engineer <br></br>
                - Data Security or Information Security Manager<br></br>
                - IT Security or Cybersecurity Analyst<br></br>
              </Text>
            </View>
            <View style={styles.column}>
              <Image
                style={styles.Image}
                source={require("../Images/Logo/Tutor.png")}
              />
              <Text style={styles.text1}>Enterprise Technology Management
              </Text>
              <Text style={styles.text11}>Career Paths:
              </Text>
              <Text style={styles.text}>
                - Computer Programmer<br></br>
                - Database Administrator<br></br>
                - Computer Network Architect<br></br>
                - Database Administrator <br></br>
              </Text>
            </View>
            <View style={styles.column}>
              <Image
                style={styles.Image}
                source={require("../Images/Logo/Tutor.png")}
              />
              <Text style={styles.text1}>Business Intelligence and Information Science
              </Text>
              <Text style={styles.text11}>Career Paths:
              </Text>
              <Text style={styles.text}>
                - Data Analyst<br></br>
                - Business Specialist<br></br>
                - Business Consultant<br></br>
                - project manager<br></br>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.together1}>
          <View style={styles.column}>
            <Text style={styles.text3}>Career options for BCS Specializations
            </Text>
            <Text style={styles.textt3}>
              For BCS students, KICT is offering three specializations. Following is a discussion of the three specializations names and potential career paths.
            </Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.column}>
              <Image
                style={styles.Image}
                source={require("../Images/Logo/Tutor.png")}
              />
              <Text style={styles.text1}>Software Engineering
              </Text>
              <Text style={styles.text11}>Career Paths:
              </Text>
              <Text style={styles.text}>
                - Software Developer<br></br>
                - Engineering Management<br></br>
                - Software Architect<br></br>
                - Full stack developer
              </Text>
            </View>
            <View style={styles.column}>
              <Image
                style={styles.Image}
                source={require("../Images/Logo/Tutor.png")}
              />
              <Text style={styles.text1}>Data Science and Computational Intelligence
              </Text>
              <Text style={styles.text11}>Career Paths:
              </Text>
              <Text style={styles.text}>
                - Database administrator<br></br>
                - Data scientist <br></br>
                - Database administrator<br></br>
                - Analytics manager<br></br>
              </Text>
            </View>
            <View style={styles.column}>
              <Image
                style={styles.Image}
                source={require("../Images/Logo/Tutor.png")}
              />
              <Text style={styles.text1}> Network and Security
              </Text>
              <Text style={styles.text11}>Career Paths:
              </Text>
              <Text style={styles.text}>
                -  Information Assurance or Security Engineer<br></br>
                -  Data Security or Information Security Manager<br></br>
                -  IT Security or Cybersecurity Analyst<br></br>
              </Text>
            </View>
            <View style={styles.column}>
              <Image
                style={styles.Image}
                source={require("../Images/Logo/Tutor.png")}
              />
              <Text style={styles.text1}> Free or no Specialization
              </Text>
              <Text style={styles.text11}>Career Paths:
              </Text>
              <Text style={styles.text}>
                -  Information Assurance or Security Engineer<br></br>
                -  Data Security or Information Security Manager<br></br>
                -  IT Security or Cybersecurity Analyst<br></br>
              </Text>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
};

export default Student_Materials;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 400,
    backgroundColor: "#E3BC9A",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  Image: {
    //marginTop:100,
    marginBottom: 20,
    width: 70,
    height: 70,
  },
  content: {
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: "#E3BC9A",
  },
  row0: {
    marginTop: 380,
    flexDirection: "row",
    //marginBottom: 20,
  },
  row1: {
    marginTop: 5,
    flexDirection: "row",
    //marginBottom: 20,
  },
  row3: {
    marginTop: 5,
    flexDirection: "row",
    //marginBottom: 20,
  },
  row2: {
    marginTop: 5,
    flexDirection: "row",
    //marginBottom: 20,
  },
  together: {
    margin: 20,
    padding: 20,
    paddingBottom: 30,
    flex: 1,
    backgroundColor: "#774921",
  },
  together1: {
    margin: 20,
    paddingTop: 10,
    paddingBottom: 30,
    flex: 1,
    backgroundColor: "#774921",
  },
  column: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "white",
    padding: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  column1: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "white",
    padding: 30,
    //paddingBottom: -30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 14,
    //textAlign: "justify",
    //marginBottom: 10,
  },
  textt: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "justify",
    //marginBottom: 10,
  },
  text01: {
    fontSize: 30,
    fontWeight: "bold",
    //marginTop: 50,
    marginBottom: 8,
    color: "#774921",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    //marginTop: 50,
    marginBottom: 8,
    color: "#774921",
  },
  text11: {
    fontSize: 16,
    fontWeight: "bold",
    //marginTop: 50,
    marginBottom: 8,
    color: "#774921",
  },
  textt2: {
    fontSize: 13,
    fontWeight: "bold",
    //textAlign: "justify",
    paddingTop: 15,
    paddingBottom: 50,

    //marginBottom: 10,
  },
  textt3: {
    fontSize: 13,
    fontWeight: "bold",
    //textAlign: "justify",
    paddingTop: 15,
    //marginBottom: -30,
  },
  text2: {
    fontSize: 30,
    fontWeight: "bold",
    //marginBottom: 10,
    color: "#774921",
  },
  text3: {
    fontSize: 30,
    fontWeight: "bold",
    //marginBottom: 10,
    color: "#774921",
  },
},);

// import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
// import React from 'react'

// export default function Student_Materials({ navigation }) {
//   return (
//     <View style={Styles.container}>
//       <Image style={Styles.Image} source={require('../Images/Logo/SS.png')} />
//       <View style={Styles.ButtonTogether}>
//         <TouchableOpacity onPress={() => navigation.navigate('Required_Sub')}>
//           <Image style={Styles.Image2}
//             source={require('../Images/Icons/Icons/8.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('S_Sub')}>
//           <Image style={Styles.Image2}
//             source={require('../Images/Icons/Icons/9.png')}
//           />
//         </TouchableOpacity>
//       </View>
//       <ImageBackground source={require('../Images/Logo/s.png')} resizeMode="cover" style={Styles.image}>
//       </ImageBackground>
//     </View>
//   )
// }
// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     //alignItems: 'center',
//   },
//   Image: {
//     width: 100,
//     height: 100,
//     marginTop: 3,
//     marginLeft: 20,
//     marginBottom: -80,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   Image1: {
//     width: 220,
//     height: 70,
//     marginTop: 30,
//   },
//   Image2: {
//     width: 200,
//     height: 80,
//   },
//   ButtonTogether: {
//     marginLeft: 400,
//     flexDirection: 'row',
//     //justifyContent: 'space-between',
//     marginTop: 0,
//     backgroundColor: 'white',
//   },
// })
