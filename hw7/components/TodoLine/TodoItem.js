import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useRootStore} from "../../hooks/useRootStore";


export const TodoItem = observer(props => {
    const {todoStore} = useRootStore();

    useEffect(() => {
    }, [todoStore.todoEntity.todoList[props.ind].completed])

    return (
        <View style={[styles.todoLine, props.el.completed ? styles.taskCompleted : styles.taskNotCompleted]}>
            <TouchableOpacity style={styles.todoLineTouch} onPress={() => props.touchTodo(props.ind)}>
                <Text style={styles.texts}>{props.el.text}</Text>
            </TouchableOpacity>
            <Pressable onPress={() => props.deleteHandler(props.ind)}>
                <Text style={{color: 'black'}}>X</Text>
            </Pressable>
        </View>
    );
});

const styles = StyleSheet.create({
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
        padding: 8
    },
    texts: {
        flex: 3,
        textAlign: 'center',
        fontSize: 15
    }
});

export default TodoItem;
