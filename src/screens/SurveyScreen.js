import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const QUESTIONS = [
  { id: '1', question: 'Which tenant is creating most noise in the apartment?', options: ['Don Draper', 'Harvey Spectre', 'Walden Schmidt', 'Joe Goldberg'] },
];

const SurveyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={QUESTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.surveyItem}>
            <Text>{item.question}</Text>
            {item.options.map((option, index) => (
              <Button key={index} title={option} onPress={() => {}} />
            ))}
          </View>
        )}
      />
      <Button title="Submit Survey" onPress={() => navigation.navigate('SurveyAnalytics')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  surveyItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SurveyScreen;
