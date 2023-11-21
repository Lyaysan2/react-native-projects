import React, {useState} from 'react'
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';


export default function Hw3({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Box width={50} height={60} color='red'></Box>
            <Box width={70} height={80} color='green'></Box>
            <Box width={90} height={100} color='blue'></Box>
        </View>
    )
};

export const Box = (props) => (
    <View style={{ width: props.width, height: props.height, backgroundColor:
        props.color}} />
);
