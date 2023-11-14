import React from "react";
import {TodoStore} from "../modules/todo/TodoStore";
import {DataStore} from "../modules/data/DataStore";

class RootStore {
    todoStore;
    dataStore;

    constructor() {
        this.todoStore = new TodoStore();
        this.dataStore = new DataStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore)