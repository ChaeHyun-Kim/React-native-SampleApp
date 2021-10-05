import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import signup1 from "./screens/signup1";
import signup2 from "./screens/signup2";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup1">
        <Stack.Screen name="signup1" component={signup1} />
        <Stack.Screen name="signup2" component={signup2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}