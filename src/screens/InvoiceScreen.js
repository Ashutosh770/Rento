import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const INVOICES = [
  { id: '1', tenant: 'Joe Goldberg', amount: '$400', date: '22/07/24', status: 'Paid' },
  { id: '2', tenant: 'Don Draper', amount: '$500', date: '22/07/24', status: 'Due' },
];

const InvoiceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={INVOICES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.invoiceItem}>
            <Text>{item.tenant}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.date}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
      <Button title="Add Invoice" onPress={() => navigation.navigate('AddInvoice')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  invoiceItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default InvoiceScreen;
