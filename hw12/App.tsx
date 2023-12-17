import React, {useEffect} from 'react';
import Hw from './tasks/Hw';
import {View, Text, Button, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DeepLinking} from './navigation/DeepLinking';
import Navigation from './navigation/Navigation';
import {ThemeProviders} from './modules/theme/ThemeProvider';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Main Page</Text>
      <Button onPress={() => navigation.navigate('Hw')} title="Hw" />
    </View>
  );
}

function App() {
  useEffect(() => {
    Linking.getInitialURL().then(async (deepLinkInitialURL: any) => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);
  return (
    <ThemeProviders>
      <NavigationContainer
        linking={DeepLinking.linking}
        ref={Navigation.navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Hw'} component={Hw} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProviders>
  );
}

export default App;
