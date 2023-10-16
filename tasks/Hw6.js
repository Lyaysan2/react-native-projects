import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Button} from "react-native";
import {Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ChatScreen from "../screens/ChatScreen";
import NewsScreen from "../screens/NewsScreen";
import AboutScreen from "../screens/AboutScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === 'Home') {
                        iconName = 'home-outline';
                    } else if (rn === 'News') {
                        iconName = 'newspaper-outline';
                    } else if (rn === 'Chat') {
                        iconName = 'chatbox-outline';
                    } else if (rn === 'Settings') {
                        iconName = 'cog-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'grey',
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
            <Tab.Screen name="News" component={NewsScreen}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'}
                          component={HomeScreen}
                          options={(props) => ({
                              headerTitle: () =>
                                  <Icon type="ionicon" name="body-outline"/>,
                              headerRight: () => (
                                  <Button
                                      onPress={() => props.navigation.navigate('About')}
                                      title="About"
                                      color="#000"
                                  />
                              )
                          })}
            />
            <Stack.Screen name={'About'} component={AboutScreen} initialParams={{itemId: 42}}/>
        </Stack.Navigator>
    );
}
export default function App() {
    return (
        <TabNavigation/>
    );
}