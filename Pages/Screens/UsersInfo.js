import { View, Image, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function UserInfo({ navigation }) {
  return (
    <View style={Styles.container}>
      <Image style={Styles.Image} source={require('../Images/Logo/user.png')} />
      <View style={Styles.Button1}>
        <Button
          color="#774921"
          title="Log In"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <View style={Styles.Button2}>
        <Button
          color="#774921"
          title="Sign In"
          onPress={() => navigation.navigate("Registration")}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3BC9A',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  Image: {
    width: 300,
    height: 300,
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
  },
  Button1: {
    width: 230,
    height: 40,
    paddingTop: 5,
    marginTop: 30,
    fontWeight: 'bold'
  },
  Button2: {
    width: 230,
    height: 40,
    marginTop: 5,
    fontWeight: 'bold'
  },

})
