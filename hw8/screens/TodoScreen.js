import React, {useEffect, useState} from "react";
import {ActivityIndicator, Button, FlatList, SafeAreaView, StyleSheet, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {observer} from "mobx-react";
import {useRootStore} from "../hooks/useRootStore";
import TodoItem from "../components/TodoItem";


const TodoScreen = observer(({navigation: {navigate}}) => {
    const [text, setText] = useState('');
    const {todoStore} = useRootStore();

    useEffect(() => {
        todoStore.getTodoObjectFromService();
    }, [])

    const addTodo = () => {
        todoStore.actionAdd(todoStore.todoList.length, text);
        setText('');
    };
    const completeTodo = (index) => {
        todoStore.actionCompleteTodo(index);
    };
    const deleteTodo = (index) => {
        todoStore.actionDelete(index);
    };
    const checkTextInput = () => {
        if (text.length != 0) {
            addTodo();
        }
    }
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <TextInput style={styles.textInput} onChangeText={newText => setText(newText)}
                           value={text}></TextInput>
                <Button title="Добавить" onPress={() => checkTextInput(text)}/>
                {todoStore.todoList && !todoStore.isLoading ? (
                    <FlatList
                        data={todoStore.todoList}
                        keyExtractor={(item, index) => keyExtractor(index)}
                        renderItem={({item, index}) => (
                            <TodoItem el={item} ind={index} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
                        )}/>
                ) : (
                    <ActivityIndicator/>)
                }
                <Button title='Завершенные задачи'
                        onPress={() => navigate('Completed')}/>
                <Button title='Data'
                        onPress={() => navigate('DataScreen')}/>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20
    },
    textInput: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'blue',
        padding: 8,
    }
});

export default TodoScreen;
