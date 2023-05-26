import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export default function LogOut({ navigation }) {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
  }, []);
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
})
