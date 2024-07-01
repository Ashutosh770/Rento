import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
//import { styles } from './styles'; // Assuming your styles are in a separate file

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[error, setError] = useState('');


  const handleLogin = () => {
    if ((username === 'Rento' || username === 'ethan.hunt') &&
        (password === 'Rento2025' || password === 'entity!2025')) {
      setError('');
      navigation.navigate('Main');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rento</Text>
      <TextInput
        style={styles.input}
//        <Icon
//        name: 'user',
//        />
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={{width: "90%", height: 100, marginTop: 10 }}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button style={{ width: 150, height: 50 }} title="Login" onPress={handleLogin} color="red" />
      </View>
    </View>
  );};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff', // Background color of the container
    },
    logoText: {
      fontSize: 100,

      fontWeight: 'bold',
      marginBottom: 100, // Space between logo and username field
      color: '#666', // Text color for logo text
    },title: {
      fontSize: 100,
      fontFamily: 'Shrikhand-Regular',
      fontWeight: 'bold',
      marginBottom: 100, // Space between logo and username field
      color: '#666', // Text color for logo text
    },
    label: {
      marginBottom: 8,
      color: '#333', // Text color for labels
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 16,
      padding: 8,
      borderRadius: 4,
      color: '#333', // Text color for input fields
      width: '100%', // Input field takes full width
    },
    error: {
      color: 'red',
      marginBottom: 16,
    },

  });

export default LoginScreen;
