import axios from "axios"

// export const AxiosClient = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com',
//     timeout: 10000,
// })

export default class AxiosClient {
    api;

    constructor(config) {
        this.api = axios.create(config);
        this.api.defaults.baseURL = this.getDefaultBaseUrl();
    }

    getDefaultBaseUrl = () => {
        return 'https://jsonplaceholder.typicode.com';
    };

    get = config => {
        return this.api.get(config.url, config.config);
    };
    post = config => {
        return this.api.post(config.url, config.data, config.config);
    };
    put = config => {
        return this.api.put(config.url, config.data, config.config);
    };
    delete = config => {
        return this.api.delete(config.url, config.config);
    };
}