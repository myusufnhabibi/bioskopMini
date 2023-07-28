import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./Screens/Splash";
import SelectCity from "./Screens/SelectCity";
import Home from "./Screens/Home";
import Detail from "./Screens/Detail";
import Malls from "./Screens/Malls";
import MyTicket from "./Screens/MyTicket";
import React from "react";
import { Wrapper } from "./Context/Wrapper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Wrapper>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SelectCity" component={SelectCity} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Malls" component={Malls} />
          <Stack.Screen name="MyTicket" component={MyTicket} />
        </Stack.Navigator>
      </NavigationContainer>
    </Wrapper>
  );
}
