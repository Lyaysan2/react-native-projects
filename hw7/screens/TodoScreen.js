import React, {useEffect, useState} from "react";
import {ActivityIndicator, Button, FlatList, SafeAreaView, StyleSheet, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {observer} from "mobx-react";
import {useRootStore} from "../hooks/useRootStore";
import TodoItem from "../components/TodoLine/TodoItem";
import {useNavigation} from "@react-navigation/native";


const TodoScreen = observer(({navigation: {navigate}}) => {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const {todoStore} = useRootStore();

    useEffect(() => {
        todoStore.getTodoObjectFromService();
    }, [])

    const addTodo = () => {
        todoStore.actionAdd({text, completed: false, index: todoStore.todoEntity.todoList.length});
        setText('');
    };
    const touchTodo = (index) => {
        todoStore.actionChange(index);
    };
    const deleteHandler = (index) => {
        todoStore.actionDelete(index);
    };
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <TextInput style={styles.textInput} onChangeText={newText => setText(newText)}
                           value={text}></TextInput>
                <Button title="Добавить" onPress={() => addTodo()}/>
                {todoStore.todoEntity && !todoStore.isLoading ? (
                    <FlatList
                        data={todoStore.todoEntity.todoList}
                        keyExtractor={(item, index) => keyExtractor(index)}
                        renderItem={({item, index}) => (
                            <TodoItem el={item} ind={index} touchTodo={touchTodo} deleteHandler={deleteHandler}/>
                        )}/>
                ) : (
                    <ActivityIndicator/>)
                }
                <Button title='Завершенные задачи'
                        onPress={() => navigate('Completed', {completedTodos: todoStore.todoEntity.todoList})}/>
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
