import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contact_info = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contact Information</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.email}>Email: KICTEduAid@gmail.com</Text>
        <Text style={styles.hotline}>Hotline (WhatsApp): +60173669630</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3BC9A",
    padding: 20,
  },
  header: {
    backgroundColor: "#774921",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
  },
  email: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hotline: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Contact_info;


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Contact_info = () => {
//   return (
//     <View>
//       <Text>Contact_info</Text>
//     </View>
//   )
// }

// export default Contact_info

// const styles = StyleSheet.create({})