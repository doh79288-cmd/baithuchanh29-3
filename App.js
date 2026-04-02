import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import đầy đủ các màn hình
import Home from "./screens/Home";
import ProductDetail from "./screens/ProductDetail";
import Explore from "./screens/Explore";
import Beverages from "./screens/Beverages";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Beverages" component={Beverages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}