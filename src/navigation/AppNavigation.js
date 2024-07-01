import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MessagesScreen from '../screens/MessagesScreen';
import InvoiceScreen from '../screens/InvoiceScreen';
import SurveyScreen from '../screens/SurveyScreen';
import ChatScreen from '../screens/ChatScreen';
import AddInvoiceScreen from '../screens/AddInvoiceScreen';
import SurveyAnalyticsScreen from '../screens/SurveyAnalyticsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Invoice" component={InvoiceScreen} />
      <Tab.Screen name="Survey" component={SurveyScreen} />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="AddInvoice" component={AddInvoiceScreen} />
        <Stack.Screen name="SurveyAnalytics" component={SurveyAnalyticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
