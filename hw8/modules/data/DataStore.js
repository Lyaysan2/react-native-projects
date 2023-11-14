
import {makeAutoObservable} from 'mobx';
import DataService from "./DataService";
import LocalRepository from "../../localStorage/LocalRepository";

export class DataStore {
    data = [];
    isLoading = false;
    dataService;
    localRepository;

    constructor() {
        this.dataService = new DataService();
        this.localRepository = new LocalRepository('Data');
        makeAutoObservable(this);
    };

    getData = () => {
        this.setIsLoading(true);

        this.dataService
            .getData()
            .then(result => {
                this.localRepository.setItems(result);
                this.setData(result);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    setIsLoading = isLoading => {
        this.isLoading = isLoading;
    }

    setData = data => {
        this.data = data;
    }

    removeDataFromLocal = async () => {
        this.localRepository.removeAll();
        this.setData(await this.localRepository.getItems() ?? []);
    };
}