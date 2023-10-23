import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import CompletedTodoScreen from "./screens/CompletedTodoScreen";
import TodoScreen from "./screens/TodoScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={'Todo'} component={TodoScreen}/>
              <Stack.Screen name={'Completed'} component={CompletedTodoScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
};
