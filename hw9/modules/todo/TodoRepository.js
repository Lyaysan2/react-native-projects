import AxiosClient from "../../axios/AxiosClient";
import {TodoModel} from "./TodoModel";

export default class TodoRepository {
    apiClient = null;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    getDataFromExternalStorage = async () => {
        try {
            const response = await this.apiClient
                .get({ url: '/todos?_start=0&_limit=10' });
            // console.log(response);
            const newResponse = response.data.map(todoResponse => {
                return new TodoModel(
                    todoResponse.id,
                    todoResponse.title,
                    todoResponse.completed
                )
            });
            return {
                todoList: newResponse
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };
}