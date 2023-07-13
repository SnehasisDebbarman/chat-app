import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "./Components/ChatScreen";
import ContactScreen from "./Components/ContactScreen";
import SettingScreen from "./Components/SettingScreen";

const Tab = createBottomTabNavigator();

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Chats" component={ChatScreen} />
        <Tab.Screen name="Contacts" component={ContactScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
