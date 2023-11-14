import TodoRepository from "./TodoRepository";
import {TodoModel} from "./TodoModel";
import DataModel from "../data/DataModel";

export default class TodoService {
    todoRepository;

    constructor() {
        this.todoRepository = new TodoRepository();
    }

    getAndPrepareDataForStore = async () => {
        const data = this.todoRepository.getDataFromExternalStorage();
        return (await data).todoList;

        // const data = await this.todoRepository.getDataFromExternalStorage();
        //
        // return data.todoList.slice(0, 15).map(item =>
        //     new TodoModel(item.id, item.title, item.completed)
        // );
    }

    addTodo = (todoList, index, text) => {
        const newTodo = new TodoModel(index, text);
        todoList.push(newTodo);
        return todoList;
    }

    deleteTodo = (todoList, index) => {
        todoList.splice(index, 1)
        return todoList;
    }

    completeTodo = (todoList, index) => {
        todoList[index].isCompleted = !todoList[index].isCompleted;
        return todoList;
    }

    getCompletedTodo = (todoList) => {
        return todoList.filter(item => item.isCompleted);
    }
}