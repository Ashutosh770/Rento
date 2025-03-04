import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import InvoiceScreen from './src/screens/InvoiceScreen';
import SurveyScreen from './src/screens/SurveyScreen';
import ChatScreen from './src/screens/ChatScreen';
import AddInvoiceScreen from './src/screens/AddInvoiceScreen';
import SurveyAnalyticsScreen from './src/screens/SurveyAnalyticsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name=" " component={MessagesScreen} />
      <Tab.Screen name="Invoice" component={InvoiceScreen} />
      <Tab.Screen name="Survey" component={SurveyScreen} />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="AddInvoice" component={AddInvoiceScreen} />
        <Stack.Screen name="SurveyAnalytics" component={SurveyAnalyticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
