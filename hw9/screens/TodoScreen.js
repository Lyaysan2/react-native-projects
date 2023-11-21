import React, {useEffect, useRef, useState} from "react";
import {
    ActivityIndicator,
    Alert,
    Button,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import {StatusBar} from "expo-status-bar";
import {observer} from "mobx-react";
import {useRootStore} from "../hooks/useRootStore";
import TodoItem from "../components/TodoItem";
import {Modalize} from "react-native-modalize";


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

    const deleteAlert = index => {
        return Alert.alert('Удалить', 'Точно удалить?', [
            {
                text: 'Да',
                onPress: () => todoStore.actionDelete(index)
            },
            {
                text: 'Нет',
                onPress: () => console.log('Canceled'),
                style: 'cancel',
            },
        ]);
    };

    const checkTextInput = () => {
        if (text.length != 0) {
            addTodo();
        }
    }
    const keyExtractor = (index) => {
        return index.toString();
    };

    const renderItem = ({item}) => (
            <View>
                <View style={styles.todoLine}>
                    <Text style={styles.texts}>{item.text}</Text>
                </View>
            </View>
        );

    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const getCompletedTodos = () => {
        return todoStore.actionGetCompleted();
    }


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
                            <TodoItem el={item} ind={index} completeTodo={completeTodo} deleteTodo={deleteAlert}/>
                        )}/>
                ) : (
                    <ActivityIndicator/>)
                }
                <Modalize ref={modalizeRef}
                          modalTopOffset={200}
                          statusBarTranslucent={true}
                          disableScrollIfPossible={false}
                          withHandle={false}
                          flatListProps={{
                              data: getCompletedTodos(),
                              renderItem: renderItem,
                              keyExtractor: (item, index) => keyExtractor(index),
                              showsVerticalScrollIndicator: false,
                          }}
                >
                </Modalize>
                <Button title='Завершенные задачи'
                        onPress={onOpen}/>
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

export default TodoScreen;
