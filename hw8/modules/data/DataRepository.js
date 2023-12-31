import AxiosClient from "../../axios/AxiosClient";

export default class DataRepository {
    apiClient = null;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    getDataFromApi = () => {
        return this.apiClient.get({ url: '/todos' });
    };
}