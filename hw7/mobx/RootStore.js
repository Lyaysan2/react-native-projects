import React from "react";
import {TodoStore} from "./todo/TodoStore";

class RootStore {
    todoStore;

    constructor() {
        this.todoStore = new TodoStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore)