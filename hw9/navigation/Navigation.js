import {NavigationContainer} from "@react-navigation/native";
import TodoScreen from "../screens/TodoScreen";
import CompletedTodoScreen from "../screens/CompletedTodoScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DataScreen} from "../screens/DataScreen";

const Stack = createNativeStackNavigator();
export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Todo'} component={TodoScreen}/>
                <Stack.Screen name={'Completed'} component={CompletedTodoScreen}/>
                <Stack.Screen name={'DataScreen'} component={DataScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}