import TodoRepository from "./TodoRepository";
import {TodoModel} from "./TodoModel";

export default class TodoService {
    todoRepository;

    constructor() {
        this.todoRepository = new TodoRepository();
    }

    getAndPrepareDataForStore = async () => {
        const data = this.todoRepository.getDataFromExternalStorage();
        return (await data).todoList;
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