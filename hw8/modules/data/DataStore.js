import {makeAutoObservable} from 'mobx';
import DataService from "./DataService";

export class DataStore {
    data = [];
    isLoading = false;
    dataService;

    constructor() {
        this.dataService = new DataService();
        makeAutoObservable(this);
    };

    getDataInfo = () => {
        this.setIsLoading(true);

        this.dataService
            .getData()
            .then(result => {
                this.setData(result);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    setDataInfo = () => {
        this.setIsLoading(true);
        this.dataService.setData()
            .then(() => this.setIsLoading(false));
    }

    removeDataInfo = async () => {
        this.dataService.removeAllData()
            .then(() => this.setData([]));
    };

    setIsLoading = isLoading => {
        this.isLoading = isLoading;
    }

    setData = data => {
        this.data = data;
    }
}