import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native';
import {Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen';
import NewsScreen from '../screens/NewsScreen';
import AboutScreen from '../screens/AboutScreen';
import {useTranslation} from 'react-i18next';
import {observer} from 'mobx-react';
import {useRootStore} from '../hooks/UseRootStore';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
          tabBarLabel: t('main.tabs.home.title'),
          headerTitle: t('main.tabs.home.title'),
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
            height: 100,
            paddingBottom: 10,
            paddingTop: 10,
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
          tabBarLabel: t('main.tabs.news'),
          headerTitle: t('main.tabs.news'),
          headerTitleAlign: 'center',
          tabBarStyle: {
            backgroundColor: 'white',
            height: 100,
            paddingBottom: 10,
            paddingTop: 10,
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbox-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
          tabBarLabel: t('main.tabs.chat'),
          headerTitle: t('main.tabs.chat'),
          headerTitleAlign: 'center',
          tabBarStyle: {
            backgroundColor: 'white',
            height: 100,
            paddingBottom: 10,
            paddingTop: 10,
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cog-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
          tabBarLabel: t('main.tabs.settings'),
          headerTitle: t('main.tabs.settings'),
          headerTitleAlign: 'center',
          tabBarStyle: {
            backgroundColor: 'white',
            height: 100,
            paddingBottom: 10,
            paddingTop: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
};
const HomeStack = observer(() => {
  const {langStore} = useRootStore();
  const {t} = useTranslation();
  useEffect(() => {
    langStore.getLang();
  }, []);

  const handleChangeLang = async () => {
    await langStore.changeLang();
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={props => ({
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Button
              onPress={() => handleChangeLang()}
              title={t('main.screens.home.button')}
              color="#000"
            />
          ),
          headerTitle: () => (
            <Icon type="ionicon" name="accessibility-outline" color="blue" />
          ),
          headerRight: () => (
            <Button
              onPress={() => props.navigation.navigate('About')}
              title={t('main.tabs.home.button')}
              color="blue"
            />
          ),
        })}
      />
      <Stack.Screen
        name={'About'}
        component={AboutScreen}
        initialParams={{itemId: 42}}
        options={{headerTitle: t('main.tabs.about')}}
      />
    </Stack.Navigator>
  );
});
export default function App() {
  return <TabNavigation />;
}
