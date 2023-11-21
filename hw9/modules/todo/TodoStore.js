import {makeAutoObservable} from "mobx";
import TodoService from "./TodoService";

export class TodoStore {
    todoList = null;
    isLoading = false;
    todoService;

    constructor() {
        makeAutoObservable(this);
        this.todoService = new TodoService();
    }

    getTodoObjectFromService = async () => {
        this.setIsLoading(true);
        const model = this.todoService.getAndPrepareDataForStore();
        this.setTodoList(await model);
        this.setIsLoading(false);
    };

    actionGetCompleted = () => {
        return this.todoService.getCompletedTodo(this.todoList);
    };

    actionAdd = (index, text) => {
        this.setIsLoading(true);
        const model = this.todoService.addTodo(this.todoList, index, text);
        this.setTodoList(model);
        this.setIsLoading(false);
    };

    actionCompleteTodo = (index) => {
        this.setIsLoading(true);
        const model = this.todoService.completeTodo(this.todoList, index);
        this.setTodoList(model);
        this.setIsLoading(false)

    };

    actionDelete = (index) => {
        this.setIsLoading(true);
        const model = this.todoService.deleteTodo(this.todoList, index);
        this.setTodoList(model);
        this.setIsLoading(false);
    };

    setTodoList = value => {
        this.todoList = value;
    }

    setIsLoading = value => {
        this.isLoading = value;
    }
}