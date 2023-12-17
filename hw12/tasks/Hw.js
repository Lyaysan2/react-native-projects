import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, StyleSheet} from 'react-native';
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
import {useTheme} from '../modules/theme/hooks/useTheme';
import {ThemeTypes} from '../modules/theme/ThemeTypes';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  const {t} = useTranslation();
  const {Colors} = useTheme();
  const colors = Colors;
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: colors.accentPrimary,
          tabBarInactiveTintColor: colors.accentSecondary,
          headerStyle: {backgroundColor: colors.overlay},
          headerTitleStyle: {
            color: colors.textPrimary,
            fontFamily: 'Comfortaa-Bold',
          },
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: colors.overlay,
            height: 100,
            paddingBottom: 10,
            paddingTop: 10,
            fontFamily: 'Comfortaa-Bold',
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
          tabBarActiveTintColor: colors.accentPrimary,
          tabBarInactiveTintColor: colors.accentSecondary,
          headerStyle: {backgroundColor: colors.overlay},
          headerTitleStyle: {
            color: colors.textPrimary,
            fontFamily: 'Comfortaa-Bold',
          },
          tabBarLabel: t('main.tabs.news'),
          headerTitle: t('main.tabs.news'),
          headerTitleAlign: 'center',
          tabBarStyle: {
            backgroundColor: colors.overlay,
            height: 100,
            paddingBottom: 10,
            paddingTop: 10,
            fontFamily: 'Comfortaa-Bold',
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
          tabBarActiveTintColor: colors.accentPrimary,
          tabBarInactiveTintColor: colors.accentSecondary,
          headerStyle: {backgroundColor: colors.overlay},
          headerTitleStyle: {
            color: colors.textPrimary,
            fontFamily: 'Comfortaa-Bold',
          },
          tabBarLabel: t('main.tabs.chat'),
          headerTitle: t('main.tabs.chat'),
          headerTitleAlign: 'center',
          tabBarStyle: {
            backgroundColor: colors.overlay,
            height: 100,
            paddingBottom: 10,
            paddingTop: 10,
            fontFamily: 'Comfortaa-Bold',
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
          tabBarActiveTintColor: colors.accentPrimary,
          tabBarInactiveTintColor: colors.accentSecondary,
          headerStyle: {backgroundColor: colors.overlay},
          headerTitleStyle: {
            color: colors.textPrimary,
            fontFamily: 'Comfortaa-Bold',
          },
          tabBarLabel: t('main.tabs.settings'),
          headerTitle: t('main.tabs.settings'),
          headerTitleAlign: 'center',
          tabBarStyle: {
            backgroundColor: colors.overlay,
            height: 100,
            paddingBottom: 10,
            paddingTop: 10,
            fontFamily: 'Comfortaa-Bold',
          },
        }}
      />
    </Tab.Navigator>
  );
};
const HomeStack = observer(() => {
  const {langStore} = useRootStore();
  const {t} = useTranslation();

  const {Colors, selectTheme, changeTheme} = useTheme();
  const colors = Colors;
  const styles = useStyles(Colors);

  useEffect(() => {
    langStore.getLang();
  }, []);

  const handleChangeLang = async () => {
    await langStore.changeLang();
  };

  const handleChangeTheme = async () => {
    changeTheme(
      selectTheme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT,
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={props => ({
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.overlay,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <Button
              onPress={() => handleChangeLang()}
              title={t('main.screens.home.button')}
              color={colors.buttonTertiary}
            />
          ),
          headerTitle: () => (
            <Icon
              type="ionicon"
              name="accessibility-outline"
              color={colors.changeThemeIcon}
              onPress={() => handleChangeTheme()}
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => props.navigation.navigate('About')}
              title={t('main.tabs.home.button')}
              color={colors.buttonTertiary}
            />
          ),
        })}
      />
      <Stack.Screen
        name={'About'}
        component={AboutScreen}
        initialParams={{itemId: 42}}
        options={{
          headerTitle: t('main.tabs.about'),
          headerStyle: {backgroundColor: colors.overlay},
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colors.textPrimary,
            fontFamily: 'Comfortaa-Bold',
          },
          headerTintColor: colors.textPrimary,
        }}
      />
    </Stack.Navigator>
  );
});

export default function App() {
  return <TabNavigation />;
}

const useStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.backgroundPrimary,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonFirst: {
      width: 160,
      height: 50,
      marginTop: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.buttonPrimary,
    },
    buttonSecond: {
      width: 160,
      height: 50,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.buttonSecondary,
    },
    titleText: {
      color: colors.textPrimary,
      fontSize: 20,
    },
    appButtonText: {
      color: colors.textSecondary,
      fontSize: 16,
      textAlign: 'center',
    },
    loader: {
      flex: 1,
      alignContent: 'center',
    },
  });
