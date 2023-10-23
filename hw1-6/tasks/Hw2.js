import React, {useState} from 'react'
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';

export default function Hw2({ navigation }) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const handlePress = () => {
        setText('');
        setName(text);
    }
    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            padding: 16,
        }}>
            <Text style={{ marginVertical: 5 }}>
                {name ? `Hi ${name}!` : 'What is your name?'}
            </Text>
            <Text style={{ marginVertical: 5 }}>
                {text}
            </Text>
            <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={t => setText(t)}
            />
            <Button
                title='Button'
                onPress={handlePress}
            />
        </View>
    );
};