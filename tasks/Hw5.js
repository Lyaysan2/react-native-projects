import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function Hw5({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Todo'} component={Todo}/>
            <Stack.Screen name={'Completed'} component={CompletedTasks}/>
        </Stack.Navigator>
    );
};
function TodoLine({ el, ind, touchHandler, deleteHandler }) {
    return (
        <View style={[styles.todoLine, el.isCompleted ? styles.taskCompleted : styles.taskNotCompleted]}>
            <TouchableOpacity onPress={() => touchHandler(ind)}>
                <Text style={styles.texts}>{el.text}</Text>
            </TouchableOpacity>
            <Button title='X' onPress={() => deleteHandler(ind)}/>
        </View>
    );
}
function Todo({navigation}){
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const addTodo = () => {
        let newTodos = [...todos];
        newTodos.push({text: text, isCompleted: false});
        setTodos(newTodos);
        setText('');
    };
    const getCompletedTodos = () => {
        const newTodos = [...todos]
        return newTodos.filter(item => item.isCompleted)
    };
    const touchHandler = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };
    const deleteHandler = (index) => {;
        const items = [...todos];
        items.splice(index, 1);
        setTodos(items);
    };
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.input}>
                    <TextInput style={styles.textInput} onChangeText={newText => setText(newText)} value={text}></TextInput>
                    <Button title="Добавить" onPress={() => addTodo() }/>
                </View>
                <FlatList
                    data={todos}
                    keyExtractor={(item, index) => keyExtractor(index)}
                    renderItem={({item, index}) => (
                        <TodoLine el={item} ind={index} touchHandler={touchHandler} deleteHandler={deleteHandler}/>
                    )}/>
                <Button title='Завершенные задачи' onPress={() => navigation.navigate('Completed', {completedTodos: getCompletedTodos()})}/>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

function CompletedTasks({navigation, route}) {
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <View style={{flex:1}}>
            <Text style={styles.header}>Завершенные задачи</Text>
            <FlatList
                data={route.params.completedTodos}
                keyExtractor={(item, index) => keyExtractor(index)}
                renderItem={({item}) =>
                    <View style={styles.todoLine}>
                        <Text style={styles.texts}>{item.text}</Text>
                    </View>
                }/>
            <View style={{marginBottom:70}}>
                <Button title="Go back" onPress={() => navigation.goBack()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        backgroundColor: 'green'
    },
    todoLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        padding: 10,
        marginTop: 15,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    taskCompleted: {
        backgroundColor: 'green'
    },
    taskNotCompleted: {
        backgroundColor: 'white'
    },
    todoLineTouch: {
        // padding: 8
    },
    input: {

    },
    textInput: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'blue',
        padding: 8,
    },
    texts: {
        flex: 3,
        // ??
        textAlign: 'center',
        fontSize: 15
    }

});