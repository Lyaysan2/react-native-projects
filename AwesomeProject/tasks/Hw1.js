import React, {useState} from 'react'
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';

export default function Hw1({ navigation }) {
    const [pressedCount, setPressedCount] = useState(0);
    const [isDisabled, setDisabled] = useState(false)
    const handlePress = () => {
        setPressedCount(pressedCount+1);
        if (pressedCount > 2){
            setDisabled(true);
        }
    };
    const resetPress = () => {
        setPressedCount(0);
        setDisabled(false);
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ margin: 16 }}>
                {pressedCount > 0
                    ? `The button was pressed ${pressedCount} times!`
                    : 'The button isn\'t pressed yet'
                }
            </Text>
            <Button
                title='Press me'
                onPress={handlePress}
                disabled={isDisabled}
            />
            <Button
                title='Reset'
                onPress={resetPress}
            />
        </View>
    );
};