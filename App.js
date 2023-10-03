import React from 'react';
import Hw1 from "./tasks/Hw1";
import Hw2 from "./tasks/Hw2";
import Hw3 from "./tasks/Hw3";
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Main Page</Text>
            <Button onPress={() => navigation.navigate('Hw1')}
                    title="Hw1"/>
            <Button onPress={() => navigation.navigate('Hw2')}
                    title="Hw2"/>
            <Button onPress={() => navigation.navigate('Hw3')}
                    title="Hw3"/>
        </View>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'Hw1'} component={Hw1}/>
                <Stack.Screen name={'Hw2'} component={Hw2}/>
                <Stack.Screen name={'Hw3'} component={Hw3}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
