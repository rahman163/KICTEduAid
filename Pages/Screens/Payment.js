import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default function Payment({ navigation }) {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateAmount = (input) => {
    // Regular expression to match a valid credit card number
    const regex = /^[0-9]{1,100}$/;
    return regex.test(input);
  };

  const validateCardNumber = (input) => {
    // Regular expression to match a valid credit card number
    const regex = /^[0-9]{12,19}$/;
    return regex.test(input);
  };

  const validateExpiry = (input) => {
    // Regular expression to match a valid expiry date in MM/YY format
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(input);
  };

  const validateCvv = (input) => {
    // Regular expression to match a valid CVV number
    const regex = /^\d{3,4}$/;
    return regex.test(input);
  };

  const handleAmount = (input) => {
    setAmount(input);
    setIsValid(validateAmount(input) && validateCardNumber(input) && validateExpiry(expiry) && validateCvv(cvv));
  };

  const handleCardNumberChange = (input) => {
    setCardNumber(input);
    setIsValid(validateAmount(input) && validateCardNumber(input) && validateExpiry(expiry) && validateCvv(cvv));
  };

  const handleExpiryChange = (input) => {
    setExpiry(input);
    setIsValid(validateAmount(input) && validateCardNumber(cardNumber) && validateExpiry(input) && validateCvv(cvv));
  };

  const handleCvvChange = (input) => {
    setCvv(input);
    setIsValid(validateAmount(input) && validateCardNumber(cardNumber) && validateExpiry(expiry) && validateCvv(input));
  };

  const savePaymentData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'payments'), {
        amount,
        cardNumber,
        expiry,
        cvv,
      });
      console.log('Payment data saved with ID: ', docRef.id);
      setAmount('');
      setCardNumber('');
      setExpiry('');
      setCvv('');
    } catch (error) {
      console.error('Error saving payment data: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View>
        <Text style={styles.bank0}>
            Bank Details
          </Text>
          <Text style={styles.bank}>
            {'Bank Name: Bank Islam\nBank Account Number: 1111 2222 3333 4444'}
          </Text>
          <Text style={styles.Payment}>
            {'Per Slot - 25 RM'}
          </Text>
        </View>
        <View>
          <Text style={styles.label}>Please Input Total Amount Information:</Text>
          <TextInput
            style={styles.input}
            placeholder="RM"
            keyboardType="numeric"
            value={amount}
            onChangeText={handleAmount}
          />
          {!validateAmount(amount) && (
            <Text style={styles.error}>Please enter an Amount</Text>
          )}
          <Text style={styles.label}>Please Input Your Card Information:</Text>
          <TextInput
            style={styles.input}
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={handleCardNumberChange}
          />
          {!validateCardNumber(cardNumber) && (
            <Text style={styles.error}>Please enter a valid card number</Text>
          )}
          <Text style={styles.label}>Expiry:</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/YY"
            keyboardType="numeric"
            value={expiry}
            onChangeText={handleExpiryChange}
          />
          {!validateExpiry(expiry) && (
            <Text style={styles.error}>Please enter a valid expiry date (MM/YY)</Text>
          )}
          <Text style={styles.label}>CVV:</Text>
          <TextInput
            style={styles.input}
            placeholder="123"
            keyboardType="numeric"
            value={cvv}
            onChangeText={handleCvvChange}
          />
          {!validateCvv(cvv) && <Text style={styles.error}>Please enter a valid CVV</Text>}
          <Text style={styles.message}>{isValid ? '' : ''}</Text>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={savePaymentData}
            disabled={!isValid}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    //margin: 50,
    //padding: 50,
    backgroundColor: '#E3BC9A',
    justifyContent: "center",
    alignItems: "center",
  },
  bank: {
    fontWeight: "bold",
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  Payment: {
    fontWeight: "bold",
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  bank0: {
    fontWeight: "bold",
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
  container1: {
    width: '60%',
    margin: 50,
    padding: 50,
    //color: '#774921',
    backgroundColor: '#774921',
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',

  },
  input: {
    borderWidth: 1,
    color: 'white',
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  message: {
    color: 'green',
    marginTop: 10,
  },
  submitButton: {
    width: "40%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#E3BC9A",
    fontWeight: "bold",
  },
  submitButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});