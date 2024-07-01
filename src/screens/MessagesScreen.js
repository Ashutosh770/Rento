import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
//import { style } from './styles';
const MESSAGES = [
  { id: '1', name: 'Joe Goldberg' },
  { id: '2', name: 'Don Draper' },
  { id: '3', name: 'Walden Schmidt' },
  { id: '4', name: 'Harvey Spectre' },
];

const MessagesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Rento</Text>
      <FlatList
       style={styles.title}
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageItem}>
            <Text>{item.name}</Text>
            <Button title="Open Chat" onPress={() => navigation.navigate('Chat', { userId: item.id })} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
   fontSize: 50,
         fontFamily: 'Shrikhand-Regular',
        fontWeight: 'bold',
        marginBottom: 100, // Space between logo and username field
        color: '#666', // Text color for logo text
  },
  container: {
    flex: 1,
    padding: 16,
    color: 'Red',
  },
  messageItem: {
     fontSize: 50,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MessagesScreen;
