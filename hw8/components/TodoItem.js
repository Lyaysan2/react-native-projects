import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useRootStore} from "../hooks/useRootStore";


export const TodoItem = observer(props => {

    return (
        <View style={[styles.todoLine, props.el.isCompleted ? styles.taskCompleted : styles.taskNotCompleted]}>
            <TouchableOpacity style={styles.todoLineTouch} onPress={() => props.completeTodo(props.ind)}>
                <Text style={styles.texts}>{props.el.text}</Text>
            </TouchableOpacity>
            <Pressable onPress={() => props.deleteTodo(props.ind)}>
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
