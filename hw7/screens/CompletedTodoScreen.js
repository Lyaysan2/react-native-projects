import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {useRootStore} from "../hooks/useRootStore";


const CompletedTodoScreen = observer(({navigation}) => {
    const {todoStore} = useRootStore();

    const [todo, setTodo] = useState(todoStore.actionGetCompleted(todoStore.todoEntity.todoList) || []);

    useEffect(() => {
    }, [todo])

    return (
        <View style={{flex: 1}}>
            <Text style={styles.header}>Завершенные задачи</Text>
            <FlatList
                data={todo}
                renderItem={({item}) => (
                    <View style={styles.todoLine}>
                        <Text style={styles.texts}>{item.text}</Text>
                    </View>
                )}/>
            <View style={{marginBottom: 70}}>
                <Button title="Go back" onPress={() => navigation.goBack()}/>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
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
    texts: {
        flex: 3,
        textAlign: 'center',
        fontSize: 15
    }
});

export default CompletedTodoScreen;