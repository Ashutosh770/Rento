import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddInvoiceScreen = ({ navigation }) => {
  const [tenant, setTenant] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = () => {
    // Handle submit logic
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Tenant"
        value={tenant}
        onChangeText={setTenant}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Date"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Status"
        value={status}
        onChangeText={setStatus}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginVertical: 8,
  },
});

export default AddInvoiceScreen;
