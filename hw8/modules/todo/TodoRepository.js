import {axiosClient} from "../../axios/axiosClient";
import {TodoModel} from "./TodoModel";
import {limit, start} from "../../axios/axiosParams";

export default class TodoRepository {
    getDataFromExternalStorage = async () => {
        try {
            const response = await axiosClient
                .get('/todos', {
                    params: {
                        _start: start,
                        _limit: limit
                    }
                })
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