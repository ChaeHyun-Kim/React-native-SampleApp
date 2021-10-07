import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import login from "./screens/login";
import signup1 from "./screens/signup1";
import signup2 from "./screens/signup2";
import signup3 from "./screens/signup3";
import signup4 from "./screens/signup4";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName="login">
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="signup1" component={signup1} />
        <Stack.Screen name="signup2" component={signup2} />
        <Stack.Screen name="signup3" component={signup3} />
        <Stack.Screen name="signup4" component={signup4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}