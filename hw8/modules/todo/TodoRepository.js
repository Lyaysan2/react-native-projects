import AxiosClient, {axiosClient} from "../../axios/AxiosClient";
import {TodoModel} from "./TodoModel";
import {limit, start} from "../../axios/axiosParams";

export default class TodoRepository {
    apiClient = null;

    constructor() {
        this.apiClient = new AxiosClient();
    }
    getDataFromExternalStorage = async () => {
        try {
            const response = await this.apiClient
                .get({ url: '/todos' });
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