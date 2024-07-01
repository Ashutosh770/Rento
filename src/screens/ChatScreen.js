import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const MESSAGES = [
  { id: '1', text: 'Hey Ethan!' },
  { id: '2', text: 'Wassup' },
];

const ChatScreen = ({ route }) => {
  const [message, setMessage] = useState('');
  const { userId } = route.params;

  const sendMessage = () => {
    // Logic to send message
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Type a message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messageItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginVertical: 8,
  },
});

export default ChatScreen;
