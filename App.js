// const App = () => {
//     const [pressedCount, setPressedCount] = useState(0);
//     const [isDisabled, setDisabled] = useState(false)
//     const handlePress = () => {
//         setPressedCount(pressedCount+1);
//         if (pressedCount > 2){
//             setDisabled(true);
//         }
//     };
//     const resetPress = () => {
//         setPressedCount(0);
//         setDisabled(false);
//     }
//     return (
//         <View style={{ flex: 1, justifyContent: 'center' }}>
//             <Text style={{ margin: 16 }}>
//                 {pressedCount > 0
//                     ? `The button was pressed ${pressedCount} times!`
//                     : 'The button isn\'t pressed yet'
//                 }
//             </Text>
//             <Button
//                 title='Press me'
//                 onPress={handlePress}
//                 disabled={isDisabled}
//             />
//             <Button
//                 title='Reset'
//                 onPress={resetPress}
//             />
//         </View>
//     );
// }


// const App = () => {
//     const [name, setName] = useState('');
//     const [text, setText] = useState('');
//     const handlePress = () => {
//         setText('');
//         setName(text);
//     }
//     return (
//         <View style={{
//             flex: 1,
//             alignContent: 'center',
//             justifyContent: 'center',
//             padding: 16,
//         }}>
//             <Text style={{ marginVertical: 5 }}>
//                 {name ? `Hi ${name}!` : 'What is your name?'}
//             </Text>
//             <Text style={{ marginVertical: 5 }}>
//                 {text}
//             </Text>
//             <TextInput
//                 style={{ padding: 8, backgroundColor: '#f5f5f5' }}
//                 onChangeText={t => setText(t)}
//             />
//             <Button
//                 title='Button'
//                 onPress={handlePress}
//             />
//         </View>
//     );
// };

// const App = () => (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//         <Box width={50} height={60} color='red'></Box>
//         <Box width={70} height={80} color='green'></Box>
//         <Box width={90} height={100} color='blue'></Box>
//     </View>
// );
//
// export const Box = (props) => (
//     <View style={{ width: props.width, height: props.height, backgroundColor:
//         props.color}} />
// );

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
